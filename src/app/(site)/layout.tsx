import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import '@/app/globals.css'
import { Navbar } from '@/components/site/Navbar'
import { Footer } from '@/components/site/Footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})
const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Cafu Coffee',
  description: 'Roasted with heart. Served with soul.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
