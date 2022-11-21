import { Logo } from './'

const Footer = () => {
  return (
    <div className="flex flex-col space-y-8 items-center justify-between w-full mt-24 md:flex-row md:items-start md:space-y-0">
      <div>
        <Logo />

        <p className="mt-3 italic text-gray-500 text-sm">
          © 2022 - 2022 By RD95. All Rights Reserved.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="font-medium text-gray-400">About</p>

        <ul>
          <li className="font-medium">TV Series</li>
          <li className="font-medium">Movies</li>
          <li className="font-medium">Animes</li>
        </ul>
      </div>

      <div>
        <p className="font-medium text-gray-400">Your Account</p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="font-medium text-gray-400">Follow Us</p>

        <ul>
          <li className="font-medium">Twitter</li>
          <li className="font-medium">Instagram</li>
          <li className="font-medium">Facebook</li>
        </ul>
      </div>
    </div>
  )
}
export default Footer
