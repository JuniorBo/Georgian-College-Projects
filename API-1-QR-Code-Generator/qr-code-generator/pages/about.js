
import Head from 'next/head'
import Navbar from '../components/navbar.js'
import Link from 'next/link'
import '../styles/globals.css'


export default function About() {
  return (
    <div className="h-screen overflow-auto bg-gradient-to-br from-gray-50 to-gray-100">
      <Head>
        <title>About - QR Code Generator</title>
        <meta name="description" content="About our QR code generator" />
      </Head>
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-6 rounded-xl border border-gradient-to-r from-blue-200/30 to-emerald-200/30 hover-card-animation">
            <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              ✨ About QR Generator
            </h1>

            <div className="space-y-8">
              <p className="text-gray-700 leading-relaxed text-lg text-center max-w-2xl mx-auto">
                Our QR code generator provides a simple and efficient way to create QR codes for your URLs, text, and more. Built with modern web technologies, it offers a seamless experience for all your QR code needs.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="glass-card p-8 rounded-xl border border-gradient-to-r from-blue-200/30 to-emerald-200/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <span className="text-3xl">🚀</span>
                    <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                      Features
                    </span>
                  </h2>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-center gap-3 hover:translate-x-1 transition-transform">
                      <span className="text-xl">⚡</span>
                      <span className="font-medium">Instant QR code generation</span>
                    </li>
                    <li className="flex items-center gap-3 hover:translate-x-1 transition-transform">
                      <span className="text-xl">🎨</span>
                      <span className="font-medium">High-quality downloads</span>
                    </li>
                    <li className="flex items-center gap-3 hover:translate-x-1 transition-transform">
                      <span className="text-xl">📱</span>
                      <span className="font-medium">Multiple format support</span>
                    </li>
                    <li className="flex items-center gap-3 hover:translate-x-1 transition-transform">
                      <span className="text-xl">💎</span>
                      <span className="font-medium">Free to use</span>
                    </li>
                  </ul>
                </div>

                <div className="glass-card p-8 rounded-xl border border-gradient-to-r from-blue-200/30 to-emerald-200/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                    <span className="text-3xl">🛠️</span>
                    <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
                      Technology
                    </span>
                  </h2>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-center gap-3 hover:translate-x-1 transition-transform">
                      <span className="text-xl">⚛️</span>
                      <span className="font-medium">Next.js</span>
                    </li>
                    <li className="flex items-center gap-3 hover:translate-x-1 transition-transform">
                      <span className="text-xl">🎨</span>
                      <span className="font-medium">Tailwind CSS</span>
                    </li>
                    <li className="flex items-center gap-3 hover:translate-x-1 transition-transform">
                      <span className="text-xl">📊</span>
                      <span className="font-medium">QR Code API</span>
                    </li>
                    <li className="flex items-center gap-3 hover:translate-x-1 transition-transform">
                      <span className="text-xl">☁️</span>
                      <span className="font-medium">Cloud Storage</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Link
                  href="/"
                  className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-emerald-600 rounded-lg hover:opacity-90 transition-opacity"
                >
                  Try It Now 🚀
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}