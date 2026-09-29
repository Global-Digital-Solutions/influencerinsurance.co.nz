"use client"
import { useState } from "react"
import Link from "next/link"
import { faqs } from "../../data/faqs"

const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
}

export default function FAQsPage() {
  const [open, setOpen] = useState<number | null>(null)
  const categories = Array.from(new Set(faqs.map((f) => f.category)))

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema) }} />

      <section className="bg-gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Everything you need to know about influencer insurance in New Zealand.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {categories.map((cat) => (
            <div key={cat} className="mb-10">
              <h2 className="text-lg font-bold text-purple-700 uppercase tracking-wider mb-4">{cat}</h2>
              <div className="space-y-3">
                {faqs.filter((f) => f.category === cat).map((faq, i) => {
                  const idx = faqs.indexOf(faq)
                  const isOpen = open === idx
                  return (
                    <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                      <button
                        className="w-full text-left px-6 py-4 flex items-center justify-between font-semibold text-gray-900 hover:bg-purple-50 transition-colors"
                        onClick={() => setOpen(isOpen ? null : idx)}
                      >
                        <span>{faq.q}</span>
                        <span className={`text-purple-600 text-xl transition-transform ${isOpen ? "rotate-45" : ""}`}>+</span>
                      </button>
                      {isOpen && (
                        <div className="px-6 py-4 bg-gray-50 text-gray-700 leading-relaxed border-t border-gray-200">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}

          <div className="mt-10 bg-purple-50 rounded-2xl p-6 text-center">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Still have questions?</h3>
            <p className="text-gray-600 mb-4">Our licensed brokers are happy to answer any specific questions about your situation.</p>
            <Link href="/quote/" className="inline-block bg-gradient-brand text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity">
              Speak to an Adviser
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
