import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  ArrowRightOnRectangleIcon,
  MagnifyingGlassCircleIcon,
  HomeIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'

import { Logo } from './'
import { useAppDispatch, useAppSelector } from 'redux/hooks'
import { toggleSidebar } from 'redux/slices/sidebarSlice'

const Sidebar = () => {
  const dispatch = useAppDispatch()
  const { isActive } = useAppSelector((state) => state.sidebar)

  const [screenSize, setScreenSize] = useState(0)

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener('resize', handleResize)

    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (screenSize <= 900) {
      dispatch(toggleSidebar({ isActive: false }))
    } else {
      dispatch(toggleSidebar({ isActive: true }))
    }
  }, [screenSize])

  return (
    <>
      {isActive && (
        <aside
          className="fixed top-2 h-screen bg-white z-50 drop-shadow-xl shadow-lg w-[250px] py-1 rounded-xl
    lg:relative lg:bg-transparent lg:drop-shadow-none lg:shadow-none"
        >
          <div className="w-full px-2 relative">
            <button
              className="absolute right-3 lg:hidden"
              onClick={() => dispatch(toggleSidebar({ isActive: false }))}
            >
              <XMarkIcon className="w-6 h-6 hover:text-red-500" />
            </button>
            <Logo />
            <div className="divide-y" id="menu">
              <div className="my-5">
                <p className="text-gray-500 font-medium mb-3">Menu</p>

                <ul className="space-y-3">
                  <li>
                    <Link href="/" className="li-with-icon ">
                      <HomeIcon className="li-icon" /> Home
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="li-with-icon">
                      <MagnifyingGlassCircleIcon className="li-icon" />
                      Discovery
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="pt-5">
                <p className="text-gray-500 font-medium mb-3">General</p>

                <ul>
                  <li>
                    <Link href="#" className="li-with-icon">
                      <ArrowRightOnRectangleIcon className="li-icon" />
                      Login/Register
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </aside>
      )}
    </>
  )
}
export default Sidebar
