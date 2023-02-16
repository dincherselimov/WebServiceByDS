import '@/styles/globals.css'
import type { AppProps } from 'next/app';
import '@/styles/footer.css'
import '@/styles/intro.css'
import '@/styles/navbar.css'
import '@/styles/videopart.css'
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}