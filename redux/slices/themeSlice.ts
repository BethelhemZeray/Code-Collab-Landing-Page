import { createSlice } from '@reduxjs/toolkit';

// Safely get the theme from localStorage if available
const getInitialTheme = (): string => {
  if (typeof window !== 'undefined' && window.localStorage) {
    return localStorage.getItem('theme') || 'light';
  }
  return 'light';
};

const initialState = getInitialTheme();

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      const newTheme = state === 'light' ? 'dark' : 'light';
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('theme', newTheme);
      }
      return newTheme;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;