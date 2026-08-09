import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "../../data/blog-posts"
import { siteConfig } from "../../data/site-config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Creator Insurance Resources | Influencer Insurance NZ Blog",
  description: "Expert guides, regulatory updates and practical advice for NZ content creators — covering insurance, Fair Trading Act compliance, equipment protection and more.",
  alternates: { canonical: siteConfig.url + "/blog/" },
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts

  return (
    <>
      <section className="relative text-white overflow-hidden min-h-[420px] sm:min-h-[500px] flex flex-col justify-center">
        <div className="absolute inset-0">
          <Image src="/images/creator-desk.jpg" alt="Content creator working" fill className="object-cover object-center" priority />
        </div>
        <div className="absolute inset-0 bg-slate-950/78" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center w-full">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-purple-200 text-sm font-medium">📚 Guides, tips & creator insights</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Creator Insurance Resources</h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto">
            Practical guides for content creators — from public liability to Fair Trading Act compliance and gear protection.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured post */}
          <Link href={`/blog/${featured.slug}/`} className="group block mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-purple-200 hover:shadow-lg transition-all">
              <div className="relative h-64 lg:h-auto">
                <Image src={featured.image} alt={featured.title} fill className="object-cover" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-3">{featured.category}</span>
                <h2 className="text-2xl font-extrabold text-gray-900 group-hover:text-purple-700 transition-colors mb-3">{featured.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">{featured.excerpt}</p>
                <div className="flex items-center gap-3 text-sm text-gray-500">
                  <span>{featured.date}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}/`} className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-purple-200 hover:shadow-lg transition-all">
                <div className="relative h-48">
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">{post.category}</span>
                  <h3 className="font-bold text-gray-900 group-hover:text-purple-700 transition-colors mt-1 mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-3 text-xs text-gray-400 mt-3">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
