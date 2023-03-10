import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Template from '../components/Template.component'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Template>
      <Component {...pageProps} />
    </Template>
  )
}
