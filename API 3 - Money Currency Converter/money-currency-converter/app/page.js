'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import { US, EU, GB, JP, CA, AU, CH, CN, IN, BR } from 'country-flag-icons/react/3x2';

const FlagIcon = ({ country, className = "w-6 h-6 inline-block mr-2" }) => {
  const flags = {
    USD: US,
    EUR: EU,
    GBP: GB,
    JPY: JP,
    CAD: CA,
    AUD: AU,
    CHF: CH,
    CNY: CN,
    INR: IN,
    BRL: BR,
  };
  const Flag = flags[country];
  return Flag ? <Flag className={className} /> : null;
};

const CurrencyConverter = () => {
  const [mounted, setMounted] = useState(false);
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [result, setResult] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = 'cur_live_ocGY5zdeEXuvd0gGCzIbTcCvr20zg7RTbFoMBzP6';
  const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'CHF', 'CNY', 'INR', 'BRL'];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setResult(0);
  }, [fromCurrency, toCurrency]);

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
    setResult(0);
  };

  const handleToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
    setResult(0);
  };

  const convertCurrency = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await axios.get(`https://api.currencyapi.com/v3/latest?apikey=${API_KEY}&base_currency=${fromCurrency}&currencies=${toCurrency}`);
      const rate = response.data.data[toCurrency].value;
      const convertedAmount = amount * rate;
      setResult(convertedAmount.toFixed(2));
    } catch (err) {
      setError('Failed to convert currency');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-blue-100">
          <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">Currency Converter</h1>
          
          <div className="mb-6">
            <label htmlFor="amount" className="block text-blue-800 font-medium mb-2">
              Amount
            </label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-4 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50 text-blue-900 placeholder-blue-400"
              placeholder="Enter amount"
            />
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <label htmlFor="fromCurrency" className="block text-blue-800 font-medium mb-2">
                From Currency
              </label>
              <div className="relative">
                <select
                  id="fromCurrency"
                  value={fromCurrency}
                  onChange={handleFromCurrencyChange}
                  className="w-full p-4 pl-12 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50 text-blue-900 appearance-none"
                >
                  {currencies.map((currency) => (
                    <option key={currency} value={currency} className="text-blue-900">
                      {currency}
                    </option>
                  ))}
                </select>
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <FlagIcon country={fromCurrency} />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="toCurrency" className="block text-blue-800 font-medium mb-2">
                To Currency
              </label>
              <div className="relative">
                <select
                  id="toCurrency"
                  value={toCurrency}
                  onChange={handleToCurrencyChange}
                  className="w-full p-4 pl-12 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-50 text-blue-900 appearance-none"
                >
                  {currencies.map((currency) => (
                    <option key={currency} value={currency} className="text-blue-900">
                      {currency}
                    </option>
                  ))}
                </select>
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <FlagIcon country={toCurrency} />
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={convertCurrency}
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold py-4 px-6 rounded-lg transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Converting...
              </span>
            ) : 'Convert'}
          </button>

          {error && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-lg">
              {error}
            </div>
          )}

          {result > 0 && !error && (
            <div className="mt-8 p-6 bg-blue-50 rounded-lg text-center">
              <h2 className="text-3xl font-bold text-blue-800">
                <div className="flex items-center justify-center space-x-2">
                  <FlagIcon country={fromCurrency} />
                  <span>{amount} {fromCurrency}</span>
                </div>
                <div className="text-2xl my-2">=</div>
                <div className="flex items-center justify-center space-x-2">
                  <FlagIcon country={toCurrency} />
                  <span>{result} {toCurrency}</span>
                </div>
              </h2>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;