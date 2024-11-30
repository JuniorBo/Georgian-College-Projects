import Link from 'next/link'
import Navbar from '../components/navbar'
import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Discover Our Geocoding Tool
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform any city name into precise geographic coordinates with our powerful and intuitive tool.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Precise Coordinates</h3>
              <p className="text-gray-600">Get accurate latitude and longitude coordinates for any city worldwide</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
              <div className="h-12 w-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Instant results powered by the reliable API Ninjas Geocoding API</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Built with Modern Technology
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {['Next.js', 'React', 'Tailwind CSS', 'API Ninjas'].map((tech) => (
                <div key={tech} className="p-4 rounded-lg bg-gray-50">
                  <p className="font-semibold text-gray-800">{tech}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-lg p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-8">Convert your first city coordinates now!</p>
            <Link
              href="/"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Try It Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}