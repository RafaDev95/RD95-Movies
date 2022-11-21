import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from './slices/sidebarSlice'
import movieReducer from './slices/movieSlice'

export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    movies: movieReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
