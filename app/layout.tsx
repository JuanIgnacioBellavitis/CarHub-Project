import { Footer, Navbar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Rent a car!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />  
        <Toaster position='top-right' />
      </body>      
    </html>
  )
}
