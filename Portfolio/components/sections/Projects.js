'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../ProjectCard';

const technologies = ['All', 'Tailwind CSS', 'Next.js', 'JavaScript', 'PHP', 'Vue'];

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
    title: 'Polaroid Website',
    description: 'Web application to "sell" polaroids online.',
    technologies: ['Vue', 'Next.js', 'SCSS'],
    liveLink: 'https://polaroid-pearl.vercel.app',
    githubLink: 'https://github.com/JuniorBo/Georgian-College-Projects/tree/main/Polaroid',
    imageUrl: '/images/polaroid.jpg'
  },
  {
    id: 4,
    title: 'API - QR Code Generator',
    description: 'API to generate QR codes for given URL or text.',
    technologies: ['Next.js', 'JavaScript', 'Tailwind CSS'],
    liveLink: 'https://qr-code-generator-teal-kappa.vercel.app',
    githubLink: 'https://github.com/JuniorBo/Georgian-College-Projects/tree/main/API-1-QR-Code-Generator/qr-code-generator',
    imageUrl: '/images/qrcodegenerator.png'
  }
]

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'All' || project.technologies.includes(filter);
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>

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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
            />
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;