"use client";

import { useState } from 'react'
import axios from 'axios'
import Navbar from './components/navbar'

export default function GeocodingGenerator() {
  const [city, setCity] = useState('')
  const [geocodingData, setGeocodingData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchGeocodingData = async () => {
    if (!city) {
      setError('Please enter a city')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const response = await axios.get('https://api.api-ninjas.com/v1/geocoding', {
        params: {
          city: city
        },
        headers: {
          'X-Api-Key': '4UMN3G+fdFaRUOeogXaD2g==Yp9yLR3HHP3kWLSM'
        }
      })

      setGeocodingData(response.data[0])
    } catch (err) {
      setError('Failed to fetch geocoding data')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
          <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Geocoding Generator
          </h1>
          
          <div className="mb-4">
            <label htmlFor="city" className="block text-gray-700 font-medium mb-2">
              Enter City
            </label>
            <input 
              type="text" 
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="London"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
            />
          </div>

          <button 
  onClick={fetchGeocodingData}
  disabled={loading}
  className={`w-full py-3 rounded-lg font-medium transition-all duration-300 
    ${loading 
      ? 'bg-gray-400 cursor-not-allowed' 
      : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white transform hover:-translate-y-0.5 hover:shadow-lg'
    }`}
>
  {loading ? 'Fetching...' : 'Get Geocoding Data'}
</button>

          {error && (
            <p className="text-red-500 mt-4 text-center">{error}</p>
          )}

          {geocodingData && (
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Geocoding Data</h2>
              <div className="space-y-2 text-gray-700">
                <p><span className="font-medium">City:</span> {geocodingData.name}</p>
                <p><span className="font-medium">Country:</span> {geocodingData.country}</p>
                <p><span className="font-medium">Latitude:</span> {geocodingData.latitude}</p>
                <p><span className="font-medium">Longitude:</span> {geocodingData.longitude}</p>
              </div>
            </div>
          )}
        </div>

        <div className="max-w-2xl mx-auto mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">How to Use</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Enter a city in the input field</li>
            <li>Click "Get Geocoding Data"</li>
            <li>View the latitude, longitude, and other details for the city</li>
          </ol>
        </div>
      </div>
    </div>
  )
}