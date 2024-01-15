import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Providers from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextJS Tutorial',
  description: 'Build awesome stuff with NextJS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <main className='px-8 py-20 max-w-6xl'>
          <Providers>
            {children}
          </Providers>
        </main>
      </body>
    </html>
  )
}
