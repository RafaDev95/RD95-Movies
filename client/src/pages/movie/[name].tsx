import { Layout } from 'components'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Movie = () => {
  const router = useRouter()
  const queryName = router.query.name as string
  const movieTitle = queryName.split('-').join(' ')

  return (
    <Layout pageTitle={`Watch ${movieTitle} Online`}>
      <div className="flex w-[950px] relative h-[400px] rounded-xl overflow-hidden">
        <Image
          fill
          priority
          src="/images/static/adao.jpg"
          alt="Movie cover"
          // className="object-cover"
        />
      </div>
    </Layout>
  )
}
export default Movie
