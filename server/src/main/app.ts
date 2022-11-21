import { Controller } from '@/utils/interfaces'
import '../config/module-alias'
import errorMiddleware from '@/middleware/error-middleware'
import express, { Application } from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

class App {
  public express: Application
  public port: number

  constructor(controllers: Controller[], port: number) {
    this.express = express()
    this.port = port

    this.initMiddlewares()
    this.initControllers(controllers)
    this.initDatabaseConnection()
    this.initiErrorHandling()
  }

  private initMiddlewares(): void {
    this.express.use(cors())
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: false }))
  }

  private initControllers(controllers: Controller[]): void {
    controllers.forEach((controller: Controller) => {
      this.express.use(controller.router)
    })
  }

  private initiErrorHandling(): void {
    this.express.use(errorMiddleware)
  }

  private async initDatabaseConnection(): Promise<void> {
    const dbConnectionUrl = process.env.MONGODB_URL_CONNECTION

    try {
      await mongoose.connect(String(dbConnectionUrl))
    } catch (error) {
      console.log(error)
    }
  }

  public listen(): void {
    this.express.listen(this.port, () => {
      console.log(`App Listening at port ${this.port}`)
    })
  }
}

export default App
