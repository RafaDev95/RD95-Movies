import { FilmIcon } from '@heroicons/react/24/outline'

const Logo = () => {
  return (
    <div className="flex gap-2 items-center bg-slate-100  rounded-lg">
      <FilmIcon className="w-10 h-10 text-red-500" />
      <p className="font-medium text-gray-500">RD95 Movies</p>
    </div>
  )
}
export default Logo
