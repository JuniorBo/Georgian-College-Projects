import Navbar from '../components/navbar.js'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">About QR Code Generator</h1>
          
          <div className="space-y-4 text-gray-700">
            <p>
              Our QR Code Generator is a simple and powerful tool that allows you to create QR codes for any URL quickly and easily.
            </p>
            
            <h2 className="text-xl font-semibold mt-4">Features:</h2>
            <ul className="list-disc list-inside">
              <li>Generate QR codes for any URL</li>
              <li>Instant preview</li>
              <li>Easy download option</li>
              <li>Clean and intuitive interface</li>
            </ul>

            <p className="mt-4">
              Built using Next.js and powered by the API Ninjas QR Code API, this tool provides a seamless experience for creating QR codes.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}