import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-indigo-600 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h4l3-3h4l3 3h4M5 10v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 16h6M9 12h6" />
              </svg>
            </span>
            <span className="text-lg font-semibold tracking-tight">Mechanic on Road</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-indigo-600 ${isActive ? 'text-indigo-600' : 'text-slate-700'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link to="/services" className="inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-colors">
              Book a Mechanic
            </Link>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-slate-100 ${isActive ? 'text-indigo-600' : 'text-slate-700'}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Link to="/services" onClick={() => setOpen(false)} className="mt-1 inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700">
                Book a Mechanic
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 