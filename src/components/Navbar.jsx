import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
	const [open, setOpen] = useState(false)

	return (
		<header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur border-b border-gray-200">
			<div className="container-px mx-auto">
				<div className="flex h-16 items-center justify-between">
					<Link to="/" className="flex items-center gap-2">
						<div className="h-8 w-8 rounded-lg bg-primary"></div>
						<span className="font-bold text-lg">AI Internship Matcher</span>
					</Link>

					<nav className="hidden md:flex items-center gap-6">
						<NavLink to="/" className={({isActive})=>`text-sm font-medium ${isActive?'text-primary':'text-gray-700 hover:text-gray-900'}`}>Home</NavLink>
						<NavLink to="/explore" className={({isActive})=>`text-sm font-medium ${isActive?'text-primary':'text-gray-700 hover:text-gray-900'}`}>Explore Internships</NavLink>
						<NavLink to="/about" className={({isActive})=>`text-sm font-medium ${isActive?'text-primary':'text-gray-700 hover:text-gray-900'}`}>About</NavLink>
						<NavLink to="/contact" className={({isActive})=>`text-sm font-medium ${isActive?'text-primary':'text-gray-700 hover:text-gray-900'}`}>Contact</NavLink>
					</nav>

					<div className="hidden md:flex items-center gap-3">
						<Link to="/login" className="btn-outline">Login</Link>
						<Link to="/signup" className="btn-primary">Signup</Link>
					</div>

					<button aria-label="Open Menu" className="md:hidden p-2 rounded-lg border border-gray-200" onClick={()=>setOpen(v=>!v)}>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
							<path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75Zm0 5.25c0-.414.336-.75.75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Zm.75 4.5a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5H3.75Z" clipRule="evenodd" />
						</svg>
					</button>
				</div>
			</div>

			{open && (
				<div className="md:hidden border-t border-gray-200 bg-white">
					<div className="container-px py-3 space-y-3">
						<NavLink onClick={()=>setOpen(false)} to="/" className="block text-gray-700">Home</NavLink>
						<NavLink onClick={()=>setOpen(false)} to="/explore" className="block text-gray-700">Explore Internships</NavLink>
						<NavLink onClick={()=>setOpen(false)} to="/about" className="block text-gray-700">About</NavLink>
						<NavLink onClick={()=>setOpen(false)} to="/contact" className="block text-gray-700">Contact</NavLink>
						<div className="flex gap-3 pt-2">
							<Link to="/login" className="btn-outline flex-1" onClick={()=>setOpen(false)}>Login</Link>
							<Link to="/signup" className="btn-primary flex-1" onClick={()=>setOpen(false)}>Signup</Link>
						</div>
					</div>
				</div>
			)}
		</header>
	)
}

export default Navbar


