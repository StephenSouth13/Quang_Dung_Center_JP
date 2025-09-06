import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, Award, ArrowLeft, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function ConversationCoursePage() {
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
            <span className="text-foreground">Giao tiếp</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-background to-teal-50/50 dark:from-teal-950/20 dark:via-background dark:to-teal-950/10">
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
              <Badge className="mb-4 bg-teal-600 text-white">Khóa Kaiwa - Giao tiếp</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Khóa Kaiwa
                <span className="text-primary"> - Giao tiếp</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty">
                Thực hành giao tiếp tiếng Nhật hàng ngày. Tập trung vào kỹ năng nói và nghe thực tế, phát âm chuẩn và tự
                tin giao tiếp.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: Clock, label: "3 tháng", sublabel: "24 buổi học" },
                  { icon: Users, label: "6-10", sublabel: "học viên/lớp" },
                  { icon: MessageCircle, label: "100%", sublabel: "thực hành" },
                  { icon: Award, label: "98%", sublabel: "hài lòng" },
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
                  Đăng ký ngay - 3.500.000 VNĐ
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
                    <MessageCircle className="h-5 w-5 text-teal-600" />
                    Phù hợp với ai?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Đã có N4 trở lên</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Muốn cải thiện kỹ năng nói</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Chuẩn bị đi Nhật Bản</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Làm việc với người Nhật</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Tự tin giao tiếp tiếng Nhật</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Từ ngại ngùng đến tự tin - hành trình cải thiện kỹ năng giao tiếp của bạn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-teal-600 hover:bg-white/90">
              Đăng ký ngay
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-teal-600 bg-transparent"
            >
              Tư vấn miễn phí
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
