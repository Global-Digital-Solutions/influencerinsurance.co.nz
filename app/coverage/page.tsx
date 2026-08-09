import Link from "next/link"
import Image from "next/image"
import QuoteForm from "../../components/QuoteForm"
import { coverageTypes } from "../../data/coverage-types"
import { siteConfig } from "../../data/site-config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Creator Insurance Coverage | Influencer Insurance",
  description: "Four specialist insurance covers for content creators: public liability, equipment & gear, cyber & privacy, and professional indemnity. Get a quote today.",
  alternates: { canonical: siteConfig.url + "/coverage/" },
}

const coverImages = [
  "/images/creator-event.jpg",    // public-liability
  "/images/creator-travel.jpg",   // equipment-gear
  "/images/creator-desk.jpg",     // cyber-privacy
  "/images/creator-beauty.jpg",   // professional-indemnity
]

const accentColors = [
  { bg: "from-violet-600 to-purple-700", light: "bg-violet-50", border: "border-violet-200", text: "text-violet-700", badge: "bg-violet-100 text-violet-800" },
  { bg: "from-indigo-600 to-blue-700", light: "bg-indigo-50", border: "border-indigo-200", text: "text-indigo-700", badge: "bg-indigo-100 text-indigo-800" },
  { bg: "from-purple-600 to-fuchsia-700", light: "bg-purple-50", border: "border-purple-200", text: "text-purple-700", badge: "bg-purple-100 text-purple-800" },
  { bg: "from-slate-700 to-indigo-800", light: "bg-slate-50", border: "border-slate-200", text: "text-slate-700", badge: "bg-slate-100 text-slate-800" },
]

export default function CoveragePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative text-white overflow-hidden min-h-[420px] sm:min-h-[500px] flex flex-col justify-center">
        <div className="absolute inset-0">
          <Image src="/images/creator-event.jpg" alt="Content creator at brand event" fill className="object-cover object-center" priority />
        </div>
        <div className="absolute inset-0 bg-slate-950/78" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center w-full">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-purple-200 text-sm font-medium">🛡️ 4 specialist covers for creators</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">What Do You Need to Protect?</h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto mb-8">
            Explore each cover below, see exactly what applies to your creator business, and get matched with a specialist adviser.
          </p>
          <div className="flex flex-col items-center gap-2 text-purple-300 animate-bounce">
            <span className="text-sm font-medium">Scroll to explore</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* Progress bar hint */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 py-3 overflow-x-auto">
            {coverageTypes.map((cover, i) => (
              <a
                key={cover.slug}
                href={`#${cover.slug}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors text-gray-500 hover:text-purple-700 hover:bg-purple-50"
              >
                <span>{cover.icon}</span>
                <span className="hidden sm:inline">{cover.name.split(" ").slice(0, 2).join(" ")}</span>
              </a>
            ))}
            <a
              href="#get-quote"
              className="ml-auto flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap bg-gradient-brand text-white hover:opacity-90 transition-opacity"
            >
              Get Quote ↓
            </a>
          </div>
        </div>
      </div>

      {/* Coverage sections */}
      <div className="bg-white">
        {coverageTypes.map((cover, index) => {
          const accent = accentColors[index]
          const isEven = index % 2 === 0
          return (
            <section
              key={cover.slug}
              id={cover.slug}
              className={`py-16 lg:py-20 ${index % 2 === 0 ? "bg-white" : "bg-gray-50"} border-b border-gray-100`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section number */}
                <div className="flex items-center gap-3 mb-8">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${accent.bg} flex items-center justify-center`}>
                    <span className="text-white text-sm font-bold">{index + 1}</span>
                  </div>
                  <div className="h-px flex-1 bg-gray-200" />
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Cover {index + 1} of {coverageTypes.length}</span>
                </div>

                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                  {/* Left: content */}
                  <div className={!isEven ? "lg:order-2" : ""}>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${accent.bg} flex items-center justify-center text-2xl shadow-lg flex-shrink-0`}>
                        {cover.icon}
                      </div>
                      <div>
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${accent.badge}`}>{cover.fromPrice}</span>
                        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mt-1">{cover.name}</h2>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6 text-lg">{cover.description}</p>

                    {/* Stat */}
                    <div className={`${accent.light} border-l-4 border-purple-500 ${accent.border} rounded-r-2xl p-5 mb-6`}>
                      <div className={`text-3xl font-extrabold ${accent.text} mb-1`}>{cover.stats.value}</div>
                      <div className="text-sm text-gray-600">{cover.stats.label}</div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a
                        href="#get-quote"
                        className={`inline-flex items-center justify-center gap-2 bg-gradient-to-r ${accent.bg} text-white px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-md`}
                      >
                        Get a Quote for This Cover
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </a>
                      <Link
                        href={`/coverage/${cover.slug}/`}
                        className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50 transition-colors text-sm"
                      >
                        Full details
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  {/* Right: who/what panels */}
                  <div className={`space-y-4 ${!isEven ? "lg:order-1" : ""}`}>
                    {/* Image */}
                    <div className="relative h-48 rounded-2xl overflow-hidden shadow-md mb-4">
                      <img
                        src={coverImages[index]}
                        alt={cover.name}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${accent.bg} opacity-30`} />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Who needs it */}
                      <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-gray-900 mb-3 text-sm flex items-center gap-2">
                          <span>👤</span> Who needs this
                        </h3>
                        <ul className="space-y-1.5">
                          {cover.whoNeeds.slice(0, 4).map((item) => (
                            <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                              <span className={`${accent.text} mt-0.5 font-bold`}>✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* What it covers */}
                      <div className={`${accent.light} rounded-2xl p-5 border ${accent.border}`}>
                        <h3 className="font-bold text-gray-900 mb-3 text-sm flex items-center gap-2">
                          <span>🛡️</span> What&apos;s covered
                        </h3>
                        <ul className="space-y-1.5">
                          {cover.whatCovers.slice(0, 4).map((item) => (
                            <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                              <span className={`${accent.text} mt-0.5 font-bold`}>✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        })}
      </div>

      {/* Inline quote form */}
      <section id="get-quote" className="bg-gradient-hero text-white py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: copy */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
                <span className="text-purple-200 text-sm font-medium">⚡ Response within 1 business day</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                Ready to Protect Your Creator Business?
              </h2>
              <p className="text-purple-200 text-lg leading-relaxed mb-8">
                Fill in the form and a licensed insurance adviser will contact you directly with options tailored to your platform, audience and cover needs.
              </p>
              <div className="space-y-4">
                {[
                  { icon: "🏅", text: "Licensed Financial Advice Providers only" },
                  { icon: "🔒", text: "Your details are never shared without consent" },
                  { icon: "💬", text: "Real person, personalised advice — no bots" },
                  { icon: "📋", text: "Full adviser disclosure statement provided" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3">
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-purple-100 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-white rounded-2xl shadow-2xl border-2 border-violet-400 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-1">Get Your Quote</h3>
              <p className="text-gray-500 text-sm mb-6">No obligation. No spam. Just expert advice.</p>
              <QuoteForm variant="full" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
