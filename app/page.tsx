import { getAllIndustries } from '@/lib/data'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HomePage() {
  const industries = getAllIndustries()

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-indigo-600"></div>
            <span className="text-xl font-bold text-slate-900">Webflow Picks</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-slate-600 hover:text-indigo-600 transition">Industries</a>
            <a href="#" className="text-slate-600 hover:text-indigo-600 transition">How It Works</a>
            <a href="#" className="text-slate-600 hover:text-indigo-600 transition">Resources</a>
          </nav>
          <button className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 transition">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
          Find the Perfect Website Builder for Your Industry
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-xl text-slate-600">
          Expert‑curated recommendations for independent professionals and small businesses.
          No guesswork, just results.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="rounded-full bg-indigo-600 px-8 py-3 text-lg font-semibold text-white hover:bg-indigo-700 transition">
            Browse Industries
          </button>
          <button className="rounded-full border border-slate-300 px-8 py-3 text-lg font-semibold text-slate-700 hover:border-indigo-300 hover:bg-indigo-50 transition">
            How It Works
          </button>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="container mx-auto px-6 pb-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-slate-900">Select Your Industry</h2>
          <p className="text-slate-600">Click on your industry to see the tailored recommendation.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/${industry.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.02] hover:border-indigo-300 hover:shadow-xl"
            >
              <div className="absolute right-4 top-4 opacity-0 transition-opacity group-hover:opacity-100">
                <ArrowRight className="h-5 w-5 text-indigo-600" />
              </div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                <div className="h-6 w-6 rounded-md bg-indigo-600"></div>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-slate-900">{industry.industry}</h3>
              <p className="mb-4 text-slate-600 line-clamp-2">
                {industry.pain_point.substring(0, 100)}...
              </p>
              <div className="flex items-center text-indigo-600">
                <span className="font-medium">View Recommendation</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-600">
            © 2024 Webflow Picks. All recommendations are based on independent expert analysis.
          </p>
          <p className="mt-2 text-sm text-slate-500">
            This site contains affiliate links. We may earn a commission if you make a purchase.
          </p>
        </div>
      </footer>
    </div>
  )
}