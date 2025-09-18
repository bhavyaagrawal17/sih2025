import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo.jpg'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
  <img src={logo} alt="PM Internship Logo" className="h-8 w-8 rounded-lg object-cover" />
  <span className="font-bold text-lg text-navy-900">PM Internship</span>
</Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/" className={({ isActive }) => `text-sm font-medium ${isActive ? 'text-primary' : 'text-gray-700 hover:text-gray-900'}`}>Home</NavLink>
            <NavLink to="/explore" className={({ isActive }) => `text-sm font-medium ${isActive ? 'text-primary' : 'text-gray-700 hover:text-gray-900'}`}>Explore Internships</NavLink>
            <NavLink to="/about" className={({ isActive }) => `text-sm font-medium ${isActive ? 'text-primary' : 'text-gray-700 hover:text-gray-900'}`}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `text-sm font-medium ${isActive ? 'text-primary' : 'text-gray-700 hover:text-gray-900'}`}>Contact</NavLink>
            <Link to="/login" className="btn-outline">Login</Link>
            <Link to="/youth-registration" className="btn-primary">Register</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            aria-label="Open Menu"
            className="md:hidden p-2 rounded-lg border border-gray-200"
            onClick={() => setOpen(v => !v)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75Zm0 5.25c0-.414.336-.75.75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm.75 4.5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-3">
            <NavLink onClick={() => setOpen(false)} to="/" className="block text-gray-700 hover:text-primary">Home</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/explore" className="block text-gray-700 hover:text-primary">Explore Internships</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/about" className="block text-gray-700 hover:text-primary">About</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/contact" className="block text-gray-700 hover:text-primary">Contact</NavLink>
            <div className="flex gap-3 pt-2">
              <Link to="/login" className="btn-outline flex-1" onClick={() => setOpen(false)}>Login</Link>
              <Link to="/signup" className="btn-primary flex-1" onClick={() => setOpen(false)}>Signup</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
