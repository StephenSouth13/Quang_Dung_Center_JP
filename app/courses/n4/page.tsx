import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, BookOpen, Award, Star, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function N4CoursePage() {
  const courseModules = [
    {
      week: "Tuần 1-2",
      title: "Ôn tập N5 và mở rộng",
      topics: ["Ôn tập ngữ pháp N5", "Từ vựng mở rộng", "Kanji 100 chữ mới", "Luyện nghe nâng cao"],
      completed: true,
    },
    {
      week: "Tuần 3-4",
      title: "Ngữ pháp trung cấp",
      topics: ["Thể て của động từ", "Thể た của động từ", "Tính từ い/な", "Câu điều kiện cơ bản"],
      completed: true,
    },
    {
      week: "Tuần 5-6",
      title: "Từ vựng chuyên sâu",
      topics: ["Từ vựng gia đình", "Từ vựng công việc", "Từ vựng thời tiết", "Từ vựng sở thích"],
      completed: false,
    },
    {
      week: "Tuần 7-8",
      title: "Giao tiếp nâng cao",
      topics: ["Mời mọc", "Từ chối lịch sự", "Hỏi ý kiến", "Diễn tả cảm xúc"],
      completed: false,
    },
    {
      week: "Tuần 9-12",
      title: "Đọc hiểu và nghe hiểu",
      topics: ["Đọc hiểu đoạn văn ngắn", "Nghe hiểu hội thoại", "Kanji 200 chữ", "Từ ghép phức tạp"],
      completed: false,
    },
    {
      week: "Tuần 13-16",
      title: "Luyện thi và ôn tập",
      topics: ["Đề thi mẫu N4", "Chiến lược làm bài", "Chữa đề chi tiết", "Thi thử cuối khóa"],
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
            <span className="text-foreground">JLPT N4</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-background to-green-50/50 dark:from-green-950/20 dark:via-background dark:to-green-950/10">
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
              <Badge className="mb-4 bg-green-600 text-white">JLPT N4 - Sơ trung cấp</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Khóa học JLPT N4
                <span className="text-primary"> - Sơ trung cấp</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Tiếp tục nâng cao từ N5, củng cố kiến thức ngữ pháp và từ vựng. Chuẩn bị cho việc giao tiếp cơ bản và
                đọc hiểu văn bản đơn giản.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: Clock, label: "4 tháng", sublabel: "48 buổi học" },
                  { icon: Users, label: "10-15", sublabel: "học viên/lớp" },
                  { icon: BookOpen, label: "600+", sublabel: "từ vựng" },
                  { icon: Award, label: "93%", sublabel: "tỷ lệ đậu" },
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
                  Đăng ký ngay - 4.500.000 VNĐ
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
                    <Star className="h-5 w-5 text-yellow-500" />
                    Yêu cầu đầu vào
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Đã có chứng chỉ N5 hoặc tương đương</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Biết đọc Hiragana, Katakana thành thạo</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Nắm vững 300 từ vựng cơ bản</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Hiểu ngữ pháp cơ bản N5</span>
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Chương trình học N4</h2>
              <p className="text-muted-foreground text-lg">
                16 tuần học với nội dung được thiết kế từ cơ bản đến nâng cao
              </p>
            </div>

            <div className="space-y-6">
              {courseModules.map((module, index) => (
                <Card
                  key={index}
                  className={`border-border hover:shadow-md transition-all duration-300 ${module.completed ? "bg-green-50/50 dark:bg-green-950/10 border-green-200 dark:border-green-800" : "bg-card"}`}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {module.completed ? (
                          <CheckCircle className="h-6 w-6 text-green-600" />
                        ) : (
                          <div className="w-6 h-6 rounded-full border-2 border-muted-foreground/30"></div>
                        )}
                        <div>
                          <Badge variant="outline" className="mb-2">
                            {module.week}
                          </Badge>
                          <CardTitle
                            className={`text-xl ${module.completed ? "text-green-700 dark:text-green-400" : "text-foreground"}`}
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
                            className={`w-2 h-2 rounded-full ${module.completed ? "bg-green-500" : "bg-muted-foreground/30"}`}
                          ></div>
                          <span
                            className={
                              module.completed ? "text-green-700 dark:text-green-400" : "text-muted-foreground"
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
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Nâng cao trình độ tiếng Nhật của bạn</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Từ N5 lên N4 - bước tiến quan trọng trong hành trình chinh phục tiếng Nhật.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-green-600 hover:bg-white/90">
              Đăng ký ngay
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 bg-transparent"
            >
              Tư vấn miễn phí
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
