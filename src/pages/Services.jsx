import { Link } from 'react-router-dom'
import { useState } from 'react'

const services = [
  {
    title: 'Tyre Replacement',
    desc: 'On-the-spot tyre change and puncture repair.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2069&auto=format&fit=crop',
  },
  {
    title: 'Battery Jumpstart',
    desc: 'Dead battery? We\'ll jumpstart you safely.',
    img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop',
  },
  {
    title: 'Engine Check',
    desc: 'Quick diagnostics to identify issues.',
    img: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop',
  },
  {
    title: 'Oil Change',
    desc: 'Keep your engine smooth with fresh oil.',
    img: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070&auto=format&fit=crop',
  },
]

export default function Services() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchLocation, setSearchLocation] = useState('')

  const handleSearch = () => {
    if (searchQuery.trim() || searchLocation.trim()) {
      alert(`Searching for "${searchQuery}" services near "${searchLocation}"`)
    }
  }

  const filteredServices = services.filter(service =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    service.desc.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Our Services</h1>
          <p className="mt-3 text-slate-600">Professional roadside assistance, whenever you need it.</p>
        </div>

        {/* Search Bar */}
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Enter location..."
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="px-4 py-3 rounded-lg border border-slate-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
          <button
            onClick={handleSearch}
            className="w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            Search Services
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((s) => (
            <div key={s.title} className="group rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-lg transition">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
                <Link to="#" className="mt-4 inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700">
                  Book Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 