import Head from 'next/head'
import Header from 'components/Header/Header'
import Skills from 'components/Skills/Skills'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Grisel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        {/* <Skills /> */}
      </main>
    </div>
  )
}
