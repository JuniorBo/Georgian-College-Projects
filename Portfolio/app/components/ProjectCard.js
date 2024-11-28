// app/components/ProjectCard.js
/*
Name: Demilson Moreira Bose Junior
Student ID: 200548728
Email: 200548728@student.georgianc.on.ca
*/

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; 

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-background-alt backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-lg shadow-lg overflow-hidden">
      <div className="relative w-full h-48 flex justify-center items-center"> {/* Added flex properties */}
        <Image 
          src={project.imageUrl || '/project-thumbnail.png'}
          alt={project.title}
         width={170} // Set the desired width
          height={200} // Set the desired height
          className="object-cover object-center transition-all duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-text-primary text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-text-secondary mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <Link 
            href={project.liveLink}
            className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-lg transition-all duration-300"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Live Demo
          </Link>
          <Link 
            href={project.githubLink}
            className="text-text-secondary hover:text-primary transition-colors duration-300"
            target="_blank" 
            rel="noopener noreferrer"
          >
            GitHub
            <i className="fab fa-github text-xl"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;