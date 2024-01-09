import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store/store';

interface themeInitialState {
   darkTheme: boolean;
}

const initialState: themeInitialState = {
   darkTheme: false,
};

const themeSlice = createSlice({
   name: 'theme',
   initialState,
   reducers: {
      toggleTheme: (state) => {
         state.darkTheme = !state.darkTheme;
      },
   },
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.darkTheme;

export default themeSlice.reducer;