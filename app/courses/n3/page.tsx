import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, BookOpen, Award, ArrowLeft, Briefcase } from "lucide-react"
import Link from "next/link"

export default function N3CoursePage() {
  const courseModules = [
    {
      week: "Tuần 1-3",
      title: "Ôn tập N4 và nâng cao",
      topics: ["Ôn tập toàn diện N4", "Ngữ pháp nâng cao", "Kanji 150 chữ mới", "Từ vựng chuyên ngành"],
      completed: true,
    },
    {
      week: "Tuần 4-6",
      title: "Ngữ pháp phức tạp",
      topics: ["Thể khả năng", "Thể bị động", "Thể sai khiến", "Câu điều kiện phức tạp"],
      completed: true,
    },
    {
      week: "Tuần 7-9",
      title: "Từ vựng và Kanji nâng cao",
      topics: ["Từ vựng công sở", "Từ vựng học thuật", "Kanji 300 chữ", "Từ đồng nghĩa, trái nghĩa"],
      completed: false,
    },
    {
      week: "Tuần 10-12",
      title: "Giao tiếp trong công việc",
      topics: ["Keigo (kính ngữ)", "Email công việc", "Thuyết trình", "Họp hành"],
      completed: false,
    },
    {
      week: "Tuần 13-16",
      title: "Đọc hiểu chuyên sâu",
      topics: ["Đọc báo, tạp chí", "Văn bản công việc", "Tiểu thuyết ngắn", "Phân tích văn bản"],
      completed: false,
    },
    {
      week: "Tuần 17-20",
      title: "Luyện thi và thực hành",
      topics: ["Đề thi thật các năm", "Kỹ thuật làm bài", "Mock test", "Thi thử cuối khóa"],
      completed: false,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Breadcrumb */}
      <section className="py-4 bg-card border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Trang chủ
            </Link>
            <span>/</span>
            <Link href="/courses" className="hover:text-primary transition-colors">
              Khóa học
            </Link>
            <span>/</span>
            <span className="text-foreground">JLPT N3</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 via-background to-orange-50/50 dark:from-orange-950/20 dark:via-background dark:to-orange-950/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Link
                href="/courses"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4"
              >
                <ArrowLeft className="h-4 w-4" />
                Quay lại danh sách khóa học
              </Link>
              <div className="flex items-center gap-2 mb-4">
                <Badge className="bg-orange-600 text-white">JLPT N3 - Trung cấp</Badge>
                <Badge variant="outline" className="border-orange-600 text-orange-600">
                  Phổ biến nhất
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Khóa học JLPT N3
                <span className="text-primary"> - Trung cấp</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Khóa học dành cho người muốn đi làm tại Nhật. Nâng cao khả năng giao tiếp, đọc hiểu và sử dụng tiếng
                Nhật trong môi trường công việc chuyên nghiệp.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: Clock, label: "5 tháng", sublabel: "60 buổi học" },
                  { icon: Users, label: "8-12", sublabel: "học viên/lớp" },
                  { icon: BookOpen, label: "1300+", sublabel: "từ vựng" },
                  { icon: Award, label: "90%", sublabel: "tỷ lệ đậu" },
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-card rounded-lg border border-border">
                    <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                    <div className="font-bold text-foreground">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">{stat.sublabel}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Đăng ký ngay - 6.000.000 VNĐ
                </Button>
                <Button size="lg" variant="outline">
                  Học thử miễn phí
                </Button>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-card border-border shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-orange-600" />
                    Cơ hội nghề nghiệp
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Làm việc tại công ty Nhật Bản</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Du học Nhật Bản</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Phiên dịch viên cơ bản</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Hướng dẫn viên du lịch</span>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-950/20 p-3 rounded-lg mt-4">
                      <p className="text-sm text-orange-700 dark:text-orange-400 font-medium">
                        💼 Mức lương trung bình: 15-25 triệu VNĐ/tháng
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Course Curriculum */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">Chương trình học N3</h2>
              <p className="text-muted-foreground text-lg">20 tuần học chuyên sâu, tập trung vào kỹ năng thực tế</p>
            </div>

            <div className="space-y-6">
              {courseModules.map((module, index) => (
                <Card
                  key={index}
                  className={`border-border hover:shadow-md transition-all duration-300 ${module.completed ? "bg-orange-50/50 dark:bg-orange-950/10 border-orange-200 dark:border-orange-800" : "bg-card"}`}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {module.completed ? (
                          <CheckCircle className="h-6 w-6 text-orange-600" />
                        ) : (
                          <div className="w-6 h-6 rounded-full border-2 border-muted-foreground/30"></div>
                        )}
                        <div>
                          <Badge variant="outline" className="mb-2">
                            {module.week}
                          </Badge>
                          <CardTitle
                            className={`text-xl ${module.completed ? "text-orange-700 dark:text-orange-400" : "text-foreground"}`}
                          >
                            {module.title}
                          </CardTitle>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-3">
                      {module.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center gap-2 text-sm">
                          <div
                            className={`w-2 h-2 rounded-full ${module.completed ? "bg-orange-500" : "bg-muted-foreground/30"}`}
                          ></div>
                          <span
                            className={
                              module.completed ? "text-orange-700 dark:text-orange-400" : "text-muted-foreground"
                            }
                          >
                            {topic}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Mở ra cơ hội nghề nghiệp tại Nhật Bản</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            N3 là cấp độ tối thiểu để làm việc tại Nhật Bản. Hãy bắt đầu hành trình nghề nghiệp của bạn ngay hôm nay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-white/90">
              Đăng ký ngay
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
            >
              Tư vấn miễn phí
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
