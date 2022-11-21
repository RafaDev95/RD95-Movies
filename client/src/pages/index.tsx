import Head from 'next/head'
import { Sidebar, Main } from 'components'
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
    <div className="min-h-full flex items-center justify-center p-2 bg-slate-200">
      <Head>
        <title>RD95 Movies</title>
        <link rel="icon" href="/film-icon.png" />
      </Head>
      <main
        className="flex max-w-[1500px] w-full justify-between
      gap-4 px-2 py-10 text-center bg-white rounded-3xl"
      >
        <Sidebar />
        <Main />
      </main>
    </div>
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
