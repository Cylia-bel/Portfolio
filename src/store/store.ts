import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'
import testimonialReducer from './testimonialSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    testimonials: testimonialReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 