import 'server-only'

const dictionaries = {
  it: () => import('../../dictionaries/it.json').then((m) => m.default),
  en: () => import('../../dictionaries/en.json').then((m) => m.default),
  fr: () => import('../../dictionaries/fr.json').then((m) => m.default),
}

export type Locale = keyof typeof dictionaries

export const LOCALES: Locale[] = ['it', 'en', 'fr']
export const DEFAULT_LOCALE: Locale = 'it'

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
