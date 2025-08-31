export default function HowItWorks() {
  const steps = [
    {
      title: 'Request Service',
      desc: 'Request help via our app or website with your location.',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6v12m-7.5-12v12"/></svg>
      ),
    },
    {
      title: 'AI Matches Mechanic',
      desc: 'Our system finds the nearest, best-rated mechanic.',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"/></svg>
      ),
    },
    {
      title: 'Mechanic Arrives',
      desc: 'Track arrival in real time with status updates.',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15M4.5 4.5l15 15"/></svg>
      ),
    },
    {
      title: 'Repair & Payment',
      desc: 'Issue fixed on-site; pay securely via card/UPI.',
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6"/></svg>
      ),
    },
  ]

  return (
    <section className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">How It Works</h1>
          <p className="mt-3 text-slate-600">From request to repair in four simple steps.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {steps.map((step, idx) => (
            <div key={step.title} className="relative text-center">
              <div className="mx-auto w-14 h-14 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-indigo-600">
                {step.icon}
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{step.desc}</p>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 -right-4 text-slate-300">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/></svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 