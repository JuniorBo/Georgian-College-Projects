import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="glass-card backdrop-blur-sm border-b border-gradient-to-r from-blue-200/30 to-emerald-200/30 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            ✨ QR Generator
          </Link>
          <div className="space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar