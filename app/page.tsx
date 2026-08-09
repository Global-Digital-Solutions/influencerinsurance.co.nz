import Link from "next/link"
import Image from "next/image"
import QuoteForm from "../components/QuoteForm"
import { coverageTypes } from "../data/coverage-types"
import { siteConfig } from "../data/site-config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Influencer Insurance | Specialist Cover for Content Creators",
  description: "Specialist insurance for content creators and influencers. Public liability, equipment, cyber and professional indemnity — get connected with licensed brokers who understand the creator economy.",
  alternates: { canonical: siteConfig.url + "/" },
}

const stats = [
  { value: "$30B", label: "Global influencer market by 2026" },
  { value: "$200k", label: "Max FTA fine per offence" },
  { value: "3x", label: "Higher cyber targeting vs average businesses" },
  { value: "From $25/mo", label: "Entry-level creator cover" },
]

const steps = [
  {
    step: "1",
    title: "Tell us about your creator business",
    desc: "Use our simple quote form to share your platform, audience size and the cover you need.",
  },
  {
    step: "2",
    title: "We match you with a specialist adviser",
    desc: "Your enquiry goes directly to a licensed insurance broker who specialises in creator and professional cover.",
  },
  {
    step: "3",
    title: "Compare quotes and get covered",
    desc: "Your adviser compares options from leading insurers and helps you select the right policy at the right price.",
  },
]

const platformLogos = [
  { name: "Instagram", color: "#E1306C", bg: "#fdf2f8", text: "📸 Instagram" },
  { name: "YouTube", color: "#FF0000", bg: "#fff5f5", text: "▶️ YouTube" },
  { name: "TikTok", color: "#010101", bg: "#f9f9f9", text: "🎵 TikTok" },
  { name: "Twitch", color: "#9146FF", bg: "#f5f0ff", text: "🎮 Twitch" },
  { name: "X / Twitter", color: "#000000", bg: "#f9f9f9", text: "✖️ X / Twitter" },
  { name: "Facebook", color: "#1877F2", bg: "#f0f7ff", text: "👥 Facebook" },
  { name: "Pinterest", color: "#E60023", bg: "#fff5f5", text: "📌 Pinterest" },
  { name: "LinkedIn", color: "#0A66C2", bg: "#f0f7ff", text: "💼 LinkedIn" },
  { name: "Snapchat", color: "#FFFC00", bg: "#fffef0", text: "👻 Snapchat" },
  { name: "OnlyFans", color: "#00AFF0", bg: "#f0fbff", text: "🔐 OnlyFans" },
  { name: "Patreon", color: "#F96854", bg: "#fff5f3", text: "🎨 Patreon" },
  { name: "Spotify", color: "#1DB954", bg: "#f0fdf4", text: "🎙️ Spotify" },
  { name: "Substack", color: "#FF6719", bg: "#fff7f0", text: "✉️ Substack" },
  { name: "Beehiiv", color: "#7C3AED", bg: "#f5f0ff", text: "🐝 Beehiiv" },
]

const nicheCreators = [
  { icon: "🔐", label: "Adult Content", href: "/creators/adult-content-creators/" },
  { icon: "🏎️", label: "Automotive", href: "/creators/automotive-motorsport-creators/" },
  { icon: "🍳", label: "Food & Recipe", href: "/creators/food-recipe-creators/" },
  { icon: "💹", label: "Finfluencers", href: "/creators/financial-influencers/" },
  { icon: "🏔️", label: "Outdoor & Adventure", href: "/creators/outdoor-adventure-creators/" },
  { icon: "📲", label: "UGC Creators", href: "/creators/ugc-creators/" },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative text-white overflow-hidden min-h-[620px] flex flex-col justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/creator-studio.jpg"
            alt="Content creator filming"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-indigo-950/70 to-indigo-900/30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <span className="text-purple-200 text-sm font-medium">🎬 Locally Owned · Creator-First Insurance</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
                Insurance Built for
                <span className="block bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  Content Creators
                </span>
              </h1>
              <p className="text-xl text-slate-200 leading-relaxed mb-8">
                We're creators too — so we built the comparison solution we always wanted. Protect your brand, gear, income and reputation with specialist cover, and get matched with a licensed local broker who gets the creator economy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/quote/"
                  className="bg-white text-violet-700 px-8 py-4 rounded-xl font-bold hover:bg-purple-50 transition-colors shadow-xl text-center"
                >
                  Get My Free Quote
                </Link>
                <Link
                  href="/coverage/"
                  className="border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-colors text-center"
                >
                  Explore Coverage
                </Link>
              </div>
              <p className="text-sm text-slate-300 mt-4">Locally owned and operated · Licensed advisers · No obligation</p>
            </div>

            {/* Quote form — narrower so background is visible */}
            <div className="lg:col-span-2 bg-white rounded-2xl shadow-2xl border border-violet-200 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-1">Get a Quote Today</h2>
              <p className="text-gray-500 text-sm mb-4">Connect with a licensed broker — no obligation, no spam.</p>
              <QuoteForm variant="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-extrabold text-violet-400 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage types — stand-out dark section */}
      <section className="bg-slate-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-violet-500/15 border border-violet-500/30 rounded-full px-4 py-1.5 text-sm font-semibold text-violet-400 mb-4">
              Four specialist covers
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Cover for Every Creator Risk
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              From gear theft to brand deal disputes — four covers designed specifically for the risks creators face every day.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {coverageTypes.map((cover) => (
              <Link
                key={cover.slug}
                href={`/coverage/${cover.slug}/`}
                className="bg-slate-900 rounded-2xl p-6 border border-slate-700 hover:border-violet-500 transition-all group hover:bg-slate-800"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{cover.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-white group-hover:text-violet-300 transition-colors">{cover.name}</h3>
                      <span className="text-xs font-semibold text-violet-400 bg-violet-500/10 border border-violet-500/20 px-2 py-1 rounded-full">{cover.fromPrice}</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{cover.shortDesc}</p>
                    <div className="mt-3 flex items-center text-violet-400 text-sm font-medium">
                      Learn more
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works — dark overlay, white text */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/creator-desk.jpg"
            alt="Content creator at desk working on insurance documentation"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-950/82" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">How It Works</h2>
            <p className="text-lg text-slate-300">Getting covered takes minutes — here's the process.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.step} className="text-center bg-white/8 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="w-14 h-14 bg-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white font-bold text-xl">{step.step}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                <p className="text-slate-300 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform ticker + creator types */}
      <section className="bg-gray-950 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Cover for Every Type of Creator</h2>
            <p className="text-lg text-gray-400">Whatever platform you create on — we've got specialist cover for your world.</p>
          </div>

          {/* Scrolling ticker */}
          <div className="relative mb-12 overflow-hidden">
            <div className="flex gap-3 animate-ticker whitespace-nowrap">
              {[...platformLogos, ...platformLogos].map((p, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold border flex-shrink-0"
                  style={{ backgroundColor: p.bg, borderColor: p.color + '33', color: p.color === '#FFFC00' ? '#92400e' : p.color }}
                >
                  {p.text}
                </span>
              ))}
            </div>
          </div>

          {/* Main creator types grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
            {[
              { icon: "📸", label: "Instagram", href: "/creators/instagram-influencers/" },
              { icon: "▶️", label: "YouTube", href: "/creators/youtube-creators/" },
              { icon: "🎵", label: "TikTok", href: "/creators/tiktok-creators/" },
              { icon: "🎙️", label: "Podcasters", href: "/creators/podcasters/" },
              { icon: "✈️", label: "Travel", href: "/creators/travel-influencers/" },
              { icon: "💪", label: "Fitness & Wellness", href: "/creators/fitness-wellness-creators/" },
              { icon: "🎮", label: "Gaming & Streaming", href: "/creators/gaming-streamers/" },
              { icon: "💄", label: "Fashion & Beauty", href: "/creators/fashion-beauty-creators/" },
            ].map((creator) => (
              <Link
                key={creator.label}
                href={creator.href}
                className="bg-slate-800 hover:bg-violet-900/40 border border-slate-700 hover:border-violet-500 rounded-xl p-4 flex items-center gap-3 transition-all group"
              >
                <span className="text-2xl">{creator.icon}</span>
                <span className="text-sm font-semibold text-white group-hover:text-violet-300 leading-tight">{creator.label}</span>
              </Link>
            ))}
          </div>

          {/* Niche creators */}
          <div className="border-t border-slate-800 pt-8">
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Niche Creators</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {nicheCreators.map((n) => (
                <Link
                  key={n.label}
                  href={n.href}
                  className="bg-slate-900 hover:bg-violet-900/30 border border-slate-700 hover:border-violet-500 rounded-xl p-3 flex items-center gap-2 transition-all group"
                >
                  <span className="text-xl">{n.icon}</span>
                  <span className="text-xs font-semibold text-slate-300 group-hover:text-violet-300 leading-tight">{n.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/creators/" className="inline-flex items-center gap-2 border border-slate-600 text-slate-300 hover:border-violet-500 hover:text-violet-300 px-6 py-3 rounded-xl font-semibold transition-colors text-sm">
              View all creator types
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why choose us — dark overlay, white text */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/creator-auto.jpg"
            alt="Content creator filming with professional camera equipment"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-950/85" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-2">
                Why Creators Choose Us
              </h2>
              <p className="text-slate-300 mb-8">We're creators ourselves — built this so you can focus on creating, not admin.</p>
              <div className="space-y-5">
                {[
                  {
                    icon: "🎯",
                    title: "We're creators too",
                    desc: "Built by content creators for content creators. We know what brand deals, account hacks and gear loss actually mean for your income — not just the theory.",
                  },
                  {
                    icon: "⏱️",
                    title: "Save time, save money",
                    desc: "We compare options across multiple insurers so you get competitive cover without spending hours researching. One form, one adviser, sorted.",
                  },
                  {
                    icon: "🏅",
                    title: "Licensed advisers only",
                    desc: "Every broker holds a current Financial Advice Provider licence. You're getting advice from qualified professionals, not algorithms.",
                  },
                  {
                    icon: "🏡",
                    title: "Locally owned and operated",
                    desc: "A local team that understands your market, your audience, and your obligations. Real people who pick up the phone.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="text-2xl flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-violet-200 shadow-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to protect your creator business?</h3>
              <p className="text-sm text-gray-500 mb-5">Takes 2 minutes · No obligation · Response within 1 business day</p>
              <QuoteForm variant="compact" />
            </div>
          </div>
        </div>
      </section>

      {/* Regulation callout */}
      <section className="bg-indigo-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-4xl mb-4">⚖️</div>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">
            The Fair Trading Act Applies to Your Content
          </h2>
          <p className="text-indigo-200 leading-relaxed mb-6 max-w-2xl mx-auto">
            The Commerce Commission actively monitors creator content for compliance. Undisclosed sponsored posts, misleading product claims and unlabelled affiliate content can attract fines up to $200,000 per offence. Professional indemnity insurance is your financial backstop.
          </p>
          <Link
            href="/coverage/professional-indemnity/"
            className="inline-block bg-white text-indigo-700 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-colors shadow-lg"
          >
            Learn About Professional Indemnity
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Do What You Love — We'll Handle the Rest</h2>
          <p className="text-slate-300 text-lg mb-8">
            Stop spending time on insurance admin. Connect with a specialist adviser today and get back to creating.
          </p>
          <Link
            href="/quote/"
            className="inline-block bg-violet-600 hover:bg-violet-700 text-white px-10 py-4 rounded-xl font-bold transition-colors shadow-xl text-lg"
          >
            Get My Quote Now
          </Link>
        </div>
      </section>
    </>
  )
}
