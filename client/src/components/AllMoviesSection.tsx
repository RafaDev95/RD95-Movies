import { CardList } from './'
import { useAppSelector, useAppDispatch } from 'redux/hooks'
import { setMovies } from 'redux/slices/movieSlice'
import { saveGhibliApiMoviesInMyDb, fetchSavedMovies } from 'pages/api'
import toast, { Toaster } from 'react-hot-toast'
import { BookmarkIcon } from '@heroicons/react/24/solid'
import {
  MagnifyingGlassIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'
import Button from './Button'
import { useState } from 'react'

const AllMoviesSection = () => {
  const dispatch = useAppDispatch()
  const { movies, currentPage, numberOfPages } = useAppSelector(
    (state) => state.movies
  )

  const [titleSearch, setTitleSearch] = useState<string>()

  const searchByTitle = async (page: number, limit: number, title: string) => {
    const movies = await fetchSavedMovies(page, limit, title)

    dispatch(setMovies(movies))
  }

  const fetchAndSaveGhibliMovies = async () => {
    const response = await saveGhibliApiMoviesInMyDb()

    if (response === 'Movies already are saved') {
      toast.success(response, {
        icon: <BookmarkIcon className="w-5 h-6 text-yellow-300" />
      })
    } else {
      toast.success(response)
      setTimeout(() => {
        window.location.reload()
      }, 500)
    }
  }

  const fetchNextMoviesPage = async (page: number | string, limit: number) => {
    const nextMovies = await fetchSavedMovies(Number(page), limit)
    dispatch(setMovies(nextMovies))
  }

  const pagesQty: number[] = []

  for (let i = 0; i < numberOfPages; i++) {
    pagesQty.push(i + 1)
  }

  return (
    <div className="w-full mt-10 flex flex-col">
      <h1 className="section-title">All Movies</h1>
      <Toaster />
      <div className="flex items-center  justify-between">
        <div className="my-4 flex items-center md:w-[500px] lg-[800px] w-[280px]">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search By Title"
            className="search-input"
            onChange={(e) => setTitleSearch(e.target.value)}
          />
          <button
            className="bg-gray-200 p-[10px] rounded-r-md"
            onClick={() => searchByTitle(1, 10, `=${titleSearch!}`)}
          >
            <MagnifyingGlassIcon className="w-5 h-5" />
          </button>
        </div>

        <Button onClick={fetchAndSaveGhibliMovies}>GetGhibliMovies</Button>
      </div>

      <Button
        className="self-start my-2"
        onClick={() => fetchNextMoviesPage(1, 10)}
      >
        Show all
      </Button>

      <CardList cards={movies} />

      <div className="flex items-center w-fit bg-gray-200 rounded-lg p-1 gap-2 mx-auto mt-2">
        <button
          className="pagination-btns"
          onClick={() => fetchNextMoviesPage(currentPage - 1, 10)}
          disabled={currentPage === 1}
        >
          <ChevronLeftIcon className="w-8 h-8 p-1" />
        </button>
        {pagesQty.map((page) => (
          <button
            key={page}
            className={`pagination-btns ${
              page === currentPage && 'bg-gray-800'
            } py-1 p-3`}
            onClick={(e) =>
              fetchNextMoviesPage((e.target as HTMLElement).innerText, 10)
            }
          >
            {page}
          </button>
        ))}
        <button
          className="pagination-btns"
          onClick={() => fetchNextMoviesPage(currentPage + 1, 10)}
          disabled={currentPage === numberOfPages}
        >
          <ChevronRightIcon className="w-8 h-8 p-1" />
        </button>
      </div>
    </div>
  )
}
export default AllMoviesSection
