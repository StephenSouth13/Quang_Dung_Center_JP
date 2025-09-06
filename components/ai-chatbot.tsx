"use client"

import { useState, useRef, useEffect } from "react"
import { Send, Bot, User, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useLanguage } from "@/hooks/use-language"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export function AIChatbot() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)
  const { t, language } = useLanguage()

  const quickQuestions =
    language === "vi"
      ? ["Khóa học N5 có gì?", "Học phí bao nhiêu?", "Lịch học như thế nào?", "Có học thử không?"]
      : ["N5コースの内容は？", "授業料はいくら？", "スケジュールは？", "体験授業はある？"]

  const botResponses = {
    vi: {
      greeting:
        "Xin chào! Tôi là AI Assistant của Trung tâm Quang Dũng. Tôi có thể giúp bạn tìm hiểu về các khóa học tiếng Nhật. Bạn muốn biết gì?",
      n5Course:
        "Khóa học N5 là khóa cơ bản nhất, phù hợp cho người mới bắt đầu. Thời lượng 3 tháng, học phí 2.500.000đ. Bạn sẽ học 46 chữ Hiragana, 46 chữ Katakana và 100 chữ Kanji cơ bản.",
      fees: "Học phí các khóa: N5 (2.5tr), N4 (3tr), N3 (3.5tr), N2 (4tr), N1 (4.5tr), Giao tiếp (2.8tr), Luyện thi (3.2tr). Có nhiều ưu đãi cho học viên đăng ký sớm!",
      schedule:
        "Lịch học rất linh hoạt: Sáng (8h-10h), Chiều (14h-16h), Tối (19h-21h). Có lớp cuối tuần. Bạn có thể học online hoặc offline tùy ý.",
      trial:
        "Có! Chúng tôi có học thử miễn phí 1 buổi. Bạn có thể đăng ký qua website hoặc gọi hotline 0123.456.789 để được tư vấn chi tiết.",
      default:
        "Cảm ơn câu hỏi của bạn! Để được tư vấn chi tiết hơn, bạn có thể liên hệ hotline 0123.456.789 hoặc để lại thông tin, chúng tôi sẽ gọi lại ngay.",
    },
    jp: {
      greeting:
        "こんにちは！クアンズンセンターのAIアシスタントです。日本語コースについてお手伝いできます。何をお知りになりたいですか？",
      n5Course:
        "N5コースは初心者向けの基礎コースです。期間3ヶ月、授業料250万ドン。ひらがな46文字、カタカナ46文字、基本漢字100文字を学習します。",
      fees: "授業料：N5(250万)、N4(300万)、N3(350万)、N2(400万)、N1(450万)、会話(280万)、試験対策(320万)ドン。早期登録割引あり！",
      schedule:
        "柔軟なスケジュール：午前(8-10時)、午後(14-16時)、夜間(19-21時)。週末クラスもあります。オンライン・オフライン選択可能。",
      trial: "はい！無料体験授業1回あります。ウェブサイトまたはホットライン0123.456.789でお申し込みください。",
      default:
        "ご質問ありがとうございます！詳しい相談はホットライン0123.456.789または情報をお残しください。すぐにお電話いたします。",
    },
  }

  useEffect(() => {
    // Add greeting message when component mounts
    if (messages.length === 0) {
      setMessages([
        {
          id: "1",
          content: botResponses[language].greeting,
          sender: "bot",
          timestamp: new Date(),
        },
      ])
    }
  }, [language])

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate AI response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: getBotResponse(input),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()
    const responses = botResponses[language]

    if (input.includes("n5") || input.includes("cơ bản") || input.includes("基礎")) {
      return responses.n5Course
    } else if (
      input.includes("học phí") ||
      input.includes("giá") ||
      input.includes("授業料") ||
      input.includes("料金")
    ) {
      return responses.fees
    } else if (
      input.includes("lịch") ||
      input.includes("thời gian") ||
      input.includes("スケジュール") ||
      input.includes("時間")
    ) {
      return responses.schedule
    } else if (input.includes("học thử") || input.includes("thử") || input.includes("体験") || input.includes("無料")) {
      return responses.trial
    } else {
      return responses.default
    }
  }

  const handleQuickQuestion = (question: string) => {
    setInput(question)
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="relative">
          <Bot className="h-8 w-8" />
          <Sparkles className="h-3 w-3 absolute -top-1 -right-1 text-yellow-300" />
        </div>
        <div>
          <h3 className="font-semibold">AI Assistant</h3>
          <p className="text-xs text-blue-100">{language === "vi" ? "Trợ lý thông minh" : "スマートアシスタント"}</p>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
        <div className="space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`flex items-start gap-2 max-w-[80%] ${message.sender === "user" ? "flex-row-reverse" : ""}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {message.sender === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                </div>
                <div
                  className={`rounded-lg p-3 ${
                    message.sender === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-800"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-600 flex items-center justify-center">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="bg-gray-100 rounded-lg p-3">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      {/* Quick Questions */}
      <div className="p-3 border-t bg-gray-50">
        <p className="text-xs text-gray-600 mb-2">{language === "vi" ? "Câu hỏi thường gặp:" : "よくある質問:"}</p>
        <div className="flex flex-wrap gap-1">
          {quickQuestions.map((question, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className="text-xs h-7 bg-transparent"
              onClick={() => handleQuickQuestion(question)}
            >
              {question}
            </Button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={language === "vi" ? "Nhập câu hỏi của bạn..." : "質問を入力してください..."}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            className="flex-1"
          />
          <Button onClick={handleSend} size="sm" className="px-3">
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
