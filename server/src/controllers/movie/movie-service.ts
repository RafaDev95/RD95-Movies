/* eslint-disable prefer-const */
import movieModel from '@/models/movie-model'
import { Movie, MovieResponse } from '@/utils/interfaces'

class MovieService {
  private Movie = movieModel

  public async getAllMovies(
    page: number,
    limit: number,
    title: string
  ): Promise<MovieResponse> {
    try {
      const startIndex = (page - 1) * limit
      let totalMovies: number
      let movies: Movie[] = []

      if (title) {
        movies = await this.Movie.find({
          title: { $regex: new RegExp(title, 'i') }
        })
          .limit(limit)
          .skip(startIndex)
        totalMovies = await this.Movie.countDocuments({
          title: { $regex: new RegExp(title, 'i') }
        })
      } else {
        movies = await this.Movie.find().limit(limit).skip(startIndex)
        totalMovies = await this.Movie.countDocuments({})
      }

      return {
        movies,
        currentPage: page,
        numberOfPages: Math.ceil(Number(totalMovies) / limit)
      }
    } catch (error) {
      throw new Error('Something unexpected happened. Please try again')
    }
  }

  public async addNewMovie(data: Movie[]): Promise<string> {
    try {
      let alreadyIn = false

      for (const movie of data) {
        const existInDB = await this.Movie.findOne({ title: movie.title })

        if (!!existInDB === false) {
          await this.Movie.create(movie)
        } else {
          alreadyIn = true
        }
      }
      return alreadyIn ? 'Movies already are saved' : 'Saved'
    } catch (error) {
      throw new Error('Something unexpected happened. Please try again')
    }
  }
}

export default MovieService
