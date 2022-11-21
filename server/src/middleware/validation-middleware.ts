/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction, RequestHandler } from 'express'
import Joi from 'joi'

// This middleware accepts a Joi schema and verify if all fields are fine.
// If ok , it's go to next action, else send the errors

const validationMiddleware = (schema: Joi.Schema): RequestHandler => {
  const validateHandler = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const validationOptions = {
      abortEarly: false,
      allowUnknown: true,
      stripUnknown: true
    }

    try {
      const value = await schema.validateAsync(req.body, validationOptions)
      req.body = value
      next()
    } catch (err: any) {
      const joiErrors: string[] = []
      err.details.forEach((error: Joi.ValidationErrorItem) => {
        joiErrors.push(error.message)
      })
      res.status(400).send({ joiErrors })
    }
  }

  return validateHandler
}

export default validationMiddleware
