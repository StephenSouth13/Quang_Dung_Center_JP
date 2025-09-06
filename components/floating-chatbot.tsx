"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, X, Facebook, Bot, Phone } from "lucide-react"
import { AIChatbot } from "./ai-chatbot"
import { useLanguage } from "@/hooks/use-language"

export function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("facebook")
  const { t } = useLanguage()

  const chatOptions = [
    {
      id: "facebook",
      name: "Facebook Messenger",
      icon: Facebook,
      color: "bg-blue-600 hover:bg-blue-700",
      description: "Chat qua Facebook Messenger",
      action: "Mở Messenger",
    },
    {
      id: "zalo",
      name: "Zalo",
      icon: Phone,
      color: "bg-blue-500 hover:bg-blue-600",
      description: "Chat qua Zalo",
      action: "Mở Zalo",
    },
    {
      id: "ai",
      name: t("aiChat"),
      icon: Bot,
      color: "bg-primary hover:bg-primary/90",
      description: "Trò chuyện với AI hỗ trợ thông minh",
      action: "Bắt đầu chat",
    },
  ]

  const activeOption = chatOptions.find((option) => option.id === activeTab)

  return (
    <>
      {/* Floating Chat Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg transition-all duration-300 ${
            isOpen ? "bg-red-500 hover:bg-red-600 rotate-45" : "bg-primary hover:bg-primary/90 hover:scale-110"
          }`}
        >
          {isOpen ? (
            <X className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          ) : (
            <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
          )}
        </Button>

        {/* Notification Badge */}
        {!isOpen && (
          <Badge className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 bg-red-500 text-white animate-pulse text-xs px-1.5 py-0.5">
            Hỗ trợ
          </Badge>
        )}
      </div>

      {/* Chat Popup */}
      {isOpen && (
        /* Responsive popup sizing and positioning */
        <div className="fixed bottom-16 right-2 left-2 sm:bottom-24 sm:right-6 sm:left-auto sm:w-80 z-40 animate-in slide-in-from-bottom-5 duration-300">
          <Card className="bg-card border-border shadow-2xl max-h-[80vh] overflow-hidden">
            {activeTab === "ai" ? (
              <div className="h-80 sm:h-96">
                <AIChatbot />
              </div>
            ) : (
              <>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base sm:text-lg text-card-foreground flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                    {t("chatWithUs")}
                  </CardTitle>
                  <p className="text-xs sm:text-sm text-muted-foreground">Chọn kênh liên hệ phù hợp với bạn</p>
                </CardHeader>

                <CardContent className="space-y-3 sm:space-y-4 px-3 sm:px-6">
                  {/* Tab Navigation */}
                  <div className="flex gap-0.5 sm:gap-1 p-0.5 sm:p-1 bg-muted rounded-lg">
                    {chatOptions.map((option) => {
                      const IconComponent = option.icon
                      return (
                        <button
                          key={option.id}
                          onClick={() => setActiveTab(option.id)}
                          className={`flex-1 flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 py-1.5 sm:py-2 px-1 sm:px-3 rounded-md text-xs sm:text-sm font-medium transition-all ${
                            activeTab === option.id
                              ? "bg-background text-foreground shadow-sm"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          <IconComponent className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span className="text-[10px] sm:text-xs leading-tight sm:hidden">
                            {option.name.split(" ")[0]}
                          </span>
                          <span className="hidden sm:inline text-xs">{option.name.split(" ")[0]}</span>
                        </button>
                      )
                    })}
                  </div>

                  {/* Active Tab Content */}
                  {activeOption && (
                    <div className="space-y-3 sm:space-y-4">
                      <div className="text-center">
                        <div
                          className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full ${activeOption.color} mb-2 sm:mb-3`}
                        >
                          <activeOption.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                        </div>
                        <h3 className="font-semibold text-sm sm:text-base text-card-foreground mb-1">
                          {activeOption.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground px-2">{activeOption.description}</p>
                      </div>

                      {/* Action Button */}
                      <Button
                        className={`w-full ${activeOption.color} text-white text-sm sm:text-base py-2 sm:py-3`}
                        onClick={() => {
                          // Handle different chat actions
                          if (activeOption.id === "facebook") {
                            window.open("https://m.me/quangdungcenter", "_blank")
                          } else if (activeOption.id === "zalo") {
                            window.open("https://zalo.me/0123456789", "_blank")
                          }
                          setIsOpen(false)
                        }}
                      >
                        <activeOption.icon className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        {activeOption.action}
                      </Button>

                      {/* Quick Info */}
                      <div className="text-[10px] sm:text-xs text-muted-foreground text-center space-y-0.5 sm:space-y-1">
                        <p>⏰ Hỗ trợ 24/7</p>
                        <p>📞 Hotline: 0123 456 789</p>
                      </div>
                    </div>
                  )}

                  {/* Quick Actions */}
                  <div className="border-t border-border pt-2 sm:pt-3">
                    <div className="grid grid-cols-2 gap-1 sm:gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-[10px] sm:text-xs bg-transparent py-1.5 sm:py-2 px-2 sm:px-3"
                        onClick={() => {
                          document.getElementById("courses")?.scrollIntoView({ behavior: "smooth" })
                          setIsOpen(false)
                        }}
                      >
                        {t("courseInfo")}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-[10px] sm:text-xs bg-transparent py-1.5 sm:py-2 px-2 sm:px-3"
                        onClick={() => {
                          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                          setIsOpen(false)
                        }}
                      >
                        Liên hệ
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </>
            )}
          </Card>
        </div>
      )}

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
