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
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/JuniorBo/Georgian-College-Projects/tree/main/Pizza%20Hungry',
    imageUrl: '/images/project1-thumbnail.png'
  },
  {
    id: 2,
    title: 'Project 2 - Polaroid',
    description: 'Web application to "sell" polaroids online.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/JuniorBo/Georgian-College-Projects/tree/main/Polaroid',
    imageUrl: '/images/project2-thumbnail.jpg'
  },
  {
    id: 3,
    title: 'Project 3 - Employee Portal',
    description: 'Web application to manage employee information using database and PHP.',
    technologies: ['MySQL', 'JavaScript', 'PHP'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/JuniorBo/Georgian-College-Projects/tree/main/Employee%20Portal',
    imageUrl: '/images/project3-thumbnail.png'
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