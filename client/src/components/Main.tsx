import Image from 'next/image'
import {
  Button,
  ArtistsSection,
  AllMoviesSection,
  Navbar,
  ScrollToTopButton,
  Footer
} from 'components'

import { PlusIcon } from '@heroicons/react/24/outline'

const Main = () => {
  return (
    <main className="flex max-w-[1100px] flex-col items-center justify-around h-full w-full px-2">
      <Navbar />

      <div className="relative w-full md:h-[440px] h-[200px] rounded-xl overflow-hidden">
        <Image
          src="/jumanji.jpg"
          fill
          alt="Movie cover"
          unoptimized={true}
          priority
        />

        <div className="absolute bottom-5 left-5 ">
          <p className="text-transform: uppercase text-white text-xl">
            Jumanji 2
          </p>

          <div className="mb-4">
            <p className="text-gray-200 text-sm">Action, Adventure, Comedy</p>
          </div>
          <div className="flex items-center gap-3">
            <Button title="Watch this movie">Watch</Button>

            <Button icon title="Add to favorites">
              <PlusIcon className="w-5 h-5 " />
            </Button>
          </div>
        </div>
      </div>

      <ArtistsSection />

      <AllMoviesSection />
      <ScrollToTopButton />
      <Footer />
    </main>
  )
}
export default Main
