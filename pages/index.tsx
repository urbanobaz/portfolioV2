/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import { Inter } from '@next/font/google'
import Main from '../components/Main'
import Projects from '../components/Projects'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Urbano's portfolio</title>
        <meta name="description" content="Urbano's portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <Projects />
    </>
  )
}
