import en from './en';
import sr from './sr';

const languages = {
  en,
  sr
};

export type LanguageKey = keyof typeof languages;

export const getTranslations = (lang: LanguageKey) => languages[lang] || languages.en;
