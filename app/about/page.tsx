"use client"

import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useLanguage } from "@/hooks/use-language"
import { Users, Award, BookOpen, Target, Heart, Star, GraduationCap, Languages } from "lucide-react"

export default function AboutPage() {
  const { t, language } = useLanguage()

  const stats = [
    { icon: Users, label: t("studentsCount"), value: "2000+" },
    { icon: Award, label: t("experience"), value: "10+" },
    { icon: BookOpen, label: language === "vi" ? "Khóa học" : "コース", value: "15+" },
    { icon: Target, label: language === "vi" ? "Tỷ lệ đậu JLPT" : "JLPT合格率", value: "95%" },
  ]

  const values = [
    {
      icon: Heart,
      title: language === "vi" ? "Tận tâm" : "献身的",
      description:
        language === "vi"
          ? "Chúng tôi luôn đặt học viên làm trung tâm, tận tâm hướng dẫn từng bước học tập."
          : "私たちは常に学習者を中心に置き、学習の各段階を献身的に指導します。",
    },
    {
      icon: Star,
      title: language === "vi" ? "Chất lượng" : "品質",
      description:
        language === "vi"
          ? "Cam kết chất lượng giảng dạy cao với đội ngũ giảng viên giàu kinh nghiệm."
          : "経験豊富な講師陣による高品質な教育をお約束します。",
    },
    {
      icon: Target,
      title: language === "vi" ? "Hiệu quả" : "効果的",
      description:
        language === "vi"
          ? "Phương pháp học tập hiện đại, tập trung vào kết quả thực tế."
          : "現代的な学習方法で、実際の結果に焦点を当てます。",
    },
  ]

  const teachers = [
    {
      id: 1,
      name: language === "vi" ? "Thầy Nguyễn Quang Dũng" : "グエン・クアン・ズン先生",
      position: language === "vi" ? "Giám đốc học thuật" : "学術ディレクター",
      experience: language === "vi" ? "12 năm kinh nghiệm" : "12年の経験",
      qualifications:
        language === "vi"
          ? ["JLPT N1", "Thạc sĩ Ngôn ngữ Nhật", "Chứng chỉ giảng dạy tiếng Nhật"]
          : ["JLPT N1", "日本語学修士", "日本語教師資格"],
      specialties:
        language === "vi"
          ? ["Ngữ pháp N1-N2", "Luyện thi JLPT", "Tiếng Nhật doanh nghiệp"]
          : ["N1-N2文法", "JLPT試験対策", "ビジネス日本語"],
      description:
        language === "vi"
          ? "Với hơn 12 năm kinh nghiệm giảng dạy, thầy Dũng đã giúp hàng nghìn học viên đạt được mục tiêu JLPT và du học Nhật Bản."
          : "12年以上の教育経験を持ち、数千人の学習者がJLPT目標を達成し、日本留学を実現するのを支援してきました。",
      image: "/japanese-teacher-male-professional.jpg",
      achievements:
        language === "vi"
          ? ["500+ học viên đậu N1", "Giải thưởng giảng viên xuất sắc 2023"]
          : ["500人以上のN1合格者", "2023年優秀教師賞"],
    },
    {
      id: 2,
      name: language === "vi" ? "Cô Trần Thị Mai" : "チャン・ティ・マイ先生",
      position: language === "vi" ? "Giảng viên chính" : "主任講師",
      experience: language === "vi" ? "8 năm kinh nghiệm" : "8年の経験",
      qualifications:
        language === "vi"
          ? ["JLPT N1", "Cử nhân Nhật Bản học", "Chứng chỉ Pedagogy"]
          : ["JLPT N1", "日本学学士", "教育学資格"],
      specialties:
        language === "vi"
          ? ["Giao tiếp tiếng Nhật", "Văn hóa Nhật Bản", "N5-N3 Foundation"]
          : ["日本語会話", "日本文化", "N5-N3基礎"],
      description:
        language === "vi"
          ? "Cô Mai chuyên về giao tiếp và văn hóa Nhật Bản, tạo môi trường học tập thân thiện và hiệu quả cho học viên mới bắt đầu."
          : "マイ先生は日本語会話と日本文化を専門とし、初心者の学習者にとって親しみやすく効果的な学習環境を作り出しています。",
      image: "/japanese-teacher-female-professional.jpg",
      achievements:
        language === "vi"
          ? ["300+ học viên cải thiện giao tiếp", "Chuyên gia văn hóa Nhật Bản"]
          : ["300人以上の会話力向上", "日本文化専門家"],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">{t("about")}</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              {t("aboutTitle")}
              <span className="text-primary"> {language === "vi" ? "ước mơ Nhật Bản" : "日本の夢"}</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">{t("aboutSubtitle")}</p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Staff Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">{t("teachersTitle")}</Badge>
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {language === "vi" ? "Giảng viên chuyên nghiệp" : "プロフェッショナル講師"}
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{t("teachersSubtitle")}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {teachers.map((teacher) => (
                <Card key={teacher.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="relative">
                    <img
                      src={teacher.image || "/placeholder.svg"}
                      alt={teacher.name}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-1">{teacher.name}</h3>
                      <p className="text-sm opacity-90">{teacher.position}</p>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <span className="font-semibold text-primary">{teacher.position}</span>
                      <Badge variant="secondary" className="ml-auto">
                        {teacher.experience}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{teacher.description}</p>

                    {/* Qualifications */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm text-foreground mb-2 flex items-center gap-2">
                        <Award className="h-4 w-4 text-primary" />
                        {language === "vi" ? "Bằng cấp & Chứng chỉ" : "資格・証明書"}
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {teacher.qualifications.map((qual, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {qual}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm text-foreground mb-2 flex items-center gap-2">
                        <Languages className="h-4 w-4 text-primary" />
                        {language === "vi" ? "Chuyên môn" : "専門分野"}
                      </h4>
                      <div className="flex flex-wrap gap-1">
                        {teacher.specialties.map((specialty, index) => (
                          <Badge key={index} className="text-xs bg-primary/10 text-primary border-primary/20">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-sm text-foreground mb-2 flex items-center gap-2">
                        <Star className="h-4 w-4 text-yellow-500" />
                        {language === "vi" ? "Thành tích nổi bật" : "主な実績"}
                      </h4>
                      <ul className="space-y-1">
                        {teacher.achievements.map((achievement, index) => (
                          <li key={index} className="text-xs text-muted-foreground flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Teaching Philosophy */}
            <div className="mt-16 text-center">
              <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {language === "vi" ? "Triết lý giảng dạy" : "教育理念"}
                  </h3>
                  <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                    {language === "vi"
                      ? "Chúng tôi tin rằng mỗi học viên đều có tiềm năng riêng. Sứ mệnh của chúng tôi là tạo ra môi trường học tập tích cực, khuyến khích sự sáng tạo và giúp học viên tự tin sử dụng tiếng Nhật trong mọi tình huống thực tế."
                      : "私たちは、すべての学習者が独自の可能性を持っていると信じています。私たちの使命は、積極的な学習環境を作り、創造性を奨励し、学習者が実際のあらゆる状況で自信を持って日本語を使用できるよう支援することです。"}
                  </p>
                  <div className="flex justify-center mt-6">
                    <Badge className="bg-primary text-white px-4 py-2">
                      {language === "vi" ? "Học viên là trung tâm - 学習者中心" : "学習者中心 - Học viên là trung tâm"}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  {language === "vi" ? "Câu chuyện của chúng tôi" : "私たちのストーリー"}
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    {language === "vi"
                      ? "Quang Dũng Center được thành lập vào năm 2014 với sứ mệnh mang đến chất lượng giáo dục tiếng Nhật tốt nhất cho học viên Việt Nam."
                      : "クアンズンセンターは2014年に設立され、ベトナムの学習者に最高品質の日本語教育を提供するという使命を持っています。"}
                  </p>
                  <p>
                    {language === "vi"
                      ? "Bắt đầu từ một lớp học nhỏ với 10 học viên, chúng tôi đã không ngừng phát triển và hoàn thiện phương pháp giảng dạy, xây dựng đội ngũ giảng viên chuyên nghiệp."
                      : "10名の学習者を持つ小さなクラスから始まり、私たちは教授法を継続的に発展・改善し、プロフェッショナルな講師陣を構築してきました。"}
                  </p>
                  <p>
                    {language === "vi"
                      ? "Đến nay, với hơn 2000 học viên đã tin tưởng và lựa chọn, chúng tôi tự hào là một trong những trung tâm tiếng Nhật uy tín hàng đầu."
                      : "現在、2000人以上の学習者に信頼され選ばれ、私たちは最も信頼できる日本語センターの一つであることを誇りに思っています。"}
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/japanese-language-classroom-with-vietnamese-studen.jpg"
                  alt="Lớp học tiếng Nhật"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              {language === "vi" ? "Giá trị cốt lõi" : "コアバリュー"}
            </h2>
            <p className="text-muted-foreground text-lg">
              {language === "vi"
                ? "Những giá trị định hướng mọi hoạt động của chúng tôi"
                : "私たちのすべての活動を導く価値観"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {language === "vi" ? "Sẵn sàng bắt đầu hành trình tiếng Nhật?" : "日本語の旅を始める準備はできましたか？"}
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            {language === "vi"
              ? "Hãy để chúng tôi đồng hành cùng bạn trên con đường chinh phục tiếng Nhật và hiện thực hóa ước mơ Nhật Bản."
              : "日本語を習得し、日本の夢を実現する道のりで、私たちと一緒に歩みましょう。"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              {language === "vi" ? "Tư vấn miễn phí" : "無料相談"}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              {language === "vi" ? "Xem khóa học" : "コースを見る"}
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
