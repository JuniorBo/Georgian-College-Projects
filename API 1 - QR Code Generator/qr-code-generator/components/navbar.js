import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="backdrop-blur-md bg-white/70 text-gray-800 py-4 shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link 
          href="/" 
          className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          QR Code Generator
        </Link>
        <ul className="flex gap-8">
          <li>
            <Link 
              href="/" 
              className="font-medium hover:text-blue-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className="font-medium hover:text-blue-600 transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-600 after:transition-all"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar