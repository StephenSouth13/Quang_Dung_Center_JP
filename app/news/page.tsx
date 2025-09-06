import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const newsArticles = [
  {
    id: 1,
    title: "Kỳ thi JLPT tháng 12/2024: Hướng dẫn đăng ký và chuẩn bị",
    excerpt:
      "Thông tin chi tiết về kỳ thi JLPT tháng 12/2024, cách đăng ký và những lưu ý quan trọng để chuẩn bị tốt nhất.",
    content:
      "Kỳ thi JLPT (Japanese Language Proficiency Test) tháng 12/2024 sẽ diễn ra vào ngày 1/12/2024. Đây là kỳ thi quan trọng trong năm...",
    author: "Thầy Hiroshi Tanaka",
    date: "2024-10-15",
    readTime: "5 phút",
    category: "Thi cử",
    image: "/jlpt-exam-preparation.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "5 Phương pháp học từ vựng tiếng Nhật hiệu quả",
    excerpt:
      "Khám phá những phương pháp học từ vựng được chứng minh hiệu quả, giúp bạn ghi nhớ lâu và sử dụng thành thạo.",
    content: "Học từ vựng tiếng Nhật không chỉ là việc ghi nhớ mà còn cần phương pháp khoa học...",
    author: "Cô Yuki Sato",
    date: "2024-10-10",
    readTime: "7 phút",
    category: "Học tập",
    image: "/japanese-vocabulary-learning.jpg",
    featured: false,
  },
  {
    id: 3,
    title: "Cơ hội việc làm tại Nhật Bản cho người có chứng chỉ JLPT N2",
    excerpt: "Tổng quan về thị trường việc làm tại Nhật Bản dành cho những người có trình độ tiếng Nhật N2 trở lên.",
    content: "Với chứng chỉ JLPT N2, bạn sẽ có nhiều cơ hội việc làm hấp dẫn tại Nhật Bản...",
    author: "Thầy Kenji Yamamoto",
    date: "2024-10-05",
    readTime: "6 phút",
    category: "Nghề nghiệp",
    image: "/japan-job-opportunities.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "Văn hóa Nhật Bản: Hiểu để học tiếng Nhật tốt hơn",
    excerpt: "Tìm hiểu về văn hóa Nhật Bản sẽ giúp bạn hiểu sâu hơn về ngôn ngữ và giao tiếp hiệu quả hơn.",
    content: "Ngôn ngữ và văn hóa có mối liên hệ mật thiết. Để học tiếng Nhật hiệu quả...",
    author: "Cô Mai Nguyễn",
    date: "2024-09-28",
    readTime: "8 phút",
    category: "Văn hóa",
    image: "/japanese-culture-traditional.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "Học viên xuất sắc tháng 9: Chị Lan Anh đậu N3 với điểm cao",
    excerpt: "Chia sẻ kinh nghiệm học tập và bí quyết thành công của chị Lan Anh trong kỳ thi JLPT N3.",
    content: "Chị Lan Anh, học viên lớp N3 khóa 15, đã đạt điểm xuất sắc trong kỳ thi JLPT...",
    author: "Ban biên tập",
    date: "2024-09-25",
    readTime: "4 phút",
    category: "Thành công",
    image: "/vietnamese-student-female-smiling.jpg",
    featured: false,
  },
  {
    id: 6,
    title: "Khai giảng khóa học mới tháng 11/2024",
    excerpt: "Thông báo khai giảng các lớp học mới trong tháng 11, với nhiều ưu đãi đặc biệt cho học viên đăng ký sớm.",
    content: "Quang Dũng Center thông báo khai giảng các lớp học mới trong tháng 11/2024...",
    author: "Ban quản lý",
    date: "2024-09-20",
    readTime: "3 phút",
    category: "Thông báo",
    image: "/japanese-classroom-new-course.jpg",
    featured: false,
  },
]

const categories = ["Tất cả", "Thi cử", "Học tập", "Nghề nghiệp", "Văn hóa", "Thành công", "Thông báo"]

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Tin tức & Blog</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Cập nhật tin tức
              <span className="text-primary"> tiếng Nhật</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
              Những thông tin mới nhất về kỳ thi JLPT, phương pháp học tập hiệu quả và cơ hội nghề nghiệp tại Nhật Bản.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-card border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Tất cả" ? "default" : "outline"}
                size="sm"
                className="hover:scale-105 transition-transform"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground mb-8">Bài viết nổi bật</h2>
            {newsArticles
              .filter((article) => article.featured)
              .map((article) => (
                <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="md:w-1/2 p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {article.category}
                        </Badge>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(article.date).toLocaleDateString("vi-VN")}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-4 w-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-8 h-8">
                            <AvatarFallback className="bg-primary/10 text-primary text-sm">
                              {article.author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm text-muted-foreground">{article.author}</span>
                        </div>
                        <Button className="group-hover:scale-105 transition-transform">
                          Đọc tiếp
                          <ArrowRight className="h-4 w-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-card-foreground mb-8">Bài viết mới nhất</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles
                .filter((article) => !article.featured)
                .map((article) => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-all duration-300 group">
                    <div className="relative">
                      <img
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <Badge className="absolute top-3 left-3 bg-primary/90 text-primary-foreground">
                        {article.category}
                      </Badge>
                    </div>
                    <CardHeader className="pb-3">
                      <div className="flex items-center gap-4 mb-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(article.date).toLocaleDateString("vi-VN")}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                        {article.excerpt}
                      </CardDescription>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Avatar className="w-6 h-6">
                            <AvatarFallback className="bg-primary/10 text-primary text-xs">
                              {article.author
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-xs text-muted-foreground">{article.author}</span>
                        </div>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="group-hover:bg-primary group-hover:text-primary-foreground transition-all"
                        >
                          <ArrowRight className="h-3 w-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Đăng ký nhận tin tức mới nhất</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Nhận thông báo về các bài viết mới, thông tin thi cử và ưu đãi đặc biệt từ Quang Dũng Center.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white/50 text-foreground"
            />
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
              Đăng ký
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
