"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import en from "@/dictionaries/en.json"
import de from "@/dictionaries/de.json"
import fr from "@/dictionaries/fr.json"

type Locale = "en" | "de" | "fr"
type Dict = typeof en

const dictionaries: Record<Locale, Dict> = { en, de, fr }

const LocaleContext = createContext<{
  locale: Locale
  setLocale: (l: Locale) => void
  dict: Dict
}>({ locale: "en", setLocale: () => {}, dict: en })

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en")

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale | null
    if (saved && dictionaries[saved]) setLocaleState(saved)
  }, [])

  const setLocale = (l: Locale) => {
    setLocaleState(l)
    localStorage.setItem("locale", l)
  }

  return (
    <LocaleContext.Provider value={{ locale, setLocale, dict: dictionaries[locale] }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  return useContext(LocaleContext)
}
