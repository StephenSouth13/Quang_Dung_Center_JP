"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Calendar, Clock, User, Phone, Mail, BookOpen, Target, MessageSquare } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { translations } from "@/lib/translations"

interface TrialFormData {
  fullName: string
  phone: string
  email: string
  age: string
  currentLevel: string
  targetLevel: string
  preferredTime: string
  preferredDate: string
  motivation: string
  experience: string
  notes: string
}

interface TrialRegistrationFormProps {
  isOpen: boolean
  onClose: () => void
}

export function TrialRegistrationForm({ isOpen, onClose }: TrialRegistrationFormProps) {
  const { language } = useLanguage()
  const t = translations[language]

  const [formData, setFormData] = useState<TrialFormData>({
    fullName: "",
    phone: "",
    email: "",
    age: "",
    currentLevel: "",
    targetLevel: "",
    preferredTime: "",
    preferredDate: "",
    motivation: "",
    experience: "",
    notes: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (field: keyof TrialFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const submitToGoogleSheets = async (data: TrialFormData) => {
    // Google Sheets Web App URL - replace with your actual deployment URL
    const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec"

    try {
      const response = await fetch(GOOGLE_SHEETS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          ...data,
        }),
      })

      return true
    } catch (error) {
      console.error("Error submitting to Google Sheets:", error)
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const success = await submitToGoogleSheets(formData)
      if (success) {
        setSubmitStatus("success")
        // Reset form after 2 seconds
        setTimeout(() => {
          setFormData({
            fullName: "",
            phone: "",
            email: "",
            age: "",
            currentLevel: "",
            targetLevel: "",
            preferredTime: "",
            preferredDate: "",
            motivation: "",
            experience: "",
            notes: "",
          })
          setSubmitStatus("idle")
          onClose()
        }, 2000)
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start sm:items-center justify-center p-2 sm:p-4 overflow-y-auto">
      <Card className="w-full max-w-2xl my-4 sm:my-0 sm:max-h-[90vh] overflow-y-auto bg-card border-border">
        <CardHeader className="relative px-4 sm:px-6 py-4 sm:py-6">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 sm:right-4 sm:top-4 h-8 w-8 sm:h-10 sm:w-10"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
          <CardTitle className="text-lg sm:text-xl lg:text-2xl font-bold text-primary pr-8 sm:pr-12">
            {language === "vi" ? "Đăng ký học thử miễn phí" : "無料体験レッスン申し込み"}
          </CardTitle>
          <CardDescription className="text-sm sm:text-base">
            {language === "vi"
              ? "Điền thông tin để nhận được buổi học thử miễn phí và tư vấn chi tiết về khóa học phù hợp"
              : "無料体験レッスンと詳細なコース相談を受けるために情報を入力してください"}
          </CardDescription>
        </CardHeader>

        <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
          {submitStatus === "success" && (
            <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-lg">
              <p className="text-green-800 dark:text-green-200 font-medium text-sm sm:text-base">
                {language === "vi"
                  ? "✅ Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn trong 24h."
                  : "✅ 登録が完了しました！24時間以内にご連絡いたします。"}
              </p>
            </div>
          )}

          {submitStatus === "error" && (
            <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg">
              <p className="text-red-800 dark:text-red-200 font-medium text-sm sm:text-base">
                {language === "vi"
                  ? "❌ Có lỗi xảy ra. Vui lòng thử lại hoặc liên hệ trực tiếp."
                  : "❌ エラーが発生しました。再試行するか直接お問い合わせください。"}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Personal Information */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2">
                <User className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                {language === "vi" ? "Thông tin cá nhân" : "個人情報"}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm sm:text-base">
                    {language === "vi" ? "Họ và tên *" : "氏名 *"}
                  </Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                    placeholder={language === "vi" ? "Nguyễn Văn A" : "山田太郎"}
                    required
                    className="w-full text-sm sm:text-base h-10 sm:h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="age" className="text-sm sm:text-base">
                    {language === "vi" ? "Tuổi" : "年齢"}
                  </Label>
                  <Select value={formData.age} onValueChange={(value) => handleInputChange("age", value)}>
                    <SelectTrigger className="h-10 sm:h-11 text-sm sm:text-base">
                      <SelectValue placeholder={language === "vi" ? "Chọn độ tuổi" : "年齢を選択"} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-18">{language === "vi" ? "Dưới 18 tuổi" : "18歳未満"}</SelectItem>
                      <SelectItem value="18-25">18-25</SelectItem>
                      <SelectItem value="26-35">26-35</SelectItem>
                      <SelectItem value="36-45">36-45</SelectItem>
                      <SelectItem value="over-45">{language === "vi" ? "Trên 45 tuổi" : "45歳以上"}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm sm:text-base">
                    <Phone className="h-3 w-3 sm:h-4 sm:w-4 inline mr-1" />
                    {language === "vi" ? "Số điện thoại *" : "電話番号 *"}
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="0901234567"
                    required
                    className="h-10 sm:h-11 text-sm sm:text-base"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm sm:text-base">
                    <Mail className="h-3 w-3 sm:h-4 sm:w-4 inline mr-1" />
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="example@email.com"
                    required
                    className="h-10 sm:h-11 text-sm sm:text-base"
                  />
                </div>
              </div>
            </div>

            {/* Course Information */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2">
                <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                {language === "vi" ? "Thông tin khóa học" : "コース情報"}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-2">
                  <Label htmlFor="currentLevel" className="text-sm sm:text-base">
                    {language === "vi" ? "Trình độ hiện tại" : "現在のレベル"}
                  </Label>
                  <Select
                    value={formData.currentLevel}
                    onValueChange={(value) => handleInputChange("currentLevel", value)}
                  >
                    <SelectTrigger className="h-10 sm:h-11 text-sm sm:text-base">
                      <SelectValue placeholder={language === "vi" ? "Chọn trình độ" : "レベルを選択"} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="beginner">{language === "vi" ? "Mới bắt đầu" : "初心者"}</SelectItem>
                      <SelectItem value="n5">N5</SelectItem>
                      <SelectItem value="n4">N4</SelectItem>
                      <SelectItem value="n3">N3</SelectItem>
                      <SelectItem value="n2">N2</SelectItem>
                      <SelectItem value="n1">N1</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="targetLevel" className="text-sm sm:text-base">
                    <Target className="h-3 w-3 sm:h-4 sm:w-4 inline mr-1" />
                    {language === "vi" ? "Mục tiêu *" : "目標 *"}
                  </Label>
                  <Select
                    value={formData.targetLevel}
                    onValueChange={(value) => handleInputChange("targetLevel", value)}
                    required
                  >
                    <SelectTrigger className="h-10 sm:h-11 text-sm sm:text-base">
                      <SelectValue placeholder={language === "vi" ? "Chọn mục tiêu" : "目標を選択"} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="n5">N5</SelectItem>
                      <SelectItem value="n4">N4</SelectItem>
                      <SelectItem value="n3">N3</SelectItem>
                      <SelectItem value="n2">N2</SelectItem>
                      <SelectItem value="n1">N1</SelectItem>
                      <SelectItem value="conversation">{language === "vi" ? "Giao tiếp" : "会話"}</SelectItem>
                      <SelectItem value="business">
                        {language === "vi" ? "Tiếng Nhật thương mại" : "ビジネス日本語"}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Schedule Preferences */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                {language === "vi" ? "Lịch học mong muốn" : "希望スケジュール"}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-2">
                  <Label htmlFor="preferredTime" className="text-sm sm:text-base">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4 inline mr-1" />
                    {language === "vi" ? "Thời gian học" : "学習時間"}
                  </Label>
                  <Select
                    value={formData.preferredTime}
                    onValueChange={(value) => handleInputChange("preferredTime", value)}
                  >
                    <SelectTrigger className="h-10 sm:h-11 text-sm sm:text-base">
                      <SelectValue placeholder={language === "vi" ? "Chọn thời gian" : "時間を選択"} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">
                        {language === "vi" ? "Buổi sáng (8:00-12:00)" : "午前 (8:00-12:00)"}
                      </SelectItem>
                      <SelectItem value="afternoon">
                        {language === "vi" ? "Buổi chiều (13:00-17:00)" : "午後 (13:00-17:00)"}
                      </SelectItem>
                      <SelectItem value="evening">
                        {language === "vi" ? "Buổi tối (18:00-21:00)" : "夜 (18:00-21:00)"}
                      </SelectItem>
                      <SelectItem value="weekend">{language === "vi" ? "Cuối tuần" : "週末"}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferredDate" className="text-sm sm:text-base">
                    {language === "vi" ? "Ngày học thử mong muốn" : "体験レッスン希望日"}
                  </Label>
                  <Input
                    id="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => handleInputChange("preferredDate", e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="h-10 sm:h-11 text-sm sm:text-base"
                  />
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold flex items-center gap-2">
                <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                {language === "vi" ? "Thông tin bổ sung" : "追加情報"}
              </h3>

              <div className="space-y-3 sm:space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="motivation" className="text-sm sm:text-base">
                    {language === "vi" ? "Lý do học tiếng Nhật" : "日本語学習の理由"}
                  </Label>
                  <Textarea
                    id="motivation"
                    value={formData.motivation}
                    onChange={(e) => handleInputChange("motivation", e.target.value)}
                    placeholder={
                      language === "vi"
                        ? "Ví dụ: Du học, làm việc tại Nhật, sở thích..."
                        : "例：留学、日本での就職、趣味など..."
                    }
                    rows={3}
                    className="text-sm sm:text-base resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="experience" className="text-sm sm:text-base">
                    {language === "vi" ? "Kinh nghiệm học tiếng Nhật" : "日本語学習経験"}
                  </Label>
                  <Textarea
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => handleInputChange("experience", e.target.value)}
                    placeholder={
                      language === "vi"
                        ? "Đã học bao lâu? Học ở đâu? Gặp khó khăn gì?"
                        : "どのくらい学習しましたか？どこで学びましたか？困難は何ですか？"
                    }
                    rows={3}
                    className="text-sm sm:text-base resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="notes" className="text-sm sm:text-base">
                    {language === "vi" ? "Ghi chú thêm" : "備考"}
                  </Label>
                  <Textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                    placeholder={language === "vi" ? "Câu hỏi hoặc yêu cầu đặc biệt..." : "質問や特別な要望など..."}
                    rows={2}
                    className="text-sm sm:text-base resize-none"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="w-full sm:flex-1 bg-transparent h-10 sm:h-11 text-sm sm:text-base"
                disabled={isSubmitting}
              >
                {language === "vi" ? "Hủy" : "キャンセル"}
              </Button>
              <Button
                type="submit"
                className="w-full sm:flex-1 h-10 sm:h-11 text-sm sm:text-base"
                disabled={isSubmitting || submitStatus === "success"}
              >
                {isSubmitting
                  ? language === "vi"
                    ? "Đang gửi..."
                    : "送信中..."
                  : language === "vi"
                    ? "Đăng ký ngay"
                    : "今すぐ登録"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
