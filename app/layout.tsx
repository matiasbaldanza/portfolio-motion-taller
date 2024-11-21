import './globals.css'
import { Inter } from 'next/font/google'
import { siteMetadata } from '@/lib/data'
const inter = Inter({ subsets: ['latin'] })

import Header from '@/components/Header'
import PageBackground from '@/components/PageBackground'
export const metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="!scroll-smooth">
      <body className={
        `${inter.className} 
        bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90
        `}>
        <PageBackground />
        <Header />
        {children}
      </body>
    </html>
  )
}
