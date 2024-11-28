import { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Navbar from '../components/navbar.js';
import Head from 'next/head';
import '../styles/globals.css';

export default function QRCodeGenerator() {
  const [url, setUrl] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateQRCode = async () => {
    if (!url) {
      setError('Please enter a URL');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get('https://api.api-ninjas.com/v1/qrcode', {
        params: {
          data: url,
          format: 'png',
        },
        headers: {
          'X-Api-Key': '4UMN3G+fdFaRUOeogXaD2g==Yp9yLR3HHP3kWLSM',
          Accept: 'image/png',
        },
        responseType: 'blob',
      });

      const imageUrl = URL.createObjectURL(new Blob([response.data]));
      setQrCodeUrl(imageUrl);
    } catch (err) {
      setError('Failed to generate QR Code');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const downloadQRCode = () => {
    if (qrCodeUrl) {
      const link = document.createElement('a');
      link.href = qrCodeUrl;
      link.download = 'qr-code.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>QR Code Generator</title>
        <meta name="description" content="Generate and download custom QR codes easily!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">QR Code Generator</h1>

          <div className="mb-4">
            <label htmlFor="url" className="block text-gray-700 font-medium mb-2">
              Enter URL
            </label>
            <input
              type="text"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://example.com"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 text-gray-700 font-medium mb-2 focus:ring-emerald-500"
            />
          </div>

          <button
            onClick={generateQRCode}
            disabled={loading}
            className={`w-full py-3 rounded-md text-white font-medium transition-transform transform ${
              loading
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-emerald-600 hover:bg-emerald-700 hover:scale-105'
            }`}
          >
            {loading ? 'Generating...' : 'Generate QR Code'}
          </button>

          {error && <p className="text-red-500 mt-4 text-center">{error}</p>}

          {qrCodeUrl && (
            <div className="mt-8 text-center">
              <div className="mb-4">
                <Image
                  src={qrCodeUrl}
                  alt="Generated QR Code"
                  width={250}
                  height={250}
                  className="mx-auto"
                />
              </div>
              <button
                onClick={downloadQRCode}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-transform transform hover:scale-105"
              >
                Download QR Code
              </button>
            </div>
          )}
        </div>

        <div className="max-w-2xl mx-auto mt-12 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">How to Use</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Enter a valid URL in the input field</li>
            <li>Click &quot;Generate QR Code&quot;</li>
            <li>Download the generated QR Code image</li>
          </ol>
        </div>
      </div>
    </div>
  );
}