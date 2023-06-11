import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Script src="../path/to/flowbite/dist/flowbite.min.js"></Script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
