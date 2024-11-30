/*
Name: Demilson Moreira Bose Junior
Student ID: 200548728
Email: 200548728@student.georgianc.on.ca
*/

import React from 'react'
import ProjectCard from './ProjectCard'

const projects = [
  {
    id: 1,
    title: 'Project 1 - Pizza Hungry',
    description: 'Web application for ordering pizza online.',
    technologies: ['JavaScript', 'PHP', 'HTML'],
    liveLink: 'https://georgian-college-projects.vercel.app',
    githubLink: 'https://github.com/JuniorBo/Georgian-College-Projects/tree/main/Pizza%20Hungry',
    imageUrl: '/images/pizzahungry.jpg'
  },
  {
    id: 4,
    title: 'API 1 - QR Code Generator',
    description: 'API to generate QR codes for given URL or text.',
    technologies: ['Next.js', 'JavaScript', 'Tailwind CSS'],
    liveLink: 'https://qr-code-generator-teal-kappa.vercel.app',
    githubLink: 'https://github.com/JuniorBo/Georgian-College-Projects/tree/main/API-1-QR-Code-Generator/qr-code-generator',
    imageUrl: '/images/qrcodegenerator.png'
  },
  {
    id: 6,
    title: 'API 3 - Currency Converter',
    description: 'API to convert currency from one to another.',
    technologies: ['Next.js', 'JavaScript', 'Tailwind CSS'],
    liveLink: 'https://money-currency-converter.vercel.app',
    githubLink: 'https://github.com/JuniorBo/Georgian-College-Projects/tree/main/API-3-Money-Currency-Converter/money-currency-converter',
    imageUrl: '/images/currencyconverter.png'
  }
]

const Featured = () => {
  return (
    <section className="container mx-auto py-12">
      <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Featured