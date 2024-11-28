import Navbar from '../components/Navbar';
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

const About = () => {
  const supportedCurrencies = ['USD', 'EUR', 'GBP', 'JPY', 'CAD', 'AUD', 'CHF', 'CNY', 'INR', 'BRL'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-blue-100">
          <h1 className="text-4xl font-bold mb-6 text-blue-800">About Currency Converter</h1>
          <p className="text-gray-800 text-lg leading-relaxed">
            Our Currency Converter is a modern and powerful tool that provides real-time currency conversion with exceptional accuracy.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-800">Supported Currencies</h2>
          <div className="grid grid-cols-2 gap-4 mb-6">
            {supportedCurrencies.map((currency) => (
              <div key={currency} className="flex items-center p-3 bg-blue-50 rounded-lg">
                <FlagIcon country={currency} />
                <span className="text-gray-800 font-medium">{currency}</span>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-800">Features</h2>
          <ul className="space-y-3 text-gray-800">
            <li className="flex items-center">
              <span className="mr-2">🚀</span>
              Real-time exchange rates via CurrencyAPI
            </li>
            <li className="flex items-center">
              <span className="mr-2">⚡</span>
              Instant conversion results
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎯</span>
              Precise and accurate calculations
            </li>
            <li className="flex items-center">
              <span className="mr-2">✨</span>
              Modern, responsive interface
            </li>
          </ul>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-gray-800">
              Built with Next.js and powered by CurrencyAPI, delivering reliable currency conversion services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;