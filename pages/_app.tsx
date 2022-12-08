// import '../styles/module/globals.scss'
//import '../styles/CentralHeader.scss'
// import  "../styles/module/MainTitle.scss"
//import '../src/styles.scss'
import "../styles/style.scss"
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
