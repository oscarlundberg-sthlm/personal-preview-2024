import type { Metadata } from 'next'
import { Inter, Inter_Tight, Newsreader } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })
const interTight = Inter_Tight({ subsets: ['latin'], display: 'swap', variable: '--font-inter-tight' })
const newsreader = Newsreader({ subsets: ['latin'], display: 'swap', variable: '--font-newsreader' })

export const metadata: Metadata = {
  title: 'Oscar Lundberg • Creative coder',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${interTight.variable} ${newsreader.variable}`}>{children}</body>
    </html>
  )
}
