/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      {/* <link
          href="https://fonts.googleapis.com/css?family=Quicksand&display=swap"
          rel="stylesheet"
        ></link>
        <link
          rel="stylesheet"
          type="text/css"
          href="../styles/minireset.min.css"
        ></link>
        <script
          defer
          src="https://use.fontawesome.com/releases/v5.0.0/js/all.js"
        ></script> */}
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
