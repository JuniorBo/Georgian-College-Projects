import Navbar from '../components/navbar'

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">About Geocoding Generator</h1>

          <div className="space-y-4 text-gray-700">
            <p>
              Our Geocoding Generator is a simple and powerful tool that allows you to convert any city from any country to latitude and longitude coordinates.
            </p>
            
            <h2 className="text-xl font-semibold mt-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Features:</h2>
            <ul className="list-disc list-inside">
              <li>Convert city names to geographic coordinates</li>
              <li>Instant display of latitude, longitude, and other details</li>
              <li>Clean and intuitive interface</li>
            </ul>

            <p className="mt-4">
              Built using Next.js and powered by the API Ninjas Geocoding API, this tool provides a seamless experience for obtaining geographic coordinates.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}