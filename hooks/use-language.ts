"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"
import { translations, type Language, type TranslationKey } from "@/lib/translations"

interface LanguageStore {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
}

export const useLanguage = create<LanguageStore>()(
  persist(
    (set, get) => ({
      language: "vi",
      setLanguage: (lang: Language) => set({ language: lang }),
      t: (key: TranslationKey) => {
        const { language } = get()
        return translations[language][key] || translations.vi[key]
      },
    }),
    {
      name: "language-storage",
    },
  ),
)
