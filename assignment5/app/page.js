// app/page.js
/*
Name: Demilson Moreira Bose Junior
Student ID: 200548728
Email: 200548728@student.georgianc.on.ca
*/

import Head from 'next/head'
import Navbar from './components/Navbar'
import styles from '../styles/Home.module.css'
import Hero from './components/Hero'
import Featured from './components/Featured'

export default function Home() {
  return (
    <div className={styles.container} style={{isolation: "isolate"}}>
      <Head>
        <title>Portfolio | Demilson Junior</title>
        <meta name="description" content="Welcome to my portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className={styles.main}>
          <Hero />
          <Featured />
        </main>

        <footer className={`${styles.footer} mt-auto py-6 text-center`}>
          <p>&copy; {new Date().getFullYear()} Demilson Junior. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}