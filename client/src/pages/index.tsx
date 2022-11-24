import { Main, Layout } from 'components'
import { fetchSavedMovies } from './api'
import { MovieResponse } from 'interfaces'
import { setMovies } from 'redux/slices/movieSlice'
import { useAppDispatch } from 'redux/hooks'
import { useEffect } from 'react'
import { GetStaticProps } from 'next'

type Props = {
  data: MovieResponse
}

const Home = ({ data }: Props) => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(setMovies(data))
  }, [])

  return (
    <Layout>
      <Main />
    </Layout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetchSavedMovies()

  return {
    revalidate: 60 * 60,
    props: { data }
  }
}
