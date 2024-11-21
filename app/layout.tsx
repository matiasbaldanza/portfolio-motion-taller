import './globals.css'
import { Inter } from 'next/font/google'
import { siteMetadata } from '@/lib/data'
const inter = Inter({ subsets: ['latin'] })

import Header from '@/components/Header'
import Intro from '@/components/Intro'

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

        {/* Gradient background */}
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]" />
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]" />

        <Header />
        <Intro />
        {children}
      </body>
    </html>
  )
}
