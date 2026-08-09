import Link from "next/link"
import Image from "next/image"
import { creatorTypes } from "../../data/creator-types"
import { siteConfig } from "../../data/site-config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Creator Types | Insurance for Every Influencer Platform",
  description: "Specialist insurance guidance for every type of content creator — Instagram, YouTube, TikTok, podcasters, travel, fitness, gaming and fashion creators.",
  alternates: { canonical: siteConfig.url + "/creators/" },
}

export default function CreatorsPage() {
  return (
    <>
      <section className="relative text-white overflow-hidden min-h-[420px] sm:min-h-[500px] flex flex-col justify-center">
        <div className="absolute inset-0">
          <Image src="/images/creator-beauty.jpg" alt="Content creator" fill className="object-cover object-center" priority />
        </div>
        <div className="absolute inset-0 bg-slate-950/78" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center w-full">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-purple-200 text-sm font-medium">🎬 Every niche. Every platform.</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Insurance by Creator Type</h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Different platforms, different risks. Find specialist insurance guidance tailored to how you create.
          </p>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {creatorTypes.map((creator) => (
              <Link
                key={creator.slug}
                href={`/creators/${creator.slug}/`}
                className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-purple-300 hover:shadow-lg transition-all group"
              >
                <div className="text-4xl mb-3">{creator.icon}</div>
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-purple-700 mb-2 transition-colors">{creator.name}</h2>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{creator.description}</p>
                <div className="mt-4 flex items-center text-purple-600 text-sm font-medium">
                  View cover guide
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
