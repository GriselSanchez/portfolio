import Head from 'next/head'
import Header from 'components/Header/Header'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Grisel</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Grisel's Portfolio" />
      </Head>

      <main>
        <Header />
      </main>
    </div>
  )
}
