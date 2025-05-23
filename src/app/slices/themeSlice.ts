import { createSlice } from '@reduxjs/toolkit';

type Theme = 'white' | 'black';

interface ThemeState {
  current: Theme;
}

const initialState: ThemeState = {
  current: localStorage.getItem('theme') as Theme || 'white',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.current = state.current === 'white' ? 'black' : 'white';
      localStorage.setItem('theme', state.current);
    },
    setTheme: (state, action) => {
      state.current = action.payload;
      localStorage.setItem('theme', state.current);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
