import { Movie } from '@/utils/interfaces'
import Joi from 'joi'

const movieValidate = Joi.array<Movie>().items({
  title: Joi.string().required(),
  image: Joi.string().required(),
  description: Joi.string().required(),
  director: Joi.string().required(),
  producer: Joi.string().required()
})

export default movieValidate
