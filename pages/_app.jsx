import Layout from '@components/common/Layout'
import Navbar from '@components/common/Navbar'
import splitbee from '@splitbee/web'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { ThemeProvider } from 'next-themes'
import { useEffect } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    })

    splitbee.init({
      apiUrl: '/sb-api',
      scriptUrl: '/sb.js',
    })
    splitbee.enableCookie(true)
  }, [])
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Navbar />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
