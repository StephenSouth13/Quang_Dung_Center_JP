"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/hooks/use-language"
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null)
  const { t, language } = useLanguage()

  const menuItems = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    {
      href: "/courses",
      label: t("courses"),
      hasDropdown: true,
      dropdownItems: [
        { href: "/courses/n5", label: "JLPT N5" },
        { href: "/courses/n4", label: "JLPT N4" },
        { href: "/courses/n3", label: "JLPT N3" },
        { href: "/courses/n2", label: "JLPT N2" },
        { href: "/courses/n1", label: "JLPT N1" },
        { href: "/courses/conversation", label: language === "vi" ? "Giao tiếp" : "会話" },
        { href: "/courses/practice", label: language === "vi" ? "Luyện thi" : "試験対策" },
      ],
    },
    { href: "/news", label: t("news") },
    { href: "/contact", label: t("contact") },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileDropdown = (label: string) => {
    setOpenMobileDropdown(openMobileDropdown === label ? null : label)
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-border transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-sm"
          : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? "h-14" : "h-16"}`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div
              className={`font-bold text-primary transition-all duration-300 ${isScrolled ? "text-lg sm:text-xl" : "text-xl sm:text-2xl"} truncate max-w-[200px] sm:max-w-none`}
            >
              {language === "vi" ? "Quang Dũng Center" : "クアンズンセンター"}
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.href} className="relative">
                {item.hasDropdown ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors relative group">
                        {item.label}
                        <ChevronDown className="h-4 w-4" />
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-48">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <DropdownMenuItem key={dropdownItem.href} asChild>
                          <Link href={dropdownItem.href} className="w-full">
                            {dropdownItem.label}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
                  >
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <ThemeToggle />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-transform">
              {language === "vi" ? "Đăng ký học thử" : "体験授業申込"}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-1 sm:space-x-2">
            <div className="scale-90 sm:scale-100">
              <LanguageSwitcher />
            </div>
            <div className="scale-90 sm:scale-100">
              <ThemeToggle />
            </div>
            <button
              className="p-2 hover:bg-accent rounded-md transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm animate-in slide-in-from-top-5 duration-300">
            <nav className="py-4 px-2 max-h-[70vh] overflow-y-auto">
              <div className="space-y-1">
                {menuItems.map((item) => (
                  <div key={item.href} className="w-full">
                    {item.hasDropdown ? (
                      <div className="space-y-1">
                        <button
                          onClick={() => toggleMobileDropdown(item.label)}
                          className="w-full flex items-center justify-between py-3 px-4 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-lg transition-all duration-200 group"
                        >
                          <span className="truncate">{item.label}</span>
                          <ChevronRight
                            className={`h-4 w-4 transition-transform duration-200 flex-shrink-0 ml-2 ${
                              openMobileDropdown === item.label ? "rotate-90" : ""
                            }`}
                          />
                        </button>
                        {openMobileDropdown === item.label && (
                          <div className="ml-4 space-y-1 animate-in slide-in-from-top-2 duration-200">
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.href}
                                href={dropdownItem.href}
                                className="block py-2.5 px-4 text-sm text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-all duration-200 truncate"
                                onClick={() => {
                                  setIsMenuOpen(false)
                                  setOpenMobileDropdown(null)
                                }}
                              >
                                {dropdownItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block py-3 px-4 text-sm font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-lg transition-all duration-200 truncate"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}

                <div className="pt-4 mt-4 border-t border-border">
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-sm font-medium rounded-lg shadow-sm hover:shadow-md transition-all duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="truncate">{language === "vi" ? "Đăng ký học thử" : "体験授業申込"}</span>
                  </Button>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
