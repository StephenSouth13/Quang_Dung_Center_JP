"use client"

import { Header } from "@/components/header"
import { FloatingChatbot } from "@/components/floating-chatbot"
import { BackToTop } from "@/components/back-to-top"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useLanguage } from "@/hooks/use-language"
import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
  Clock,
  DollarSign,
  Quote,
  Star,
  MapPin,
  Mail,
  Phone,
  Facebook,
  Youtube,
  Send,
} from "lucide-react"

export default function HomePage() {
  const { t, language } = useLanguage()

  const courses = [
    {
      title: language === "vi" ? "JLPT N5 – Cơ bản" : "JLPT N5 – 基礎",
      duration: language === "vi" ? "3 tháng" : "3ヶ月",
      price: "3.000.000 VNĐ",
      desc:
        language === "vi" ? "Khóa học nhập môn tiếng Nhật dành cho người mới bắt đầu" : "初心者向けの日本語入門コース",
      level: "N5",
      popular: false,
    },
    {
      title: language === "vi" ? "JLPT N4 – Sơ trung cấp" : "JLPT N4 – 初中級",
      duration: language === "vi" ? "4 tháng" : "4ヶ月",
      price: "4.500.000 VNĐ",
      desc:
        language === "vi" ? "Tiếp tục nâng cao, củng cố kiến thức ngữ pháp và từ vựng" : "文法と語彙の知識を向上・強化",
      level: "N4",
      popular: false,
    },
    {
      title: language === "vi" ? "JLPT N3 – Trung cấp" : "JLPT N3 – 中級",
      duration: language === "vi" ? "5 tháng" : "5ヶ月",
      price: "6.000.000 VNĐ",
      desc: language === "vi" ? "Khóa học dành cho người muốn đi làm tại Nhật" : "日本で働きたい方向けのコース",
      level: "N3",
      popular: true,
    },
    {
      title: language === "vi" ? "JLPT N2 – Cao cấp" : "JLPT N2 – 上級",
      duration: language === "vi" ? "6 tháng" : "6ヶ月",
      price: "7.500.000 VNĐ",
      desc:
        language === "vi"
          ? "Nắm vững ngữ pháp, đọc hiểu báo, tin tức tiếng Nhật"
          : "文法をマスターし、新聞・ニュースを理解",
      level: "N2",
      popular: false,
    },
    {
      title: language === "vi" ? "JLPT N1 – Thượng cấp" : "JLPT N1 – 最上級",
      duration: language === "vi" ? "8 tháng" : "8ヶ月",
      price: "9.000.000 VNĐ",
      desc: language === "vi" ? "Chinh phục cấp độ cao nhất JLPT" : "JLPT最高レベルを攻略",
      level: "N1",
      popular: false,
    },
    {
      title: language === "vi" ? "Khóa Kaiwa – Giao tiếp" : "会話コース",
      duration: language === "vi" ? "3 tháng" : "3ヶ月",
      price: "3.500.000 VNĐ",
      desc: language === "vi" ? "Thực hành giao tiếp tiếng Nhật hàng ngày" : "日常日本語会話の練習",
      level: "Kaiwa",
      popular: false,
    },
    {
      title: language === "vi" ? "Khóa Luyện đề JLPT" : "JLPT試験対策コース",
      duration: language === "vi" ? "2 tháng" : "2ヶ月",
      price: "2.500.000 VNĐ",
      desc: language === "vi" ? "Luyện giải đề JLPT N5-N1, chiến lược làm bài thi" : "JLPT N5-N1問題練習、試験戦略",
      level: "Practice",
      popular: false,
    },
  ]

  const teachers = [
    {
      name: language === "vi" ? "Thầy Hiroshi Tanaka" : "田中寛先生",
      specialty: "JLPT N1-N2",
      description:
        language === "vi"
          ? "Thạc sĩ Ngôn ngữ học, 10 năm kinh nghiệm giảng dạy tại Việt Nam"
          : "言語学修士、ベトナムでの10年の教育経験",
      experience: language === "vi" ? "10 năm" : "10年",
      avatar: "/japanese-teacher-male-professional.jpg",
    },
    {
      name: language === "vi" ? "Cô Yuki Sato" : "佐藤雪先生",
      specialty: "JLPT N3-N4",
      description:
        language === "vi"
          ? "Cử nhân Sư phạm, chuyên gia phương pháp giảng dạy hiện đại"
          : "教育学学士、現代教授法の専門家",
      experience: language === "vi" ? "8 năm" : "8年",
      avatar: "/japanese-teacher-female-professional.jpg",
    },
    {
      name: language === "vi" ? "Thầy Kenji Yamamoto" : "山本健二先生",
      specialty: language === "vi" ? "Kaiwa - Giao tiếp" : "会話専門",
      description:
        language === "vi"
          ? "Chuyên gia giao tiếp, từng làm việc tại nhiều công ty Nhật Bản"
          : "会話専門家、多くの日本企業での勤務経験",
      experience: language === "vi" ? "12 năm" : "12年",
      avatar: "/japanese-conversation-teacher-male.jpg",
    },
    {
      name: language === "vi" ? "Cô Mai Nguyễn" : "グエン・マイ先生",
      specialty: language === "vi" ? "JLPT N5 - Cơ bản" : "JLPT N5 - 基礎",
      description:
        language === "vi"
          ? "Thạc sĩ Nhật Bản học, chuyên hướng dẫn học viên mới bắt đầu"
          : "日本学修士、初心者指導専門",
      experience: language === "vi" ? "6 năm" : "6年",
      avatar: "/placeholder-y7pq2.png",
    },
  ]

  const testimonials = [
    {
      name: language === "vi" ? "Anh Minh Tuấn" : "ミン・トゥアンさん",
      course: "JLPT N2",
      feedback:
        language === "vi"
          ? "Nhờ có thầy cô tại Quang Dũng Center, tôi đã đậu N2 với điểm cao. Phương pháp giảng dạy rất dễ hiểu và thực tế."
          : "クアンズンセンターの先生方のおかげで、N2に高得点で合格できました。教授法がとても分かりやすく実践的です。",
      rating: 5,
      avatar: "/placeholder-93w5j.png",
    },
    {
      name: language === "vi" ? "Chị Lan Anh" : "ラン・アンさん",
      course: "JLPT N3",
      feedback:
        language === "vi"
          ? "Lớp học nhỏ, thầy cô quan tâm từng học viên. Tôi cảm thấy tiến bộ rõ rệt sau mỗi buổi học."
          : "少人数クラスで、先生方が一人一人を大切にしてくれます。毎回の授業で明らかな進歩を感じています。",
      rating: 5,
      avatar: "/vietnamese-student-female-smiling.jpg",
    },
    {
      name: language === "vi" ? "Anh Đức Huy" : "ドゥック・フイさん",
      course: language === "vi" ? "Kaiwa" : "会話",
      feedback:
        language === "vi"
          ? "Khóa giao tiếp giúp tôi tự tin nói chuyện với đồng nghiệp Nhật Bản. Rất hữu ích cho công việc!"
          : "会話コースのおかげで、日本人の同僚と自信を持って話せるようになりました。仕事にとても役立っています！",
      rating: 5,
      avatar: "/vietnamese-professional-male-confident.jpg",
    },
    {
      name: language === "vi" ? "Chị Thu Hà" : "トゥー・ハーさん",
      course: "JLPT N1",
      feedback:
        language === "vi"
          ? "Đây là trung tâm tốt nhất tôi từng học. Đậu N1 ngay lần đầu tiên nhờ sự hướng dẫn tận tình của thầy cô."
          : "これまで学んだ中で最高のセンターです。先生方の丁寧な指導のおかげで、N1に一発合格できました。",
      rating: 5,
      avatar: "/vietnamese-student-female-graduate.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 py-12 sm:py-16 lg:py-32">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Hero Content */}
              <div className="text-center lg:text-left animate-in slide-in-from-left-10 duration-1000">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  {t("heroTitle")}
                  <span className="text-blue-300 animate-pulse block sm:inline"> N5 đến N1</span>
                </h1>
                <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl animate-in slide-in-from-left-10 duration-1000 delay-200">
                  {t("heroSubtitle")}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start animate-in slide-in-from-left-10 duration-1000 delay-400 mb-8 sm:mb-12">
                  <Button
                    size="lg"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 sm:px-8 py-3 text-base sm:text-lg hover:scale-105 transition-transform w-full sm:w-auto"
                  >
                    {t("freeTrialBtn")}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-300 text-blue-300 hover:bg-blue-300 hover:text-blue-900 px-6 sm:px-8 py-3 text-base sm:text-lg bg-transparent hover:scale-105 transition-transform w-full sm:w-auto"
                  >
                    {t("consultBtn")}
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 animate-in slide-in-from-left-10 duration-1000 delay-600">
                  {[
                    { number: "1000+", label: t("studentsCount") },
                    { number: "95%", label: t("passRate") },
                    { number: "5+", label: t("experience") },
                    { number: "24/7", label: language === "vi" ? "Hỗ trợ" : "サポート" },
                  ].map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="text-xl sm:text-2xl font-bold text-blue-300 group-hover:scale-110 transition-transform">
                        {stat.number}
                      </div>
                      <div className="text-xs sm:text-sm text-blue-100">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hero Illustration */}
              <div className="relative animate-in slide-in-from-right-10 duration-1000 delay-300 mt-8 lg:mt-0">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                    {[
                      { icon: GraduationCap, title: "JLPT N5-N1", subtitle: t("flexibleSchedule") },
                      { icon: BookOpen, title: t("flexibleSchedule"), subtitle: "Online & Offline" },
                      {
                        icon: Users,
                        title: language === "vi" ? "Lớp nhỏ" : "少人数クラス",
                        subtitle: language === "vi" ? "Tối đa 15 học viên" : "最大15名",
                      },
                      {
                        icon: Award,
                        title: language === "vi" ? "Chứng chỉ" : "証明書",
                        subtitle: language === "vi" ? "Được công nhận" : "認定済み",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-blue-500/20 rounded-xl p-3 sm:p-4 lg:p-6 text-center hover:bg-blue-500/30 transition-all duration-300 hover:scale-105"
                      >
                        <item.icon className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 text-blue-300 mx-auto mb-2 sm:mb-3 lg:mb-4" />
                        <div className="text-white font-semibold text-xs sm:text-sm lg:text-base">{item.title}</div>
                        <div className="text-blue-100 text-xs sm:text-sm">{item.subtitle}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Preview Section */}
        <ScrollReveal>
          <section className="py-12 sm:py-16 bg-card">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                  {language === "vi" ? "Tại sao chọn Quang Dũng Center?" : "なぜクアンズンセンターを選ぶのか？"}
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                  {language === "vi"
                    ? "Chúng tôi cam kết mang đến chất lượng giảng dạy tốt nhất với phương pháp hiện đại"
                    : "最新の方法で最高品質の教育を提供することをお約束します"}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {[
                  {
                    icon: GraduationCap,
                    title: t("qualifiedTeachers"),
                    description: t("qualifiedTeachersDesc"),
                  },
                  {
                    icon: BookOpen,
                    title: language === "vi" ? "Phương pháp hiện đại" : "現代的な方法",
                    description:
                      language === "vi"
                        ? "Kết hợp giảng dạy truyền thống với công nghệ, tương tác cao"
                        : "伝統的な教育と技術を組み合わせ、高い相互作用",
                  },
                  {
                    icon: Award,
                    title: language === "vi" ? "Tỷ lệ đậu cao" : "高い合格率",
                    description: t("clearOutputDesc"),
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="text-center p-4 sm:p-6 group hover:bg-background/50 rounded-lg transition-all duration-300"
                  >
                    <div className="bg-primary/10 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Courses Section */}
        <ScrollReveal>
          <section id="courses" className="py-16 sm:py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 sm:mb-4">{t("coursesTitle")}</h2>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">{t("coursesSubtitle")}</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {courses.map((course, index) => (
                  <ScrollReveal key={index} delay={index * 100}>
                    <Card className="relative bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-105 group h-full">
                      {course.popular && (
                        <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground animate-bounce text-xs">
                          {language === "vi" ? "Phổ biến" : "人気"}
                        </Badge>
                      )}

                      <CardHeader className="pb-3 sm:pb-4">
                        <div className="flex items-center justify-between mb-2">
                          <Badge
                            variant="secondary"
                            className={`text-xs ${
                              course.level.startsWith("N")
                                ? "bg-blue-600 text-white border-blue-600"
                                : "bg-green-600 text-white border-green-600"
                            }`}
                          >
                            {course.level}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg sm:text-xl text-card-foreground group-hover:text-primary transition-colors">
                          {course.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground text-sm">{course.desc}</CardDescription>
                      </CardHeader>

                      <CardContent className="pb-3 sm:pb-4 flex-1">
                        <div className="space-y-2 sm:space-y-3">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                            <span>
                              {language === "vi" ? "Thời gian:" : "期間:"} {course.duration}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <DollarSign className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="font-semibold text-primary text-base sm:text-lg">{course.price}</span>
                          </div>
                        </div>
                      </CardContent>

                      <CardFooter className="pt-0">
                        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:bg-secondary group-hover:text-secondary-foreground transition-all hover:scale-105 text-sm sm:text-base">
                          {t("registerNow")}
                        </Button>
                      </CardFooter>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>

              {/* Course Benefits */}
              <ScrollReveal delay={300}>
                <div className="mt-12 sm:mt-16 bg-card rounded-2xl p-6 sm:p-8 border border-border hover:shadow-lg transition-all duration-300">
                  <h3 className="text-xl sm:text-2xl font-bold text-center text-card-foreground mb-6 sm:mb-8">
                    {language === "vi" ? "Ưu đãi đặc biệt khi đăng ký khóa học" : "コース登録時の特別優待"}
                  </h3>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                    {[
                      {
                        icon: BookOpen,
                        title: language === "vi" ? "Tài liệu miễn phí" : "無料教材",
                        description: language === "vi" ? "Sách giáo trình và bài tập" : "教科書と練習問題",
                      },
                      {
                        icon: Users,
                        title: language === "vi" ? "Học thử 1 tuần" : "1週間体験",
                        description: language === "vi" ? "Miễn phí không điều kiện" : "無条件で無料",
                      },
                      {
                        icon: Award,
                        title: t("clearOutput"),
                        description: language === "vi" ? "Học lại miễn phí nếu không đậu" : "不合格の場合無料再受講",
                      },
                      {
                        icon: GraduationCap,
                        title: language === "vi" ? "Hỗ trợ 24/7" : "24/7サポート",
                        description: language === "vi" ? "Giải đáp thắc mắc mọi lúc" : "いつでも質問対応",
                      },
                    ].map((benefit, index) => (
                      <div key={index} className="text-center group">
                        <div className="bg-primary/10 rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                          <benefit.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                        </div>
                        <h4 className="font-semibold text-card-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors text-sm sm:text-base">
                          {benefit.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </ScrollReveal>

        {/* Teachers Section */}
        <ScrollReveal>
          <section className="py-16 sm:py-20 bg-card">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-card-foreground mb-3 sm:mb-4">
                  {t("teachersTitle")}
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">{t("teachersSubtitle")}</p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                {teachers.map((teacher, index) => (
                  <ScrollReveal key={index} delay={index * 150}>
                    <Card className="bg-background border-border hover:shadow-xl transition-all duration-300 hover:scale-105 group text-center h-full">
                      <CardHeader className="pb-3 sm:pb-4">
                        <div className="relative mx-auto mb-3 sm:mb-4">
                          <Avatar className="w-20 h-20 sm:w-24 sm:h-24 mx-auto border-4 border-primary/20 group-hover:border-primary/40 transition-colors">
                            <AvatarImage src={teacher.avatar || "/placeholder.svg"} alt={teacher.name} />
                            <AvatarFallback className="text-base sm:text-lg font-semibold bg-primary/10 text-primary">
                              {teacher.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                        </div>
                        <CardTitle className="text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors">
                          {teacher.name}
                        </CardTitle>
                        <Badge
                          variant="secondary"
                          className="mx-auto bg-primary/10 text-primary border-primary/20 text-xs"
                        >
                          {teacher.specialty}
                        </Badge>
                      </CardHeader>

                      <CardContent className="flex-1">
                        <p className="text-muted-foreground text-xs sm:text-sm mb-2 sm:mb-3">{teacher.description}</p>
                        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-primary">
                          <Award className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>
                            {teacher.experience} {language === "vi" ? "kinh nghiệm" : "経験"}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Testimonials Section */}
        <ScrollReveal>
          <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/5 rounded-full blur-2xl animate-bounce delay-1000"></div>
              <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-300/5 rounded-full blur-2xl animate-bounce delay-2000"></div>
            </div>
            <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">{t("testimonialsTitle")}</h2>
                <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">{t("testimonialsSubtitle")}</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
                {testimonials.map((testimonial, index) => (
                  <ScrollReveal key={index} delay={index * 200}>
                    <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 h-full">
                      <CardContent className="p-4 sm:p-6">
                        <div className="flex items-start gap-3 sm:gap-4">
                          <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-blue-300 flex-shrink-0 mt-1 animate-pulse" />
                          <div className="flex-1 min-w-0">
                            <p className="text-white text-sm sm:text-lg mb-3 sm:mb-4 leading-relaxed">
                              "{testimonial.feedback}"
                            </p>

                            <div className="flex items-center gap-2 sm:gap-3">
                              <Avatar className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-blue-300/30 flex-shrink-0">
                                <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                                <AvatarFallback className="bg-blue-500/20 text-blue-300 text-xs sm:text-sm">
                                  {testimonial.name
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </AvatarFallback>
                              </Avatar>

                              <div className="flex-1 min-w-0">
                                <div className="font-semibold text-white text-sm sm:text-base truncate">
                                  {testimonial.name}
                                </div>
                                <div className="text-blue-200 text-xs sm:text-sm">
                                  {language === "vi" ? "Khóa" : "コース"} {testimonial.course}
                                </div>
                              </div>

                              <div className="flex gap-1 flex-shrink-0">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400 animate-pulse"
                                    style={{ animationDelay: `${i * 100}ms` }}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                ))}
              </div>

              {/* Call to Action */}
              <ScrollReveal delay={400}>
                <div className="text-center mt-12 sm:mt-16">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                    {language === "vi" ? "Bạn cũng muốn thành công như họ?" : "あなたも彼らのように成功したいですか？"}
                  </h3>
                  <Button
                    size="lg"
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 sm:px-8 py-3 text-base sm:text-lg hover:scale-110 transition-transform"
                  >
                    {language === "vi" ? "Đăng ký học thử ngay" : "今すぐ体験授業に申し込む"}
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </ScrollReveal>

        {/* Contact Section */}
        <ScrollReveal>
          <section id="contact" className="py-16 sm:py-20 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 sm:mb-4">{t("contactTitle")}</h2>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">{t("contactSubtitle")}</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
                {/* Contact Form */}
                <ScrollReveal delay={200}>
                  <Card className="bg-card border-border hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl sm:text-2xl text-card-foreground">
                        {language === "vi" ? "Gửi tin nhắn cho chúng tôi" : "メッセージを送信"}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground text-sm sm:text-base">
                        {language === "vi"
                          ? "Điền thông tin bên dưới và chúng tôi sẽ liên hệ lại trong 24h"
                          : "以下の情報を入力してください。24時間以内にご連絡いたします"}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 sm:space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-card-foreground text-sm">
                            {t("name")} *
                          </Label>
                          <Input
                            id="name"
                            placeholder={language === "vi" ? "Nhập họ và tên của bạn" : "お名前を入力してください"}
                            className="bg-background border-border text-foreground focus:ring-2 focus:ring-primary transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-card-foreground text-sm">
                            {t("phone")} *
                          </Label>
                          <Input
                            id="phone"
                            placeholder={language === "vi" ? "Nhập số điện thoại" : "電話番号を入力してください"}
                            className="bg-background border-border text-foreground focus:ring-2 focus:ring-primary transition-all"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-card-foreground text-sm">
                          {t("email")} *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder={language === "vi" ? "Nhập địa chỉ email" : "メールアドレスを入力してください"}
                          className="bg-background border-border text-foreground focus:ring-2 focus:ring-primary transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="course" className="text-card-foreground text-sm">
                          {language === "vi" ? "Khóa học quan tâm" : "興味のあるコース"}
                        </Label>
                        <Input
                          id="course"
                          placeholder={language === "vi" ? "VD: JLPT N3, Kaiwa..." : "例：JLPT N3、会話..."}
                          className="bg-background border-border text-foreground focus:ring-2 focus:ring-primary transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-card-foreground text-sm">
                          {t("message")}
                        </Label>
                        <Textarea
                          id="message"
                          placeholder={
                            language === "vi"
                              ? "Chia sẻ mục tiêu học tập và câu hỏi của bạn..."
                              : "学習目標や質問をお聞かせください..."
                          }
                          rows={4}
                          className="bg-background border-border text-foreground focus:ring-2 focus:ring-primary transition-all resize-none"
                        />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-transform">
                        <Send className="h-4 w-4 mr-2" />
                        {t("sendMessage")}
                      </Button>
                    </CardFooter>
                  </Card>
                </ScrollReveal>

                {/* Contact Info & Map */}
                <div className="space-y-6 sm:space-y-8">
                  {/* Contact Information */}
                  <ScrollReveal delay={400}>
                    <Card className="bg-card border-border hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <CardTitle className="text-xl sm:text-2xl text-card-foreground">
                          {language === "vi" ? "Thông tin liên hệ" : "連絡先情報"}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4 sm:space-y-6">
                        {[
                          {
                            icon: MapPin,
                            title: language === "vi" ? "Địa chỉ" : "住所",
                            content:
                              language === "vi"
                                ? "123 Đường Nguyễn Văn Cừ, Quận 1\nTP. Hồ Chí Minh, Việt Nam"
                                : "123 グエン・ヴァン・ク通り、1区\nホーチミン市、ベトナム",
                          },
                          {
                            icon: Phone,
                            title: "Hotline",
                            content: "0123 456 789",
                            subtitle: language === "vi" ? "Hỗ trợ 24/7" : "24/7サポート",
                          },
                          {
                            icon: Mail,
                            title: "Email",
                            content: "quangdungcenter@gmail.com",
                            subtitle: language === "vi" ? "Phản hồi trong 2h" : "2時間以内に返信",
                          },
                        ].map((contact, index) => (
                          <div key={index} className="flex items-start gap-3 sm:gap-4 group">
                            <div className="bg-primary/10 rounded-full p-2 sm:p-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                              <contact.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <h4 className="font-semibold text-card-foreground mb-1 group-hover:text-primary transition-colors text-sm sm:text-base">
                                {contact.title}
                              </h4>
                              <p className="text-muted-foreground whitespace-pre-line text-sm sm:text-base">
                                {contact.content}
                              </p>
                              {contact.subtitle && (
                                <p className="text-xs sm:text-sm text-muted-foreground">{contact.subtitle}</p>
                              )}
                            </div>
                          </div>
                        ))}

                        {/* Social Links */}
                        <div className="pt-4 border-t border-border">
                          <h4 className="font-semibold text-card-foreground mb-3 text-sm sm:text-base">
                            {language === "vi" ? "Theo dõi chúng tôi" : "フォローしてください"}
                          </h4>
                          <div className="flex flex-wrap gap-2 sm:gap-3">
                            {[
                              { icon: Facebook, label: "Facebook" },
                              { icon: Youtube, label: "YouTube" },
                              { label: "Zalo" },
                            ].map((social, index) => (
                              <Button
                                key={index}
                                size="sm"
                                variant="outline"
                                className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent hover:scale-105 transition-transform text-xs sm:text-sm"
                              >
                                {social.icon && <social.icon className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />}
                                {social.label}
                              </Button>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollReveal>

                  {/* Map */}
                  <ScrollReveal delay={600}>
                    <Card className="bg-card border-border hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-0">
                        <div className="w-full h-48 sm:h-64 bg-muted rounded-lg flex items-center justify-center group hover:bg-muted/80 transition-colors">
                          <div className="text-center p-4">
                            <MapPin className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                            <p className="text-muted-foreground text-sm sm:text-base">
                              {language === "vi"
                                ? "Google Maps sẽ được tích hợp tại đây"
                                : "Google Mapsがここに統合されます"}
                            </p>
                            <p className="text-xs sm:text-sm text-muted-foreground">
                              123 Đường Nguyễn Văn Cừ, Quận 1, TP.HCM
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>

      

      {/* Floating Components */}
      <FloatingChatbot />
      <BackToTop />
    </div>
  )
}
