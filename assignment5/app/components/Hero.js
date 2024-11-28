/*
Name: Demilson Moreira Bose Junior
Student ID: 200548728
Email: 200548728@student.georgianc.on.ca
*/

// Hero.js
import React from 'react'

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-background to-background-alt py-24 rounded-lg">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Welcome to my Portfolio
          </h1>
          <p className="text-xl mb-8 text-text-secondary">
            Hi, I'm Demilson Junior, a web developer with a passion for creating amazing digital experiences.
          </p>
          <a 
            href="/portfolio" 
            className="bg-primary hover:bg-primary-dark text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            View My Work
          </a>
        </div>
        <div className="md:w-1/2 md:pl-12">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-25"></div>
            <img 
              src="/giphy.webp" 
              alt="Coding" 
              className="relative rounded-lg shadow-2xl" 
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero