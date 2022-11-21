import App from './app'
import makeMovieController from '@/controllers/movie/movie-controller'

const PORT = process.env.PORT || 5000

const app = new App([makeMovieController], Number(PORT))

app.listen()

app.express.get('/', (req, res) => {
  res.send('Welcome!')
})
