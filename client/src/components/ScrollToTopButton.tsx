import { useWindowScroll } from 'react-use'
import { ChevronUpIcon } from '@heroicons/react/24/outline'
import { useEffect, useState } from 'react'

const ScrollToTopButton = () => {
  const { y: pageYOffset } = useWindowScroll()

  const [visibility, setVisibility] = useState(false)

  useEffect(() => {
    if (pageYOffset > 1500) {
      setVisibility(true)
    } else {
      setVisibility(false)
    }
  }, [pageYOffset])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      className={`bg-gray-500 text-white rounded-lg z-50
      fixed bottom-12 lg:left-48 left-0 transition-all duration-150  ${
        visibility ? 'visible' : 'hidden'
      }`}
      onClick={scrollToTop}
      title="Voltar ao topo"
    >
      <ChevronUpIcon className="w-8 h-8 p-1" />
    </button>
  )
}
export default ScrollToTopButton
