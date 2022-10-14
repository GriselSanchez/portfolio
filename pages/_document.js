import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Grisel</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Grisel's Portfolio" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@500;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
