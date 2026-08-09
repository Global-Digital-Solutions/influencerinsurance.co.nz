import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "../../data/site-config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Influencer Insurance NZ by Location | Creator Cover Nationwide",
  description: "Influencer insurance for content creators across New Zealand — Auckland, Wellington, Christchurch and nationwide. Connect with licensed NZ brokers in your region.",
  alternates: { canonical: siteConfig.url + "/locations/" },
}

const locations = [
  {
    city: "Auckland",
    desc: "NZ's largest city and creator hub. Auckland-based influencers — from lifestyle and fashion to food and travel — benefit from specialist cover tailored to the opportunities and risks of NZ's biggest market.",
    icon: "🏙️",
    slug: "auckland",
  },
  {
    city: "Wellington",
    desc: "Wellington's vibrant creative community includes podcasters, digital media creators and lifestyle influencers. As the policy and regulatory capital, Wellington-based creators are often ahead of the curve on compliance requirements.",
    icon: "🌊",
    slug: "wellington",
  },
  {
    city: "Christchurch",
    desc: "Christchurch's growing startup and creator ecosystem is producing more professional content creators across outdoor, adventure, property and hospitality niches.",
    icon: "🌸",
    slug: "christchurch",
  },
  {
    city: "Queenstown",
    desc: "Queenstown's adventure tourism and outdoor lifestyle make it a hotspot for travel, adventure and experience influencers. Equipment cover and public liability are especially important in this high-activity environment.",
    icon: "⛰️",
    slug: "queenstown",
  },
  {
    city: "Hamilton",
    desc: "The Waikato region's Hamilton-based creators — across food, lifestyle, agriculture and sports — are an important part of the NZ creator landscape.",
    icon: "🌿",
    slug: "hamilton",
  },
  {
    city: "Tauranga",
    desc: "Bay of Plenty's Tauranga is home to a growing community of lifestyle, outdoor and food creators attracted by the region's beaches, produce and outdoor culture.",
    icon: "🏖️",
    slug: "tauranga",
  },
  {
    city: "Dunedin",
    desc: "Dunedin's student city culture and thriving arts community has produced an active creator economy across music, arts, fashion and outdoor content.",
    icon: "🎓",
    slug: "dunedin",
  },
  {
    city: "Nelson",
    desc: "Nelson and the top of the South Island attract outdoor, arts and food creators drawn to the region's natural beauty and artisan culture.",
    icon: "☀️",
    slug: "nelson",
  },
]

export default function LocationsPage() {
  return (
    <>
      <section className="relative text-white overflow-hidden min-h-[420px] sm:min-h-[500px] flex flex-col justify-center">
        <div className="absolute inset-0">
          <Image src="/images/creator-travel.jpg" alt="Content creator on location" fill className="object-cover object-center" priority />
        </div>
        <div className="absolute inset-0 bg-slate-950/78" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center w-full">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-purple-200 text-sm font-medium">📍 Creator cover wherever you are</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Creator Insurance Nationwide</h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Licensed local brokers ready to help content creators in every major centre — and across the country.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {locations.map((loc) => (
              <div key={loc.slug} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="text-3xl mb-3">{loc.icon}</div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{loc.city}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{loc.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 text-center border border-purple-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Nationwide Coverage</h2>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-2xl mx-auto">
              Our licensed NZ brokers can assist content creators anywhere in New Zealand. Whether you are in a major centre or a regional location, use our quote form to connect with an adviser who can help you get the right cover.
            </p>
            <Link
              href="/quote/"
              className="inline-block bg-gradient-brand text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-lg"
            >
              Get a Quote Nationwide
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
