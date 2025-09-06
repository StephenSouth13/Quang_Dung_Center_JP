import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Award, BookOpen, Target } from "lucide-react"

const allCourses = [
  {
    title: "JLPT N5 – Cơ bản",
    duration: "3 tháng",
    price: "3.000.000 VNĐ",
    desc: "Khóa học nhập môn tiếng Nhật dành cho người mới bắt đầu. Học hiragana, katakana, kanji cơ bản và ngữ pháp nền tảng.",
    level: "N5",
    popular: false,
    features: [
      "Học bảng chữ cái Hiragana, Katakana",
      "300 từ vựng cơ bản",
      "Ngữ pháp nền tảng",
      "Luyện nghe, nói cơ bản",
    ],
    schedule: "3 buổi/tuần, 1.5h/buổi",
    students: "10-15 học viên/lớp",
  },
  {
    title: "JLPT N4 – Sơ trung cấp",
    duration: "4 tháng",
    price: "4.500.000 VNĐ",
    desc: "Tiếp tục nâng cao, củng cố kiến thức ngữ pháp và từ vựng. Chuẩn bị cho việc giao tiếp cơ bản.",
    level: "N4",
    popular: false,
    features: ["600 từ vựng mới", "Ngữ pháp trung cấp", "Kanji 300 chữ", "Luyện đọc hiểu cơ bản"],
    schedule: "3 buổi/tuần, 1.5h/buổi",
    students: "10-15 học viên/lớp",
  },
  {
    title: "JLPT N3 – Trung cấp",
    duration: "5 tháng",
    price: "6.000.000 VNĐ",
    desc: "Khóa học dành cho người muốn đi làm tại Nhật. Nâng cao khả năng giao tiếp và đọc hiểu.",
    level: "N3",
    popular: true,
    features: ["1300 từ vựng", "Ngữ pháp phức tạp", "Kanji 650 chữ", "Luyện nghe nâng cao"],
    schedule: "3 buổi/tuần, 2h/buổi",
    students: "8-12 học viên/lớp",
  },
  {
    title: "JLPT N2 – Cao cấp",
    duration: "6 tháng",
    price: "7.500.000 VNĐ",
    desc: "Nắm vững ngữ pháp, đọc hiểu báo, tin tức tiếng Nhật. Chuẩn bị cho môi trường làm việc chuyên nghiệp.",
    level: "N2",
    popular: false,
    features: ["2400 từ vựng", "Ngữ pháp cao cấp", "Kanji 1000 chữ", "Đọc hiểu văn bản phức tạp"],
    schedule: "3 buổi/tuần, 2h/buổi",
    students: "6-10 học viên/lớp",
  },
  {
    title: "JLPT N1 – Thượng cấp",
    duration: "8 tháng",
    price: "9.000.000 VNĐ",
    desc: "Chinh phục cấp độ cao nhất JLPT. Thành thạo tiếng Nhật ở mức độ gần như người bản xứ.",
    level: "N1",
    popular: false,
    features: ["3000+ từ vựng", "Ngữ pháp thượng cấp", "Kanji 2000+ chữ", "Đọc hiểu văn học, báo chí"],
    schedule: "3 buổi/tuần, 2.5h/buổi",
    students: "5-8 học viên/lớp",
  },
  {
    title: "Khóa Kaiwa – Giao tiếp",
    duration: "3 tháng",
    price: "3.500.000 VNĐ",
    desc: "Thực hành giao tiếp tiếng Nhật hàng ngày. Tập trung vào kỹ năng nói và nghe thực tế.",
    level: "Kaiwa",
    popular: false,
    features: ["Giao tiếp hàng ngày", "Phát âm chuẩn", "Tình huống thực tế", "Văn hóa Nhật Bản"],
    schedule: "2 buổi/tuần, 1.5h/buổi",
    students: "6-10 học viên/lớp",
  },
  {
    title: "Khóa Luyện đề JLPT",
    duration: "2 tháng",
    price: "2.500.000 VNĐ",
    desc: "Luyện giải đề JLPT N5-N1, chiến lược làm bài thi. Tăng tỷ lệ đậu kỳ thi chính thức.",
    level: "Practice",
    popular: false,
    features: ["Đề thi thật các năm", "Chiến lược làm bài", "Chấm điểm chi tiết", "Tư vấn cá nhân"],
    schedule: "2 buổi/tuần, 2h/buổi",
    students: "8-15 học viên/lớp",
  },
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Khóa học tiếng Nhật</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Chinh phục JLPT từ
              <span className="text-primary"> N5 đến N1</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
              Hệ thống khóa học đầy đủ từ cơ bản đến nâng cao, phù hợp với mọi trình độ và mục tiêu học tập của bạn.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCourses.map((course, index) => (
              <Card
                key={index}
                className="relative bg-card border-border hover:shadow-lg transition-all duration-300 hover:scale-105 group"
              >
                {course.popular && (
                  <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground animate-bounce">
                    Phổ biến
                  </Badge>
                )}

                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <Badge
                      variant="secondary"
                      className={`${
                        course.level.startsWith("N")
                          ? "bg-blue-600 text-white border-blue-600"
                          : "bg-green-600 text-white border-green-600"
                      }`}
                    >
                      {course.level}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-card-foreground group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">{course.desc}</CardDescription>
                </CardHeader>

                <CardContent className="pb-4">
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4 text-primary" />
                        <span>{course.students}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-card-foreground text-sm">Nội dung khóa học:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {course.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 border-t border-border">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">Lịch học:</span>
                        <span className="text-sm font-medium text-card-foreground">{course.schedule}</span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-sm text-muted-foreground">Học phí:</span>
                        <span className="font-bold text-primary text-lg">{course.price}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="pt-0">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group-hover:bg-secondary group-hover:text-secondary-foreground transition-all hover:scale-105">
                    Đăng ký ngay
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-card-foreground mb-4">Ưu điểm vượt trội</h2>
            <p className="text-muted-foreground text-lg">Tại sao hàng nghìn học viên lựa chọn Quang Dũng Center</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Tỷ lệ đậu 95%",
                description: "Cam kết chất lượng đầu ra với phương pháp giảng dạy hiệu quả",
              },
              {
                icon: Users,
                title: "Lớp học nhỏ",
                description: "Tối đa 15 học viên, đảm bảo chất lượng và sự quan tâm đến từng cá nhân",
              },
              {
                icon: BookOpen,
                title: "Tài liệu chuẩn",
                description: "Giáo trình chính thống từ Nhật Bản, cập nhật theo xu hướng mới nhất",
              },
              {
                icon: Target,
                title: "Học thử miễn phí",
                description: "1 tuần học thử không điều kiện, hoàn tiền 100% nếu không hài lòng",
              },
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 group">
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <benefit.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Sẵn sàng bắt đầu hành trình tiếng Nhật?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Đăng ký tư vấn miễn phí để chọn khóa học phù hợp với trình độ và mục tiêu của bạn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Tư vấn miễn phí
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              Học thử ngay
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
