'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const allProjects = [
  {
    id: 1,
    title: 'Pizza Hungry',
    description: 'Modern pizza ordering platform with real-time order tracking.',
    longDescription: 'A comprehensive pizza ordering system built with modern web technologies. Features include real-time order tracking, custom pizza builder, and integration with payment gateways.',
    technologies: ['JavaScript', 'PHP', 'HTML'],
    category: 'Full Stack',
    liveLink: 'https://georgian-college-projects.vercel.app',
    githubLink: 'https://github.com/JuniorBo/Georgian-College-Projects/tree/main/Pizza%20Hungry',
    imageUrl: '/images/pizzahungry.jpg',
    year: '2023',
    featured: true
  },
  {
    id: 2,
    title: 'Polaroid Website',
    description: 'Web application to "sell" polaroids online.',
    longDescription: 'A seamless platform for selling polaroids, featuring user authentication, product management, and a responsive design.',
    technologies: ['Vue', 'Next.js', 'SCSS', 'Frontend'],
    category: 'Frontend',
    liveLink: 'https://polaroid-pearl.vercel.app',
    githubLink: 'https://github.com/JuniorBo/Georgian-College-Projects/tree/main/Polaroid',
    imageUrl: '/images/polaroid.jpg',
    year: '2022-2023',
    featured: false
  },
  {
    id: 7,
    title: 'Employee Portal',
    description: 'Web application to manage employee information using database and PHP.',
    technologies: ['MySQL', 'JavaScript', 'PHP', 'Full Stack'],
    liveLink: 'https://example.com',
    githubLink: 'https://github.com/JuniorBo/Georgian-College-Projects/tree/main/Employee%20Portal',
    imageUrl: '/images/project3-thumbnail.png'
  },
  {
    id: 4,
    title: 'API - QR Code Generator',
    description: 'API to generate QR codes for given URL or text.',
    technologies: ['Next.js', 'JavaScript', 'Tailwind CSS'],
    liveLink: 'https://qr-code-generator-teal-kappa.vercel.app',
    githubLink: 'https://github.com/JuniorBo/Georgian-College-Projects/tree/main/API-1-QR-Code-Generator/qr-code-generator',
    imageUrl: '/images/qrcodegenerator.png'
  },
  {
    id: 5,
    title: 'API - Geo Location',
    description: 'API to get the Geo Location of a city.',
    technologies: ['Next.js', 'JavaScript', 'Tailwind CSS'],
    liveLink: 'https://geo-location-bice.vercel.app',
    githubLink: 'https://github.com/JuniorBo/Georgian-College-Projects/tree/main/API-2-Geo-Location/geocoding-api',
    imageUrl: '/images/apigeolocation.png'
  },
  {
    id: 6,
    title: 'API - Currency Converter',
    description: 'API to convert currency from one to another.',
    technologies: ['Next.js', 'JavaScript', 'Tailwind CSS'],
    liveLink: 'https://money-currency-converter.vercel.app',
    githubLink: 'https://github.com/JuniorBo/Georgian-College-Projects/tree/main/API-3-Money-Currency-Converter/money-currency-converter',
    imageUrl: '/images/currencyconverter.png'
  }
];

const categories = ['All', 'Full Stack', 'Frontend', 'Backend', 'Mobile'];

export default function ProjectsPage() {
  const [category, setCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recent');

  const filteredProjects = allProjects
    .filter(project => {
      const matchesCategory = category === 'All' || project.category === category;
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            project.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'recent') {
        const aYear = a.year ? parseInt(a.year.split('-')[0]) : 0;
        const bYear = b.year ? parseInt(b.year.split('-')[0]) : 0;
        return bYear - aYear;
      } else {
        return a.title.localeCompare(b.title);
      }
    });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/5 dark:to-accent/5">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-5xl font-bold text-center mb-6">My Projects</h1>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
            Explore my portfolio of web applications, featuring full-stack development projects using modern technologies.
          </p>

          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row gap-4 items-center">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 w-full px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
            />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
            >
              <option value="recent">Most Recent</option>
              <option value="name">Project Name</option>
            </select>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all
                ${category === cat 
                  ? 'bg-primary text-white' 
                  : 'bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence>
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
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
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {project.featured && (
                    <span className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded-full text-xs z-10">
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
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
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
                      className="flex-1 bg-primary hover:bg-primary-dark text-white text-center py-2 rounded-lg transition-colors"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-gray-300 dark:border-gray-600 text-center py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}