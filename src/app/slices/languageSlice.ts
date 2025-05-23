import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type LanguageState = {
  currentLang: 'en' | 'sr' ;
};

type Language = 'en' | 'sr';

const savedLang = localStorage.getItem('lang');

const isValidLanguage = (lang: any): lang is Language => {
  return lang === 'en' || lang === 'sr';
};

const initialState: LanguageState = {
  currentLang: isValidLanguage(savedLang) ? savedLang : 'en',
};
const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<'en' | 'sr'>) => {
      state.currentLang = action.payload;
      localStorage.setItem('lang', action.payload);
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
