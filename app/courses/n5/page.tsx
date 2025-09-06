import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, Clock, Users, BookOpen, Award, Star, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function N5CoursePage() {
  const courseModules = [
    {
      week: "Tuần 1-2",
      title: "Bảng chữ cái và phát âm",
      topics: ["Hiragana 46 ký tự", "Katakana 46 ký tự", "Phát âm chuẩn", "Bài tập viết"],
      completed: true,
    },
    {
      week: "Tuần 3-4",
      title: "Từ vựng cơ bản",
      topics: ["Số đếm 1-100", "Ngày tháng năm", "Màu sắc", "Đồ vật hàng ngày"],
      completed: true,
    },
    {
      week: "Tuần 5-6",
      title: "Ngữ pháp nền tảng",
      topics: ["です/である", "Trợ từ は, が, を", "Động từ nhóm 1", "Câu khẳng định/phủ định"],
      completed: false,
    },
    {
      week: "Tuần 7-8",
      title: "Giao tiếp cơ bản",
      topics: ["Chào hỏi", "Tự giới thiệu", "Hỏi đường", "Mua sắm"],
      completed: false,
    },
    {
      week: "Tuần 9-10",
      title: "Kanji cơ bản",
      topics: ["50 Kanji đầu tiên", "Âm On/Kun", "Từ ghép", "Bài tập đọc"],
      completed: false,
    },
    {
      week: "Tuần 11-12",
      title: "Ôn tập và thi thử",
      topics: ["Đề thi mẫu", "Chiến lược làm bài", "Chữa đề", "Thi thử cuối khóa"],
      completed: false,
    },
  ]

  const courseFeatures = [
    "300+ từ vựng thiết yếu",
    "50 Kanji cơ bản nhất",
    "Ngữ pháp nền tảng N5",
    "Luyện nghe với giọng bản xứ",
    "Thực hành giao tiếp hàng ngày",
    "Đề thi thử JLPT N5",
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
            <span className="text-foreground">JLPT N5</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-background to-blue-50/50 dark:from-blue-950/20 dark:via-background dark:to-blue-950/10">
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
              <Badge className="mb-4 bg-blue-600 text-white">JLPT N5 - Cơ bản</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Khóa học JLPT N5
                <span className="text-primary"> - Cơ bản</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Khóa học nhập môn tiếng Nhật dành cho người mới bắt đầu. Học từ bảng chữ cái đến giao tiếp cơ bản, chuẩn
                bị tốt nhất cho kỳ thi JLPT N5.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: Clock, label: "3 tháng", sublabel: "36 buổi học" },
                  { icon: Users, label: "10-15", sublabel: "học viên/lớp" },
                  { icon: BookOpen, label: "300+", sublabel: "từ vựng" },
                  { icon: Award, label: "95%", sublabel: "tỷ lệ đậu" },
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
                  Đăng ký ngay - 3.000.000 VNĐ
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
                    Tiến độ khóa học
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Hoàn thành</span>
                        <span>33%</span>
                      </div>
                      <Progress value={33} className="h-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                        <div className="font-bold text-green-600">2/6</div>
                        <div className="text-green-600">Chương hoàn thành</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                        <div className="font-bold text-blue-600">4/6</div>
                        <div className="text-blue-600">Chương còn lại</div>
                      </div>
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
              <h2 className="text-3xl font-bold text-foreground mb-4">Chương trình học</h2>
              <p className="text-muted-foreground text-lg">Lộ trình học từng tuần được thiết kế khoa học và hiệu quả</p>
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

      {/* Course Features */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-card-foreground mb-4">Nội dung khóa học</h2>
              <p className="text-muted-foreground text-lg">Những gì bạn sẽ học được trong khóa JLPT N5</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courseFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border hover:shadow-sm transition-shadow"
                >
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-16 grid md:grid-cols-2 gap-8">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-card-foreground">Lịch học linh hoạt</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Buổi sáng:</span>
                    <span className="text-card-foreground">8:00 - 9:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Buổi chiều:</span>
                    <span className="text-card-foreground">14:00 - 15:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Buổi tối:</span>
                    <span className="text-card-foreground">19:00 - 20:30</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cuối tuần:</span>
                    <span className="text-card-foreground">9:00 - 10:30</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-xl text-card-foreground">Hỗ trợ học tập</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-card-foreground">Tài liệu học tập miễn phí</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-card-foreground">Nhóm học tập online</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-card-foreground">Tư vấn 1-1 với giảng viên</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-card-foreground">Ứng dụng học từ vựng</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Sẵn sàng bắt đầu hành trình tiếng Nhật?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Đăng ký ngay khóa học JLPT N5 và nhận ưu đãi đặc biệt cho học viên mới.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-white/90">
              Đăng ký ngay
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Tư vấn miễn phí
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
