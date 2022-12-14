export interface Movie {
  _id: string
  title: string
  image: string
  description: string
  director: string
  producer: string
  release_date: string
  rt_score: string
}

export interface MovieResponse {
  movies: Movie[]
  currentPage: number
  numberOfPages: number
}

export interface ICard {
  _id?: string
  title: string
  image: string
  description?: string
  director?: string
  producer?: string
}
