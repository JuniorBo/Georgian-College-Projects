import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-2xl font-bold hover:text-blue-200 transition-colors">
          💱 Currency Converter
        </Link>
        <ul className="flex gap-8">
          <li>
            <Link href="/" className="hover:text-blue-200 transition-colors font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-200 transition-colors font-medium">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;