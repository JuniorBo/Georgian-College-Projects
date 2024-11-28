/*
Name: Demilson Moreira Bose Junior
Student ID: 200548728
Email: 200548728@student.georgianc.on.ca
*/

import Navbar from '../components/Navbar'
import Image from 'next/image'

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image src="/profile.jpg" alt="Profile Picture" width={400} height={400} className="rounded-md" />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Demilson Junior</h2>
            <p className="mb-4">
              I am a web developer with a passion for building modern and responsive web applications. With over 3 years of experience, I have worked on a wide range of projects, from small business websites to complex web applications.
            </p>
            <p className="mb-4">
              My expertise lies in technologies such as React, Next.js, Node.js, and Tailwind CSS. I am constantly learning and exploring new tools and techniques to improve my skills and deliver the best possible solutions for my clients.
            </p>
            <p className="mb-4">
              When I'm not coding, you can find me exploring the great outdoors, reading a good book, or trying out a new recipe in the kitchen.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}