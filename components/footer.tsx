"use client"

import { Facebook, Youtube, MapPin, Phone, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useLanguage } from "@/hooks/use-language"
import { ScrollReveal } from "@/components/scroll-reveal"

export function Footer() {
  const { t, language } = useLanguage()

  const quickLinks = [
    { vi: "Trang chủ", jp: "ホーム" },
    { vi: "Khóa học", jp: "コース" },
    { vi: "Giảng viên", jp: "講師" },
    { vi: "Học viên nói gì", jp: "受講生の声" },
    { vi: "Tin tức", jp: "ニュース" },
    { vi: "Liên hệ", jp: "お問い合わせ" },
  ]

  const contactInfo = [
    { icon: MapPin, text: "123 Đường Nguyễn Văn Cừ, Quận 1, TP.HCM" },
    { icon: Phone, text: "0123 456 789" },
    { icon: Mail, text: "quangdungcenter@gmail.com" },
  ]

  const policyLinks = [
    { vi: "Chính sách bảo mật", jp: "プライバシーポリシー" },
    { vi: "Điều khoản sử dụng", jp: "利用規約" },
    { vi: "Hỗ trợ", jp: "サポート" },
  ]

  return (
    <ScrollReveal>
      <footer className="bg-card border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer */}
          <div className="py-12 sm:py-16">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Logo & Description */}
              <div className="sm:col-span-2 lg:col-span-1">
                <div className="text-2xl font-bold text-primary mb-4">
                  Quang Dũng Center
                </div>
                <p className="text-muted-foreground mb-6 text-sm sm:text-base leading-relaxed">
                  {language === "vi"
                    ? "Hệ sinh thái học tiếng Nhật số 1 dành cho người Việt. Đồng hành cùng bạn chinh phục JLPT từ N5 đến N1."
                    : "ベトナム人のための日本語学習エコシステムNo.1。N5からN1までのJLPT攻略をサポートします。"}
                </p>
                <div className="flex gap-3">
                  {[Facebook, Youtube].map((Icon, idx) => (
                    <Button
                      key={idx}
                      size="sm"
                      variant="outline"
                      className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent hover:scale-110 transition"
                    >
                      <Icon className="h-4 w-4" />
                    </Button>
                  ))}
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground bg-transparent hover:scale-110 transition text-sm"
                  >
                    Zalo
                  </Button>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-card-foreground mb-4 text-base">
                  {t("quickLinks")}
                </h4>
                <ul className="space-y-3">
                  {quickLinks.map((link, idx) => (
                    <li key={idx}>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block text-sm sm:text-base"
                      >
                        {language === "vi" ? link.vi : link.jp}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-semibold text-card-foreground mb-4 text-base">
                  {language === "vi" ? "Liên hệ" : "連絡先"}
                </h4>
                <div className="space-y-3">
                  {contactInfo.map((contact, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 group cursor-pointer"
                    >
                      <contact.icon className="h-4 w-4 text-primary group-hover:scale-110 transition mt-0.5" />
                      <span className="text-muted-foreground text-sm group-hover:text-primary transition-colors">
                        {contact.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="font-semibold text-card-foreground mb-4 text-base">
                  {t("newsletter")}
                </h4>
                <p className="text-muted-foreground text-sm mb-4">
                  {language === "vi"
                    ? "Đăng ký để nhận thông tin về khóa học và ưu đãi đặc biệt"
                    : "コース情報や特別オファーを受け取るために登録してください"}
                </p>
                <div className="space-y-3">
                  <Input
                    placeholder={
                      language === "vi"
                        ? "Nhập email của bạn"
                        : "メールアドレスを入力"
                    }
                    className="bg-background border-border focus:ring-2 focus:ring-primary text-sm"
                  />
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition">
                    <Send className="h-4 w-4 mr-2" />
                    {t("subscribe")}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="py-6 border-t border-border">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-left">
                {t("copyright")}
              </p>
              <div className="flex flex-wrap justify-center sm:justify-end gap-4 text-xs sm:text-sm">
                {policyLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="text-muted-foreground hover:text-primary transition-colors hover:underline"
                  >
                    {language === "vi" ? link.vi : link.jp}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </ScrollReveal>
  )
}
