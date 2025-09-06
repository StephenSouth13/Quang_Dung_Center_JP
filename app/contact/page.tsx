import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Facebook, Youtube } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Liên hệ với chúng tôi</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Sẵn sàng hỗ trợ
              <span className="text-primary"> 24/7</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
              Đội ngũ tư vấn chuyên nghiệp của chúng tôi luôn sẵn sàng giải đáp mọi thắc mắc và hỗ trợ bạn chọn lựa khóa
              học phù hợp nhất.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="bg-card border-border hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground flex items-center gap-2">
                  <MessageCircle className="h-6 w-6 text-primary" />
                  Gửi tin nhắn cho chúng tôi
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Điền thông tin bên dưới và chúng tôi sẽ liên hệ lại trong vòng 2 giờ
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-card-foreground font-medium">
                      Họ và tên *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Nguyễn Văn A"
                      className="bg-background border-border text-foreground focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-card-foreground font-medium">
                      Số điện thoại *
                    </Label>
                    <Input
                      id="phone"
                      placeholder="0123 456 789"
                      className="bg-background border-border text-foreground focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-card-foreground font-medium">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@email.com"
                    className="bg-background border-border text-foreground focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="course" className="text-card-foreground font-medium">
                    Khóa học quan tâm
                  </Label>
                  <select className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground focus:ring-2 focus:ring-primary transition-all">
                    <option value="">Chọn khóa học</option>
                    <option value="n5">JLPT N5 - Cơ bản</option>
                    <option value="n4">JLPT N4 - Sơ trung cấp</option>
                    <option value="n3">JLPT N3 - Trung cấp</option>
                    <option value="n2">JLPT N2 - Cao cấp</option>
                    <option value="n1">JLPT N1 - Thượng cấp</option>
                    <option value="kaiwa">Khóa Kaiwa - Giao tiếp</option>
                    <option value="practice">Khóa Luyện đề JLPT</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="level" className="text-card-foreground font-medium">
                    Trình độ hiện tại
                  </Label>
                  <select className="w-full px-3 py-2 bg-background border border-border rounded-md text-foreground focus:ring-2 focus:ring-primary transition-all">
                    <option value="">Chọn trình độ</option>
                    <option value="beginner">Mới bắt đầu</option>
                    <option value="n5">Đã có N5</option>
                    <option value="n4">Đã có N4</option>
                    <option value="n3">Đã có N3</option>
                    <option value="n2">Đã có N2</option>
                    <option value="other">Khác</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-card-foreground font-medium">
                    Nội dung tin nhắn
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Chia sẻ mục tiêu học tập, thời gian mong muốn và những câu hỏi khác..."
                    rows={5}
                    className="bg-background border-border text-foreground focus:ring-2 focus:ring-primary transition-all resize-none"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="agree" className="rounded border-border" />
                  <Label htmlFor="agree" className="text-sm text-muted-foreground">
                    Tôi đồng ý nhận thông tin khóa học và ưu đãi từ Quang Dũng Center
                  </Label>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-transform">
                  <Send className="h-4 w-4 mr-2" />
                  Gửi tin nhắn
                </Button>
              </CardFooter>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="bg-card border-border hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-card-foreground">Thông tin liên hệ</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Nhiều cách để bạn có thể liên hệ với chúng tôi
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {[
                    {
                      icon: MapPin,
                      title: "Địa chỉ trung tâm",
                      content: "123 Đường Nguyễn Văn Cừ, Phường Nguyễn Cư Trinh\nQuận 1, TP. Hồ Chí Minh",
                      subtitle: "Gần ga tàu điện ngầm Bến Thành",
                    },
                    {
                      icon: Phone,
                      title: "Hotline tư vấn",
                      content: "0123 456 789",
                      subtitle: "Hỗ trợ 24/7, miễn phí cuộc gọi",
                    },
                    {
                      icon: Mail,
                      title: "Email hỗ trợ",
                      content: "info@quangdungcenter.edu.vn",
                      subtitle: "Phản hồi trong vòng 2 giờ",
                    },
                    {
                      icon: Clock,
                      title: "Giờ làm việc",
                      content: "Thứ 2 - Chủ nhật: 8:00 - 21:00",
                      subtitle: "Kể cả ngày lễ và cuối tuần",
                    },
                  ].map((contact, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="bg-primary/10 rounded-full p-3 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <contact.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-card-foreground mb-1 group-hover:text-primary transition-colors">
                          {contact.title}
                        </h4>
                        <p className="text-muted-foreground whitespace-pre-line mb-1">{contact.content}</p>
                        <p className="text-sm text-muted-foreground">{contact.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social & Quick Contact */}
              <Card className="bg-card border-border hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-card-foreground">Kết nối với chúng tôi</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      variant="outline"
                      className="justify-start gap-2 hover:bg-blue-50 hover:border-blue-300 bg-transparent"
                    >
                      <Facebook className="h-4 w-4 text-blue-600" />
                      Facebook
                    </Button>
                    <Button
                      variant="outline"
                      className="justify-start gap-2 hover:bg-red-50 hover:border-red-300 bg-transparent"
                    >
                      <Youtube className="h-4 w-4 text-red-600" />
                      YouTube
                    </Button>
                    <Button
                      variant="outline"
                      className="justify-start gap-2 hover:bg-blue-50 hover:border-blue-300 bg-transparent"
                    >
                      <MessageCircle className="h-4 w-4 text-blue-600" />
                      Zalo
                    </Button>
                    <Button
                      variant="outline"
                      className="justify-start gap-2 hover:bg-green-50 hover:border-green-300 bg-transparent"
                    >
                      <Phone className="h-4 w-4 text-green-600" />
                      Gọi ngay
                    </Button>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <h4 className="font-medium text-card-foreground mb-3">Tư vấn nhanh qua:</h4>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <p>• Messenger: m.me/quangdungcenter</p>
                      <p>• Zalo: 0123 456 789</p>
                      <p>• Telegram: @quangdungcenter</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card className="bg-card border-border hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0">
                  <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center group hover:bg-muted/80 transition-colors">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                      <p className="text-muted-foreground font-medium">Bản đồ Google Maps</p>
                      <p className="text-sm text-muted-foreground">123 Nguyễn Văn Cừ, Q1, TP.HCM</p>
                      <Button size="sm" variant="outline" className="mt-3 bg-transparent">
                        Xem đường đi
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-card-foreground mb-4">Câu hỏi thường gặp</h2>
              <p className="text-muted-foreground text-lg">Những thắc mắc phổ biến từ học viên</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  question: "Tôi chưa biết gì về tiếng Nhật, có thể học được không?",
                  answer:
                    "Hoàn toàn có thể! Khóa N5 được thiết kế dành cho người mới bắt đầu, từ học bảng chữ cái đến giao tiếp cơ bản.",
                },
                {
                  question: "Học phí có thể trả góp không?",
                  answer: "Có, chúng tôi hỗ trợ trả góp 2-3 kỳ không lãi suất cho học viên có nhu cầu.",
                },
                {
                  question: "Nếu không đậu JLPT thì sao?",
                  answer: "Chúng tôi cam kết học lại miễn phí cho đến khi đậu nếu bạn tham gia đầy đủ các buổi học.",
                },
                {
                  question: "Có lớp học cuối tuần không?",
                  answer:
                    "Có, chúng tôi có lịch học linh hoạt cả tuần và cuối tuần để phù hợp với lịch làm việc của học viên.",
                },
                {
                  question: "Giáo trình học có cập nhật không?",
                  answer: "Giáo trình được cập nhật thường xuyên theo chuẩn JLPT mới nhất và xu hướng thi cử hiện tại.",
                },
                {
                  question: "Có hỗ trợ tìm việc sau khi tốt nghiệp không?",
                  answer:
                    "Có, chúng tôi có mạng lưới đối tác doanh nghiệp và hỗ trợ kết nối việc làm cho học viên có chứng chỉ N2 trở lên.",
                },
              ].map((faq, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-card-foreground mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Bạn còn thắc mắc gì khác?</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Đừng ngần ngại liên hệ với chúng tôi. Đội ngũ tư vấn sẽ giải đáp mọi thắc mắc và hỗ trợ bạn chọn khóa học
            phù hợp nhất.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Phone className="h-4 w-4 mr-2" />
              Gọi tư vấn ngay
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Chat với chúng tôi
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
