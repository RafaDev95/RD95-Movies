import { Schema, model } from 'mongoose'

import { Movie } from '@/utils/interfaces'

const movieSchema = new Schema<Movie>(
  {
    title: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    director: {
      type: String,
      required: true
    },
    producer: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

export default model<Movie>('Movie', movieSchema)
