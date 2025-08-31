import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-7xl font-extrabold tracking-tight text-slate-200">404</h1>
        <p className="mt-4 text-xl font-semibold text-slate-900">Page not found</p>
        <p className="mt-2 text-slate-600">The page you are looking for doesn’t exist or has been moved.</p>
        <Link to="/" className="mt-6 inline-flex items-center justify-center px-5 py-2.5 rounded-md text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700">
          Go Home
        </Link>
      </div>
    </section>
  )
} 