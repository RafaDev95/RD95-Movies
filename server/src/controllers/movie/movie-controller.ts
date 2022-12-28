/* eslint-disable @typescript-eslint/no-explicit-any */
import { Router, Request, Response, NextFunction } from 'express'

import MovieService from './movie-service'
import HttpException from '@/utils/exceptions/http-exception'
import validationMiddleware from '@/middleware/validation-middleware'
import movieValidate from './movie-validation'
import { Controller } from '@/utils/interfaces'

class MovieController implements Controller {
  private MovieService = new MovieService()
  public path = '/movies'
  public router = Router()

  constructor() {
    this.initRoutes()
  }

  private saveMovie = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const savedMovie = await this.MovieService.addNewMovie(req.body)

      res.status(201).json(savedMovie)
    } catch (error: any) {
      next(new HttpException(400, error.message))
    }
  }

  private getMovies = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { page, limit } = req.query
      const title = req.query.title as string

      const movies = await this.MovieService.getAllMovies(
        Number(page),
        Number(limit),
        title
      )

      res.send({ movies })
    } catch (error: any) {
      next(new HttpException(400, error.message))
    }
  }

  private getMovieById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const movie = await this.MovieService.getMovieById(req.body)

      res.status(200).json(movie)
    } catch (error: any) {
      next(new HttpException(400, error.message))
    }
  }

  private initRoutes(): void {
    this.router.post(
      `${this.path}/add`,
      validationMiddleware(movieValidate),
      this.saveMovie
    ),
      this.router.get(`${this.path}/get-movies`, this.getMovies),
      this.router.post(`${this.path}/find/id`, this.getMovieById)
  }
}

const makeMovieController = new MovieController()

export default makeMovieController
