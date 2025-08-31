import { Link, NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-indigo-600 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h4l3-3h4l3 3h4M5 10v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 16h6M9 12h6" />
                </svg>
              </span>
              <span className="text-lg font-semibold tracking-tight">Mechanic on Road</span>
            </Link>
            <p className="mt-4 text-sm text-slate-600 max-w-prose">
              Fast, reliable roadside assistance and on-demand mechanics. Wherever you are, we bring the workshop to you.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><NavLink to="/services" className="hover:text-indigo-600">Services</NavLink></li>
              <li><NavLink to="/how-it-works" className="hover:text-indigo-600">How It Works</NavLink></li>
              <li><NavLink to="/about" className="hover:text-indigo-600">About</NavLink></li>
              <li><NavLink to="/contact" className="hover:text-indigo-600">Contact</NavLink></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-slate-900">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75 9 12l6.75-5.25M21 8.25v7.5a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15.75v-7.5A2.25 2.25 0 0 1 5.25 6h13.5A2.25 2.25 0 0 1 21 8.25Z"/></svg>
                support@mechaniconroad.example
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 4.5 4.5 2.25l4.5 4.5L6.75 9l7.5 7.5 2.25-2.25 4.5 4.5-2.25 2.25a3 3 0 0 1-4.243 0l-9.192-9.192a3 3 0 0 1 0-4.243Z"/></svg>
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"/></svg>
                123 Service Ave, Auto City
              </li>
            </ul>

            <div className="mt-4 flex items-center gap-3">
              {['#','#','#','#'].map((href, idx) => (
                <a key={idx} href={href} className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-slate-300 text-slate-600 hover:border-indigo-600 hover:text-indigo-600 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.4 2.85 8.14 6.81 9.46.5.09.69-.22.69-.49 0-.24-.01-.87-.01-1.71-2.77.6-3.36-1.19-3.36-1.19-.46-1.16-1.11-1.47-1.11-1.47-.91-.63.07-.62.07-.62 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.95 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.86 0 1.34-.01 2.41-.01 2.73 0 .27.18.59.7.49A9.99 9.99 0 0 0 22 12c0-5.5-4.46-9.96-9.96-9.96Z"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500">
          © {new Date().getFullYear()} Mechanic on Road. All rights reserved.
        </div>
      </div>
    </footer>
  )
} 