import Link from "next/link"

const Navbar = () => {
  return (
<nav className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-4 shadow-md sticky top-0 z-50">
  <div className="container mx-auto flex justify-between items-center px-4">
    <Link href="/" className="text-xl font-bold hover:text-blue-100 transition-colors duration-300">
      Geocoding Generator
    </Link>
    <ul className="flex gap-6">
      <li>
        <Link href="/" className="hover:text-blue-100 transition-colors duration-300">Home</Link>
      </li>
      <li>
        <Link href="/about" className="hover:text-blue-100 transition-colors duration-300">About</Link>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default Navbar