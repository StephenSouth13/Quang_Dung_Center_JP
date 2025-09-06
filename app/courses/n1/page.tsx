import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, BookOpen, Award, ArrowLeft, Crown } from "lucide-react"
import Link from "next/link"

export default function N1CoursePage() {
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
            <span className="text-foreground">JLPT N1</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-yellow-50 via-background to-yellow-50/50 dark:from-yellow-950/20 dark:via-background dark:to-yellow-950/10">
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
                <Badge className="bg-yellow-600 text-white">JLPT N1 - Thượng cấp</Badge>
                <Badge variant="outline" className="border-yellow-600 text-yellow-600">
                  Cấp độ cao nhất
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Khóa học JLPT N1
                <span className="text-primary"> - Thượng cấp</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Chinh phục cấp độ cao nhất JLPT. Thành thạo tiếng Nhật ở mức độ gần như người bản xứ, mở ra mọi cơ hội
                nghề nghiệp và học tập.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: Clock, label: "8 tháng", sublabel: "96 buổi học" },
                  { icon: Users, label: "5-8", sublabel: "học viên/lớp" },
                  { icon: BookOpen, label: "3000+", sublabel: "từ vựng" },
                  { icon: Award, label: "85%", sublabel: "tỷ lệ đậu" },
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
                  Đăng ký ngay - 9.000.000 VNĐ
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
                    <Crown className="h-5 w-5 text-yellow-600" />
                    Trình độ chuyên gia
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Làm việc mọi vị trí tại Nhật</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Nghiên cứu sinh, tiến sĩ</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Phiên dịch đồng thời</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Giảng viên tiếng Nhật</span>
                    </div>
                    <div className="bg-yellow-50 dark:bg-yellow-950/20 p-3 rounded-lg mt-4">
                      <p className="text-sm text-yellow-700 dark:text-yellow-400 font-medium">
                        👑 Mức lương: 40-80 triệu VNĐ/tháng
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Trở thành chuyên gia tiếng Nhật</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            N1 - đỉnh cao của việc học tiếng Nhật, mở ra vô vàn cơ hội trong tương lai.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-yellow-600 hover:bg-white/90">
              Đăng ký ngay
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-yellow-600 bg-transparent"
            >
              Tư vấn miễn phí
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
