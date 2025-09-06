import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, BookOpen, Award, ArrowLeft, GraduationCap } from "lucide-react"
import Link from "next/link"

export default function N2CoursePage() {
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
            <span className="text-foreground">JLPT N2</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-background to-purple-50/50 dark:from-purple-950/20 dark:via-background dark:to-purple-950/10">
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
              <Badge className="mb-4 bg-purple-600 text-white">JLPT N2 - Cao cấp</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Khóa học JLPT N2
                <span className="text-primary"> - Cao cấp</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Nắm vững ngữ pháp, đọc hiểu báo, tin tức tiếng Nhật. Chuẩn bị cho môi trường làm việc chuyên nghiệp và
                học tập tại Nhật Bản.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: Clock, label: "6 tháng", sublabel: "72 buổi học" },
                  { icon: Users, label: "6-10", sublabel: "học viên/lớp" },
                  { icon: BookOpen, label: "2400+", sublabel: "từ vựng" },
                  { icon: Award, label: "88%", sublabel: "tỷ lệ đậu" },
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
                  Đăng ký ngay - 7.500.000 VNĐ
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
                    <GraduationCap className="h-5 w-5 text-purple-600" />
                    Sau khi hoàn thành N2
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Du học đại học tại Nhật Bản</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Làm việc vị trí cao cấp</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Phiên dịch chuyên nghiệp</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Đọc hiểu báo chí, văn học</span>
                    </div>
                    <div className="bg-purple-50 dark:bg-purple-950/20 p-3 rounded-lg mt-4">
                      <p className="text-sm text-purple-700 dark:text-purple-400 font-medium">
                        🎓 Mức lương: 25-40 triệu VNĐ/tháng
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Chinh phục cấp độ cao cấp</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            N2 mở ra cánh cửa du học và làm việc chuyên nghiệp tại Nhật Bản.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-white/90">
              Đăng ký ngay
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              Tư vấn miễn phí
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
