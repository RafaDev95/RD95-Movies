import { Layout } from 'components'
import { Movie } from 'interfaces'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { fetchSavedMovies, fetchMovieById } from 'pages/api'

type Props = {
  data: Movie
}

const MoviePage = ({ data }: Props) => {
  return (
    <Layout pageTitle={`Watch ${data?.title} Online`}>
      <div className=" flex flex-col gap-5 w-[950px]">
        <div className="flex w-full relative h-[400px] rounded-xl overflow-hidden">
          <Image
            fill
            priority
            src={data?.image}
            alt="Movie cover"
            // className="object-cover"
          />
        </div>

        <div className="bg-slate-100 rounded-xl h-60 flex items-center p-2">
          <div className="relative w-44 h-full rounded-xl overflow-hidden flex-[.2] drop-shadow-xl">
            <Image
              fill
              src={data?.image}
              alt="Movie cover"
              priority
              className="object-cover"
            />
          </div>
          <div className="flex-1 flex flex-col px-2 text-start gap-3">
            <h1 className="font-medium italic tracking-tight">
              Title: <span className="text-gray-400">{data?.title}</span>
            </h1>
            <p className="font-medium italic tracking-tight">
              Description:{' '}
              <span className="text-gray-400 font-normal">
                {data?.description}
              </span>
            </p>

            <p className="font-medium italic tracking-tight">
              Released in:{' '}
              <span className="font-normal text-gray-400">
                {data?.release_date}
              </span>
            </p>
            <p className="font-medium italic tracking-tight">
              Rt Score:
              <span className="font-normal text-gray-400">
                {' '}
                {data?.rt_score}
              </span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default MoviePage

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await fetchSavedMovies(1, 10)
  const paths = data?.movies?.map(({ _id }) => ({
    params: { _id }
  }))
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await fetchMovieById(String(params?._id))

  return {
    props: { data: data && data }
  }
}
