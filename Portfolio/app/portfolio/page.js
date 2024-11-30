/*
Name: Demilson Moreira Bose Junior
Student ID: 200548728
Email: 200548728@student.georgianc.on.ca
*/

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '../../components/Navbar';

const technologies = ['All', 'React', 'Next.js', 'JavaScript', 'PHP', 'Vue'];

const projects = [
  {
    id: 1,
    title: 'Pizza Hungry',
    description: 'Modern pizza ordering platform with real-time order tracking.',
    technologies: ['JavaScript', 'PHP', 'HTML'],
    liveLink: 'https://georgian-college-projects.vercel.app',
    githubLink: 'https://github.com/JuniorBo/Georgian-College-Projects/tree/main/Pizza%20Hungry',
    imageUrl: '/images/pizzahungry.jpg',
    featured: true
  },
  {
    id: 2,
    title: 'Project 2 - Polaroid',
    description: 'Web application to "sell" polaroids online.',
    technologies: ['Vue', 'Next.js', 'SCSS'],
    liveLink: 'https://polaroid-pearl.vercel.app',
    githubLink: 'https://github.com/JuniorBo/Georgian-College-Projects/tree/main/Polaroid',
    imageUrl: '/images/polaroid.jpg'
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
    liveLink: 'https://qr-code-generator-teal-kappa.vercel.app',
    githubLink: 'https://github.com/JuniorBo/Georgian-College-Projects/tree/main/API-1-QR-Code-Generator/qr-code-generator',
    imageUrl: '/images/qrcodegenerator.png'
  },
  {
    id: 5,
    title: 'API 2 - Geo Location',
    description: 'API to get the Geo Location of a city.',
    technologies: ['Next.js', 'JavaScript', 'Tailwind CSS'],
    liveLink: 'https://geo-location-bice.vercel.app',
    githubLink: 'https://github.com/JuniorBo/Georgian-College-Projects/tree/main/API-2-Geo-Location/geocoding-api',
    imageUrl: '/images/apigeolocation.png'
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

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'All' || project.technologies.includes(filter);
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            My Projects
          </h1>

          <div className="mb-8 flex flex-col sm:flex-row gap-4 justify-between">
            <div className="flex gap-2 flex-wrap">
              {technologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => setFilter(tech)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                    ${filter === tech 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700'
                    }`}
                >
                  {tech}
                </button>
              ))}
            </div>
            
            <input
              type="text"
              placeholder="Search projects..."
              className="px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative aspect-video">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="object-cover w-full h-full"
                  />
                  {project.featured && (
                    <span className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded-full text-xs">
                      Featured
                    </span>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center bg-primary text-white py-2 rounded-lg hover:bg-primary-dark transition-colors"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center border border-gray-300 dark:border-gray-600 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}