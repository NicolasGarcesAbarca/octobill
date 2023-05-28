import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import initAuth from '@/auth/initAuth'
import { Inter } from 'next/font/google'
import OverlayProvider from '@/context/Overlay'

const inter = Inter({
  subsets: ['latin-ext'],
  weight: ['400', '500', '600', '700'],
})

initAuth()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <OverlayProvider>
      <main className={inter.className}>
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          containerClassName=""
          containerStyle={{}}
          toastOptions={{
            className: '',
            duration: 5000,
            style: {
              background: '#363636',
              color: '#fff',
            },
          }}
        />    <Component {...pageProps} />
      </main>
    </OverlayProvider>
  )
}
