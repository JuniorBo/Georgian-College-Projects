/*
Name: Demilson Moreira Bose Junior
Student ID: 200548728
Email: 200548728@student.georgianc.on.ca
*/

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ project }) => (
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
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover"
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
              className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-primary hover:bg-primary-dark text-white text-center py-2 rounded-lg transition-colors"
          >
            Live Demo
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 border border-gray-300 dark:border-gray-600 text-center py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            GitHub
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
  
export default ProjectCard;