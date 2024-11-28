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
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-8 rounded-xl border border-gradient-to-r from-blue-200/30 to-emerald-200/30 hover-card-animation mb-8">
            <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              Create Your QR Code
            </h1>

            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="url" className="text-gray-700 font-medium text-lg flex items-center gap-2">
                  <span className="text-xl">🔗</span> Enter URL
                </label>
                <input
                  type="url"
                  id="url"
                  className="glass-card p-4 rounded-lg border border-gray-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-lg"
                  placeholder="https://example.com"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>

              {error && (
                <div className="p-4 bg-red-50 text-red-500 rounded-lg border border-red-200 animate-fade-in flex items-center gap-2">
                  <span className="text-xl">⚠️</span> {error}
                </div>
              )}

              <button
                onClick={generateQRCode}
                disabled={loading}
                className="gradient-button w-full py-4 rounded-lg text-white font-semibold text-lg shadow-lg disabled:opacity-50 hover:shadow-xl transition-all duration-300"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-3">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Creating Magic...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <span>Generate QR Code</span>
                    <span className="text-xl">⚡</span>
                  </span>
                )}
              </button>

              {qrCodeUrl && (
                <div className="mt-8 text-center animate-fade-in">
                  <div className="mb-6 p-6 bg-white rounded-xl shadow-lg inline-block hover:shadow-xl transition-shadow">
                    <Image
                      src={qrCodeUrl}
                      alt="Generated QR Code"
                      width={250}
                      height={250}
                      className="mx-auto"
                    />
                  </div>
                  <button
                    onClick={() => {
                      const link = document.createElement('a');
                      link.href = qrCodeUrl;
                      link.download = 'qr-code.png';
                      document.body.appendChild(link);
                      link.click();
                      document.body.removeChild(link);
                    }}
                    className="gradient-button px-8 py-3 rounded-lg text-white font-semibold hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
                  >
                    <span>Download QR Code</span>
                    <span className="text-xl">⬇️</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="glass-card rounded-xl p-8 border border-gradient-to-r from-blue-200/30 to-emerald-200/30 hover-card-animation">
            <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent flex items-center gap-2">
              How to Use
            </h2>
            <ol className="space-y-4 text-gray-700">
              <li className="flex items-center gap-4 hover:translate-x-1 transition-transform">
                <span className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-full font-bold">1</span>
                Enter a valid URL in the input field
              </li>
              <li className="flex items-center gap-4 hover:translate-x-1 transition-transform">
                <span className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-full font-bold">2</span>
                Click &quot;Generate QR Code&quot;
              </li>
              <li className="flex items-center gap-4 hover:translate-x-1 transition-transform">
                <span className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-blue-500 to-emerald-500 text-white rounded-full font-bold">3</span>
                Download your generated QR Code
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}