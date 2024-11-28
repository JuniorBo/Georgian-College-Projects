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
        params: { data: url, format: 'png' },
        headers: {
          'X-Api-Key': process.env.NEXT_PUBLIC_API_NINJA_KEY,
          'Accept': 'image/png'
        },
        responseType: 'blob'
      });

      const imageUrl = URL.createObjectURL(new Blob([response.data]));
      setQrCodeUrl(imageUrl);
    } catch (err) {
      setError('Failed to generate QR code. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Head>
        <title>QR Code Generator</title>
        <meta name="description" content="Generate QR codes instantly" />
      </Head>
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="glass-card rounded-2xl p-8 mb-8 transform hover:scale-[1.01] transition-all">
            <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Create Your QR Code
            </h1>
            
            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="url" className="text-gray-700 font-medium text-lg">
                  Enter URL
                </label>
                <input
                  type="url"
                  id="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://example.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 transition-all"
                />
              </div>

              {error && (
                <div className="p-4 bg-red-50 text-red-500 rounded-lg border border-red-200 animate-fade-in">
                  {error}
                </div>
              )}

              <button
                onClick={generateQRCode}
                disabled={loading}
                className="gradient-button w-full py-4 rounded-lg text-white font-semibold text-lg shadow-lg disabled:opacity-50"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-3">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Generating QR Code...
                  </span>
                ) : (
                  'Generate QR Code'
                )}
              </button>

              {qrCodeUrl && (
                <div className="mt-8 text-center animate-fade-in">
                  <div className="mb-6 p-4 bg-white rounded-xl shadow-lg inline-block">
                    <Image
                      src={qrCodeUrl}
                      alt="Generated QR Code"
                      width={250}
                      height={250}
                      className="mx-auto"
                    />
                  </div>
                  <div className="text-center">
                    <button
                      onClick={() => {
                        const link = document.createElement('a');
                        link.href = qrCodeUrl;
                        link.download = 'qr-code.png';
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link);
                      }}
                      className="gradient-button px-8 py-3 rounded-lg text-white font-semibold hover:scale-110 transition-transform"
                    >
                      Download QR Code
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
