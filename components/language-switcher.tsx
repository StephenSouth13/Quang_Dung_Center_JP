"use client"

import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useLanguage } from "@/hooks/use-language"

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  const languages = {
    vi: { label: "Tiếng Việt", flag: "🇻🇳" },
    jp: { label: "日本語", flag: "🇯🇵" },
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{languages[language].flag}</span>
          <span className="hidden md:inline">{languages[language].label}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("vi")} className={language === "vi" ? "bg-accent" : ""}>
          🇻🇳 Tiếng Việt
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("jp")} className={language === "jp" ? "bg-accent" : ""}>
          🇯🇵 日本語
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
