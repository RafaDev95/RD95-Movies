/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import { MovieResponse } from 'interfaces'

const OwnAPI = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_ENV === 'development'
      ? 'http://localhost:5000'
      : process.env.NEXT_PUBLIC_BASEURL
})

export const saveGhibliApiMoviesInMyDb = async (): Promise<string> => {
  try {
    const movies = await axios.get('https://ghibliapi.herokuapp.com/films')
    const saveMovies = await OwnAPI.post('/movies/add', movies.data)

    const { data } = saveMovies

    return data
  } catch (error: any) {
    return error
  }
}

export const fetchSavedMovies = async (
  page = 1,
  limit = 10,
  title?: string
): Promise<MovieResponse> => {
  try {
    const getMovies = await OwnAPI.get(
      `/movies/get-movies?page=${page}&limit=${limit}&title${title && title}`
    )

    const { data } = getMovies

    return data.movies
  } catch (error: any) {
    return error
  }
}

export const fetchMovieById = async (_id: string) => {
  try {
    const movie = await OwnAPI.post('/movies/find/id', { _id })
    const { data } = movie

    return data
  } catch (error) {
    return error
  }
}
