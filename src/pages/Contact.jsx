export default function Contact() {
  return (
    <section className="py-12 sm:py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Contact Us</h1>
          <p className="mt-3 text-slate-600">We’d love to hear from you. Fill out the form and we’ll get back soon.</p>

          <form className="mt-8 grid grid-cols-1 gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input type="text" className="mt-1 w-full rounded-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" className="mt-1 w-full rounded-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="you@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Phone</label>
              <input type="tel" className="mt-1 w-full rounded-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" placeholder="+1 555 123 4567" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700">Message</label>
              <textarea className="mt-1 w-full rounded-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" rows="5" placeholder="How can we help?" />
            </div>
            <button type="button" className="mt-2 inline-flex items-center justify-center px-5 py-2.5 rounded-md text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700">
              Send Message
            </button>
          </form>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl overflow-hidden border border-slate-200">
            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" alt="Map" className="w-full h-64 object-cover" />
          </div>

          <div className="rounded-xl border border-slate-200 p-6 bg-white">
            <h3 className="text-lg font-semibold text-slate-900">Contact Details</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li><span className="font-medium">Email:</span> support@mechaniconroad.example</li>
              <li><span className="font-medium">Phone:</span> +1 (555) 123-4567</li>
              <li><span className="font-medium">Address:</span> 123 Service Ave, Auto City</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
} 