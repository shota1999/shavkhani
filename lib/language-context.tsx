'use client'

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { translations, type Language, type TranslationCopy } from '@/lib/i18n'

const STORAGE_KEY = 'shavkhani-language'

interface LanguageContextValue {
  language: Language
  setLanguage: (language: Language) => void
  copy: TranslationCopy
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

function isLanguage(value: string | null): value is Language {
  return value === 'ka' || value === 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ka')

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem(STORAGE_KEY)
    if (isLanguage(storedLanguage)) {
      setLanguageState(storedLanguage)
    }
  }, [])

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage)
    window.localStorage.setItem(STORAGE_KEY, nextLanguage)
  }, [])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      copy: translations[language],
    }),
    [language, setLanguage]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }

  return context
}
