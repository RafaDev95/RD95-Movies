import { Router } from 'express'

export interface Controller {
  path: string
  router: Router
}

export interface Movie {
  title: string
  image: string
  description: string
  director: string
  producer: string
  release_date: string
  rt_score: string
}

export interface MovieResponse {
  movies: Movie | Movie[]
  currentPage: number
  numberOfPages: number
}
