/*
Name: Demilson Moreira Bose Junior
Student ID: 200548728
Email: 200548728@student.georgianc.on.ca
*/

import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'  
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Demilson Junior - Full Stack Developer',
  description: 'Portfolio website showcasing my projects and skills as a Full Stack Developer',
  keywords: ['Full Stack Developer', 'React', 'Next.js', 'JavaScript'],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 dark:bg-gray-900`}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}