import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="bg-emerald-800 text-white py-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-xl font-bold">
          QR Code Generator
        </Link>
        <ul className="flex gap-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar