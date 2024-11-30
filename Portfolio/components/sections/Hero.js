/*
Name: Demilson Moreira Bose Junior
Student ID: 200548728
Email: 200548728@student.georgianc.on.ca
*/

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <motion.h1
              className="text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hi! I&apos;m{' '}
              <span className="text-primary">
                Demilson Junior
              </span>
            </motion.h1>
            <div className="text-2xl lg:text-3xl mb-6 text-gray-600 dark:text-gray-300">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  1000,
                  'Web Developer',
                  1000,
                  'UI/UX Enthusiast',
                  1000
                ]}
                repeat={Infinity}
              />
            </div>
            <p className="text-lg mb-8 text-gray-600 dark:text-gray-300">
              Building modern web applications with cutting-edge technologies
            </p>
            <div className="flex gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/projects"
                  className="inline-block bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  View Projects
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-block border border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-lg font-medium transition-colors"
                >
                  Contact Me
                </Link>
              </motion.div>
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl" />
              <Image
                src="/images/personal-resize.jpg"
                alt="Demilson Junior"
                fill
                className="rounded-full object-cover relative z-10"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}