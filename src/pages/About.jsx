export default function About() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">About Us</h1>
          <p className="mt-4 text-slate-700">Mechanic on Road is on a mission to make vehicle assistance effortless and accessible. We connect drivers with vetted mechanics using smart matching and real-time location.</p>
          <div className="mt-6 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Our Mission</h3>
              <p className="mt-1 text-slate-600">Deliver fast, trustworthy roadside support to every driver, everywhere.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Our Vision</h3>
              <p className="mt-1 text-slate-600">A world where breakdowns don’t disrupt your day—help is just a tap away.</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-slate-900">Why Choose Us?</h3>
            <ul className="mt-3 space-y-2 text-slate-700">
              {[
                'Vetted, experienced mechanics',
                'Real-time tracking and updates',
                'Upfront, transparent pricing',
                'Coverage across major cities',
              ].map(point => (
                <li key={point} className="flex items-start gap-2">
                  <span className="text-emerald-600 mt-0.5">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/></svg>
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img src="https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=2070&auto=format&fit=crop" alt="Mechanic 1" className="rounded-xl object-cover h-48 sm:h-64 w-full" />
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2069&auto=format&fit=crop" alt="Mechanic 2" className="rounded-xl object-cover h-48 sm:h-64 w-full" />
          <img src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop" alt="Mechanic 3" className="rounded-xl object-cover h-48 sm:h-64 w-full col-span-2" />
        </div>
      </div>
    </section>
  )
} 