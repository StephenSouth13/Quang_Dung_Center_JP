import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer" // Giả sử bạn đã tạo component Footer
import { BackToTop } from "@/components/back-to-top"
import { FloatingChatbot } from "@/components/floating-chatbot"

import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Quang Dũng Center - Trung tâm tiếng Nhật",
  description: "Trung tâm dạy tiếng Nhật hàng đầu với các khóa học từ N5 đến N1",
  generator: "StephenSouth",
  applicationName: "Quang Dũng Center",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Quang Dũng Center",
    "Trung tâm tiếng Nhật",
    "Học tiếng Nhật",
    "Khóa học tiếng Nhật",
    "Luyện thi JLPT",
    "Tiếng Nhật giao tiếp",
    "Tiếng Nhật sơ cấp",
    "Tiếng Nhật trung cấp",
    "Tiếng Nhật cao cấp",
    "Học tiếng Nhật online",
    "Học tiếng Nhật tại Hồ Chí Minh",
    "Trung tâm ngoại ngữ",
    "Giáo viên tiếng Nhật",
    "Luyện thi N5, N4, N3, N2, N1",
    "Văn hóa Nhật Bản",
    "Du học Nhật Bản",
  ],
  authors: [{ name: "StephenSouth", url: "https://stephensouth.me" }],
  creator: "StephenSouth",
  publisher: "StephenSouth",
  metadataBase: new URL("https://quangdungcenter.vn"),
  openGraph: {
    title: "Quang Dũng Center - Trung tâm tiếng Nhật",
    description: "Trung tâm dạy tiếng Nhật hàng đầu với các khóa học từ N5 đến N1",
    url: "https://quangdungcenter.vn",
    siteName: "Quang Dũng Center",
    images: [
      {
        url: "https://quangdungcenter.vn/og-image.png",
        width: 800,
        height: 600,
        alt: "Quang Dũng Center",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quang Dũng Center - Trung tâm tiếng Nhật",
    description: "Trung tâm dạy tiếng Nhật hàng đầu với các khóa học từ N5 đến N1",
    images: ["https://quangdungcenter.vn/og-image.png"],
    creator: "@StephenSouth",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
      },
    ],
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <body className={`font-sans ${montserrat.variable} antialiased`}>
        {/* Render Header at the top */}
        <Header />
        
        {/* Main content area */}
        <Suspense fallback={null}>{children}</Suspense>
        
        {/* Render Footer */}
        <Footer />

        {/* Analytics and utility components */}
        <Analytics />
        <FloatingChatbot />
        <BackToTop />
      </body>
    </html>
  )
}
