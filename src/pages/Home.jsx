import { Link } from 'react-router-dom'
import { useState } from 'react'

function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">{title}</h2>
      {subtitle && <p className="mt-3 text-slate-600">{subtitle}</p>}
    </div>
  )
}

export default function Home() {
  const [searchLocation, setSearchLocation] = useState('')

  const handleSearch = () => {
    if (searchLocation.trim()) {
      // In a real app, this would search for nearby mechanics
      alert(`Searching for mechanics near: ${searchLocation}`)
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="max-w-3xl text-center mx-auto">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Roadside Mechanics, On-Demand
            </h1>
            <p className="mt-4 text-lg text-white/80">
              Stuck on the road? Get fast, reliable assistance from trusted mechanics wherever you are.
            </p>
            
            {/* Search Bar */}
            <div className="mt-8 max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <input
                    type="text"
                    placeholder="Enter your location or address..."
                    value={searchLocation}
                    onChange={(e) => setSearchLocation(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border-0 text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  />
                </div>
                <button
                  onClick={handleSearch}
                  className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                  </svg>
                  Find Mechanics
                </button>
              </div>
              <p className="mt-2 text-sm text-white/70">
                Find the nearest mechanic shops in your area
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/services" className="inline-flex items-center justify-center px-6 py-3 rounded-md text-base font-semibold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors">
                Book a Mechanic
              </Link>
              <Link to="/how-it-works" className="inline-flex items-center justify-center px-6 py-3 rounded-md text-base font-semibold text-white/90 ring-1 ring-white/40 hover:ring-white/60">
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 sm:py-20 bg-white">
        <SectionHeading title="Why choose Mechanic on Road?" subtitle="Speedy help, transparent pricing, and dependable service." />
        <div className="mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: 'Emergency Assistance',
              desc: '24/7 roadside help for breakdowns, flat tyres, and more.',
              icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>
              ),
            },
            {
              title: 'Real-Time Tracking',
              desc: 'Track your mechanic’s arrival in real-time.',
              icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.5-7.5 10.5-7.5 10.5S4.5 18 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/></svg>
              ),
            },
            {
              title: 'Multi-Vehicle Support',
              desc: 'Cars, bikes, vans – we service them all.',
              icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75h19.5M4.5 6.75h15m-12 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm12 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"/></svg>
              ),
            },
            {
              title: 'Transparent Pricing',
              desc: 'Clear rates before you confirm your booking.',
              icon: (
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"/></svg>
              ),
            },
          ].map((f) => (
            <div key={f.title} className="group rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
              <div className="w-11 h-11 rounded-lg bg-indigo-50 text-indigo-600 inline-flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                {f.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <SectionHeading title="How it works" subtitle="Simple steps to get you back on the road." />
        <div className="mt-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-4 gap-6 items-start">
          {[
            { title: 'Request Service', desc: 'Via app or website' },
            { title: 'AI Match', desc: 'We assign the best mechanic' },
            { title: 'Arrival', desc: 'Mechanic comes to your location' },
            { title: 'Repair & Pay', desc: 'Secure, quick payment' },
          ].map((step, idx) => (
            <div key={step.title} className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center">
                <span className="text-sm font-semibold text-indigo-600">{idx + 1}</span>
              </div>
              <h4 className="mt-3 font-semibold text-slate-900">{step.title}</h4>
              <p className="mt-1 text-sm text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-white">
        <SectionHeading title="Loved by drivers everywhere" subtitle="Here’s what our customers say." />
        <div className="mt-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              quote: 'They reached me in 20 minutes and fixed a flat tyre on the spot. Lifesavers!',
              name: 'Priya Sharma',
            },
            {
              quote: 'Clear pricing, friendly mechanic, and super convenient. Highly recommend.',
              name: 'Rahul Verma',
            },
            {
              quote: 'My car wouldn’t start. They jump-started and ran a quick check—smooth experience.',
              name: 'Anita Desai',
            },
          ].map((t) => (
            <figure key={t.name} className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
              <blockquote className="text-slate-700">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-slate-900">— {t.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  )
} 