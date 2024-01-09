import { configureStore } from '@reduxjs/toolkit';
import { unsplashApi } from './apiSlice';
import themeReducer from '../../common/theme/slice/themeSlice';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

export const store = configureStore({
   reducer: {
      [unsplashApi.reducerPath]: unsplashApi.reducer,
      theme: themeReducer,
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(unsplashApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;