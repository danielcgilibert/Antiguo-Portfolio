import About from '@components/About'
import Presentation from '@components/Presentation'
import Proyects from '@components/Proyects'
import Grid from '@components/ui/Grid'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Daniel Carmona Gilibert</title>
        <meta name="description" content="website of Daniel Carmona Gilibert" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid>
        <Presentation />
        <About />
        <Proyects />
      </Grid>
    </>
  )
}
