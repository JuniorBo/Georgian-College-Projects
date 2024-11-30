// app/page.js
/*
Name: Demilson Moreira Bose Junior
Student ID: 200548728
Email: 200548728@student.georgianc.on.ca
*/

import Hero from '../components/sections/Hero'
import Projects from '../components/sections/Projects'
import Skills from '../components/sections/Skills'
import Contact from '../components/sections/Contact'

export const metadata = {
  title: 'Demilson Junior - Full Stack Developer',
  description: 'Portfolio website showcasing my projects and skills as a Full Stack Developer',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}