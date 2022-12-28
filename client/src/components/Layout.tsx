import { Sidebar, Footer } from './'
import Head from 'next/head'

type Props = {
  children: React.ReactNode
  pageTitle?: string
  pageIcon?: string
}

const Layout = ({
  children,
  pageTitle = 'RD95 Movies',
  pageIcon = '/film-icon.png'
}: Props) => {
  return (
    <main className="min-h-screen flex items-center justify-center p-2 bg-slate-200">
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href={pageIcon} />
      </Head>
      <div className="flex max-w-[1500px] w-full gap-4 px-2 py-10 text-center bg-white rounded-3xl">
        <Sidebar />
        <div className="max-w-[1100px] flex flex-col">
          {children}
          <Footer />
        </div>
      </div>
    </main>
  )
}
export default Layout
