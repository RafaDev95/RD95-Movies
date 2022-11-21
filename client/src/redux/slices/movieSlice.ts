import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Movie } from 'interfaces'

type MovieState = {
  movies: Movie[]
  currentPage: number
  numberOfPages: number
}

const initialState: MovieState = {
  movies: [],
  currentPage: 0,
  numberOfPages: 0
}

export const MovieSlice = createSlice({
  name: 'movieSlice',

  initialState,
  reducers: {
    setMovies: (
      state,
      {
        payload: { movies, currentPage, numberOfPages }
      }: PayloadAction<MovieState>
    ) => {
      state.currentPage = currentPage
      state.movies = movies
      state.numberOfPages = numberOfPages
    }
  }
})

export const { setMovies } = MovieSlice.actions

export default MovieSlice.reducer
