import Navbar from '../components/navbar.js'
import Image from 'next/image'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-2xl p-8 mb-8">
            <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              About QR Code Generator
            </h1>
            
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                Our QR Code Generator is a modern, efficient tool designed to create QR codes instantly. 
                Built with the latest web technologies, it provides a seamless experience for all your QR code needs.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                <div className="glass-card p-6 rounded-xl transform hover:scale-[1.02] transition-all">
                  <h2 className="text-xl font-semibold mb-4 text-blue-600">Key Features</h2>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      Instant QR Code Generation
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      High-Quality Downloads
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      User-Friendly Interface
                    </li>
                  </ul>
                </div>

                <div className="glass-card p-6 rounded-xl transform hover:scale-[1.02] transition-all">
                  <h2 className="text-xl font-semibold mb-4 text-blue-600">Technology Stack</h2>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Next.js Framework
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      API Ninjas Integration
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      TailwindCSS
                    </li>
                  </ul>
                </div>
              </div>

              <p className="text-lg leading-relaxed">
                Experience the perfect blend of performance and design with our QR Code Generator. 
                Whether you're creating QR codes for business or personal use, we've got you covered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}