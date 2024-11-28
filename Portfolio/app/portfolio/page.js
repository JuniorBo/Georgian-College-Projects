/*
Name: Demilson Moreira Bose Junior
Student ID: 200548728
Email: 200548728@student.georgianc.on.ca
*/

import Navbar from '../components/Navbar'
import ProjectCard from '../components/ProjectCard.js'

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
    technologies: ['Vue', 'Next.js', 'SCSS'],
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
  },
  {
    id: 4,
    title: 'API 1 - QR Code Generator',
    description: 'API to generate QR codes for given URL or text.',
    technologies: ['Next.js', 'JavaScript', 'Tailwind CSS'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/JuniorBo/Georgian-College-Projects/tree/main/API%201%20-%20QR%20Code%20Generator/qr-code-generator',
    imageUrl: '/images/apiqrcode.jpg'
  },
  {
    id: 5,
    title: 'API 2 - Geo Location',
    description: 'API to get the Geo Location of a city.',
    technologies: ['Next.js', 'JavaScript', 'Tailwind CSS'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/JuniorBo/Georgian-College-Projects/tree/main/Employee%20Portal',
    imageUrl: '/images/project3-thumbnail.png'
  },
  {
    id: 6,
    title: 'API 3 - Currency Converter',
    description: 'API to convert currency from one to another.',
    technologies: ['Next.js', 'JavaScript', 'Tailwind CSS'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/JuniorBo/Georgian-College-Projects/tree/main/Employee%20Portal',
    imageUrl: '/images/project3-thumbnail.png'
  }
]

export default function Portfolio() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold mb-8">Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}