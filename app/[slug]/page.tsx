import { getIndustryBySlug, getAllIndustries } from '@/lib/data'
import { notFound } from 'next/navigation'
import { Check, ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const industries = getAllIndustries()
  return industries.map((industry) => ({
    slug: industry.slug,
  }))
}

export default async function IndustryPage({ params }: PageProps) {
  const { slug } = await params
  const industry = getIndustryBySlug(slug)

  if (!industry) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-indigo-600"></div>
            <span className="text-xl font-bold text-slate-900">Webflow Picks</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-slate-600 hover:text-indigo-600 transition">
              All Industries
            </Link>
            <a href="#" className="text-slate-600 hover:text-indigo-600 transition">
              How It Works
            </a>
            <a href="#" className="text-slate-600 hover:text-indigo-600 transition">
              Resources
            </a>
          </nav>
          <button className="rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 transition">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-800">
          <Star className="h-4 w-4" />
          Recommended for {industry.industry}
        </div>
        <h1 className="mb-6 text-5xl font-bold tracking-tight text-slate-900 md:text-6xl">
          {industry.h1_title}
        </h1>
        <p className="mx-auto mb-10 max-w-3xl text-2xl text-slate-600">
          {industry.pain_point}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://webflow.com/?test=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-10 py-4 text-xl font-semibold text-white hover:bg-indigo-700 transition animate-pulse"
          >
            {industry.cta_text}
            <ArrowRight className="h-5 w-5" />
          </a>
          <button className="rounded-full border border-slate-300 px-8 py-4 text-lg font-semibold text-slate-700 hover:border-indigo-300 hover:bg-indigo-50 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* Why Tool Card */}
      <section className="container mx-auto px-6 pb-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl shadow-indigo-100">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                <Check className="h-6 w-6 text-indigo-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Why Webflow is Perfect for {industry.industry}</h2>
            </div>
            <p className="mb-8 text-lg text-slate-700 leading-relaxed">
              {industry.why_tool}
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
                  <Check className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">No‑Code Design Freedom</h3>
                <p className="text-slate-600">
                  Create pixel‑perfect websites without writing a single line of code.
                </p>
              </div>
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
                  <Check className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">Enterprise‑Grade SEO</h3>
                <p className="text-slate-600">
                  Built‑in SEO tools help you rank higher in search results.
                </p>
              </div>
              <div className="rounded-xl border border-slate-100 bg-slate-50 p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
                  <Check className="h-5 w-5 text-indigo-600" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">Lightning‑Fast Performance</h3>
                <p className="text-slate-600">
                  Optimized hosting ensures your site loads instantly on all devices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 pb-20">
        <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-indigo-800 p-12 text-center text-white">
          <h2 className="mb-6 text-4xl font-bold">Ready to Transform Your Online Presence?</h2>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-indigo-100">
            Join thousands of {industry.industry.toLowerCase()} who have already elevated their digital footprint with Webflow.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://webflow.com/?test=1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-white px-12 py-4 text-xl font-semibold text-indigo-700 hover:bg-slate-100 transition"
            >
              {industry.cta_text}
              <ArrowRight className="h-5 w-5" />
            </a>
            <button className="rounded-full border border-white/30 px-10 py-4 text-xl font-semibold text-white hover:bg-white/10 transition">
              Schedule a Demo
            </button>
          </div>
          <p className="mt-8 text-sm text-indigo-200">
            Start free. No credit card required. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-indigo-600"></div>
              <span className="text-xl font-bold text-slate-900">Webflow Picks</span>
            </div>
            <p className="text-slate-600 text-center md:text-left">
              © 2024 Webflow Picks. This is an independent recommendation site.
              We may earn a commission if you make a purchase through our links.
            </p>
            <Link
              href="/"
              className="rounded-lg border border-slate-300 px-6 py-3 text-slate-700 hover:border-indigo-300 hover:bg-indigo-50 transition"
            >
              Back to All Industries
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}