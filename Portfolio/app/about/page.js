/*
Name: Demilson Moreira Bose Junior
Student ID: 200548728
Email: 200548728@student.georgianc.on.ca
*/

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const experiences = [
  {
    year: '2023',
    title: 'Full Stack Developer',
    company: 'Georgian College',
    description: 'Currently pursuing Computer Programming diploma, focusing on modern web technologies.'
  },
  {
    year: '2022-2023',
    title: 'Web Developer Junior',
    company: 'Kalfa - Technologic Services',
    description: 'Developed responsive web applications using React and Next.js.'
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/images/personal.jpg"
                alt="Demilson Junior"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
          </motion.div>

          {/* Content Section */}
          <div className="space-y-6">
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-4xl lg:text-5xl font-bold"
            >
              About Me
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-4 text-gray-600 dark:text-gray-300"
            >
              <p>
                Hi! I&apos;m Demilson Junior, a passionate Full Stack Developer based in Canada. 
                I specialize in building modern web applications using cutting-edge technologies.
              </p>
              <p>
                Currently pursuing a Computer Programming diploma at Georgian College, I combine academic 
                excellence with practical experience in web development.
              </p>
              
              <div className="pt-6">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Experience</h2>
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="relative pl-8 border-l-2 border-primary"
                    >
                      <span className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary" />
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white">{exp.title}</h3>
                      <p className="text-primary">{exp.company}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{exp.year}</p>
                      <p className="mt-2">{exp.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-4 pt-6"
            >
              <a
                href="/contact"
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg transition-colors"
              >
                Contact Me
              </a>
              <a
                href="/resume.pdf"
                className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-lg transition-colors"
              >
                Download CV
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}