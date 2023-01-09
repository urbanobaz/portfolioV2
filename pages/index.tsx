/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import { Quicksand } from '@next/font/google'
import Main from '../components/Main'
import Projects from '../components/Projects'


const quicksand = Quicksand({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Urbano's portfolio</title>
        <meta name="description" content="Urbano's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
          <script
            defer
            src="https://use.fontawesome.com/releases/v5.0.0/js/all.js"
          />
      </Head>
      <main className={quicksand.className}>
        <Main />
        <Projects />
      </main>
    </>
  )
}
