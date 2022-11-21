import { Bars3Icon } from '@heroicons/react/24/outline'

const mockedData = ['TV Series', 'Movies', 'Animes']

import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { toggleSidebar } from 'redux/slices/sidebarSlice'

const Navbar = () => {
  const dispatch = useAppDispatch()
  const { isActive } = useAppSelector((state) => state.sidebar)

  return (
    <header className="w-full flex flex-col items-start relative">
      <button
        className="mb-3 lg:hidden"
        onClick={() => dispatch(toggleSidebar({ isActive: !isActive }))}
      >
        <Bars3Icon className="w-6 h-6 hover:text-red-500" />
      </button>

      <div className="mt-5 mb-2">
        {mockedData.map((item, i) => (
          <a
            href="#"
            role="button"
            key={i}
            className="section-title [&:nth-child(2)]:text-red-500 [&:nth-child(2)]:underline"
          >
            {item}
          </a>
        ))}
      </div>
    </header>
  )
}
export default Navbar
