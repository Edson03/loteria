import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({
  children
}) {
  return (
    <>
      <Head>
        <title>Aposta esperta</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Navbar />
      </header>

      {children}

      <Footer/>
    </>
  )
}