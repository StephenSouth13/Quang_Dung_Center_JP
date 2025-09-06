export const translations = {
  vi: {
    // Navigation
    home: "Trang chủ",
    about: "Về chúng tôi",
    courses: "Khóa học",
    news: "Tin tức",
    contact: "Liên hệ",

    // Hero Section
    heroTitle: "Đồng hành cùng bạn chinh phục tiếng Nhật từ N5 đến N1",
    heroSubtitle:
      "Học tiếng Nhật online và offline với đội ngũ giảng viên giàu kinh nghiệm. Cam kết đầu ra rõ ràng, học phí hợp lý.",
    freeTrialBtn: "Học thử miễn phí",
    consultBtn: "Tư vấn ngay",

    // Stats
    studentsCount: "Học viên",
    passRate: "Tỷ lệ đậu",
    experience: "Năm kinh nghiệm",

    // Features
    flexibleSchedule: "Lịch học linh hoạt",
    flexibleScheduleDesc: "Học online hoặc offline theo nhu cầu",
    qualifiedTeachers: "Giảng viên chất lượng",
    qualifiedTeachersDesc: "Đội ngũ có bằng cấp và kinh nghiệm",
    clearOutput: "Cam kết đầu ra",
    clearOutputDesc: "Đảm bảo đạt mục tiêu JLPT",

    // Courses
    coursesTitle: "Khóa học tiếng Nhật",
    coursesSubtitle: "Chương trình học được thiết kế phù hợp với từng trình độ",
    registerNow: "Đăng ký ngay",

    // About
    aboutTitle: "Về Trung tâm Quang Dũng",
    aboutSubtitle: "Hành trình 10 năm đồng hành cùng ước mơ Nhật Bản",

    // Teachers
    teachersTitle: "Đội ngũ giảng viên",
    teachersSubtitle: "Giảng viên giàu kinh nghiệm, tận tâm với học viên",

    // Testimonials
    testimonialsTitle: "Học viên nói gì về chúng tôi",
    testimonialsSubtitle: "Những phản hồi chân thực từ học viên",

    // Contact
    contactTitle: "Liên hệ với chúng tôi",
    contactSubtitle: "Hãy để lại thông tin, chúng tôi sẽ tư vấn miễn phí",
    name: "Họ và tên",
    email: "Email",
    phone: "Số điện thoại",
    message: "Nội dung",
    sendMessage: "Gửi tin nhắn",

    // Footer
    quickLinks: "Liên kết nhanh",
    newsletter: "Đăng ký nhận tin",
    subscribe: "Đăng ký",
    copyright: "© 2024 Trung tâm Quang Dũng. Tất cả quyền được bảo lưu.",

    // Chat
    chatWithUs: "Chat với chúng tôi",
    aiChat: "AI Chat",
    messenger: "Messenger",
    zalo: "Zalo",
    askQuestion: "Đặt câu hỏi",
    courseInfo: "Thông tin khóa học",
    schedule: "Lịch học",
  },
  jp: {
    // Navigation
    home: "ホーム",
    about: "私たちについて",
    courses: "コース",
    news: "ニュース",
    contact: "お問い合わせ",

    // Hero Section
    heroTitle: "N5からN1まで、日本語習得の旅をサポートします",
    heroSubtitle: "経験豊富な講師陣によるオンライン・オフライン日本語学習。明確な成果保証、リーズナブルな料金。",
    freeTrialBtn: "無料体験",
    consultBtn: "今すぐ相談",

    // Stats
    studentsCount: "受講生",
    passRate: "合格率",
    experience: "年の経験",

    // Features
    flexibleSchedule: "柔軟なスケジュール",
    flexibleScheduleDesc: "ニーズに応じてオンラインまたはオフライン",
    qualifiedTeachers: "質の高い講師",
    qualifiedTeachersDesc: "資格と経験を持つ講師陣",
    clearOutput: "成果保証",
    clearOutputDesc: "JLPT目標達成を保証",

    // Courses
    coursesTitle: "日本語コース",
    coursesSubtitle: "各レベルに適したカリキュラム設計",
    registerNow: "今すぐ登録",

    // About
    aboutTitle: "クアンズンセンターについて",
    aboutSubtitle: "日本の夢と共に歩む10年の軌跡",

    // Teachers
    teachersTitle: "講師陣",
    teachersSubtitle: "経験豊富で学習者に献身的な講師",

    // Testimonials
    testimonialsTitle: "受講生の声",
    testimonialsSubtitle: "受講生からの真実のフィードバック",

    // Contact
    contactTitle: "お問い合わせ",
    contactSubtitle: "情報をお残しください。無料でご相談いたします",
    name: "お名前",
    email: "メールアドレス",
    phone: "電話番号",
    message: "内容",
    sendMessage: "メッセージを送信",

    // Footer
    quickLinks: "クイックリンク",
    newsletter: "ニュースレター登録",
    subscribe: "登録",
    copyright: "© 2024 クアンズンセンター. All rights reserved.",

    // Chat
    chatWithUs: "チャット",
    aiChat: "AIチャット",
    messenger: "メッセンジャー",
    zalo: "Zalo",
    askQuestion: "質問する",
    courseInfo: "コース情報",
    schedule: "スケジュール",
  },
}

export type Language = keyof typeof translations
export type TranslationKey = keyof typeof translations.vi
