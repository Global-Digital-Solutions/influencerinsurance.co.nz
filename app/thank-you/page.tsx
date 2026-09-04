import Link from "next/link"
import LeadEvent from "@/components/LeadEvent"
import Image from "next/image"
import { siteConfig } from "../../data/site-config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Enquiry Received | Influencer Insurance",
  description: "Thanks for your creator insurance enquiry. A licensed adviser will be in touch within 1 business day.",
  alternates: { canonical: siteConfig.url + "/thank-you/" },
  robots: { index: false, follow: false },
}

const nextSteps = [
  {
    num: "1",
    icon: "📬",
    title: "Check your inbox",
    desc: "You'll receive a confirmation email shortly. If you don't see it, check your spam folder.",
  },
  {
    num: "2",
    icon: "🔍",
    title: "Adviser reviews your needs",
    desc: "A licensed insurance adviser personally reviews your enquiry and identifies cover options suited to your creator business.",
  },
  {
    num: "3",
    icon: "💬",
    title: "We'll be in touch within 1 business day",
    desc: "Your adviser will contact you directly with tailored options, pricing and a full disclosure statement — no obligation to proceed.",
  },
]

const relatedLinks = [
  { href: "/coverage/public-liability/", label: "Public Liability", icon: "🛡️", desc: "Events, activations & filming" },
  { href: "/coverage/equipment-gear/", label: "Equipment & Gear", icon: "📷", desc: "Cameras, drones & creator kit" },
  { href: "/coverage/cyber-privacy/", label: "Cyber & Privacy", icon: "🔐", desc: "Account hacks & data breaches" },
  { href: "/coverage/professional-indemnity/", label: "Professional Indemnity", icon: "📄", desc: "Brand deal & content disputes" },
]

export default function ThankYouPage() {
  return (
    <>
      <LeadEvent variant="quote_form" />
      {/* Hero */}
      <section className="relative text-white overflow-hidden min-h-[380px] flex flex-col justify-center">
        <div className="absolute inset-0">
          <Image src="/images/creator-studio.jpg" alt="Content creator" fill className="object-cover object-center" priority />
        </div>
        <div className="absolute inset-0 bg-slate-950/82" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center w-full">
          {/* Success badge */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-green-500/20 border-2 border-green-400/50 flex items-center justify-center shadow-xl">
              <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Enquiry Received!</h1>
          <p className="text-xl text-slate-200 max-w-xl mx-auto">
            Thanks for getting in touch. Your enquiry is on its way to a licensed insurance adviser who specialises in creator cover.
          </p>
        </div>
      </section>

      {/* What happens next */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 text-center mb-10">What happens next</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {nextSteps.map((step) => (
              <div key={step.num} className="relative bg-gradient-to-br from-violet-50 to-indigo-50 rounded-2xl p-6 border border-violet-100 text-center">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center text-white font-bold text-sm shadow-md">
                  {step.num}
                </div>
                <div className="text-4xl mt-3 mb-4">{step.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Trust row */}
          <div className="bg-slate-900 rounded-2xl px-8 py-6 mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { icon: "🏅", label: "Licensed advisers only" },
                { icon: "🔒", label: "Your details stay confidential" },
                { icon: "💬", label: "Real person — no bots" },
                { icon: "📋", label: "Full disclosure provided" },
              ].map((t) => (
                <div key={t.label}>
                  <div className="text-2xl mb-1">{t.icon}</div>
                  <div className="text-white text-xs font-medium leading-snug">{t.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* While you wait */}
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-2">While you wait</h2>
            <p className="text-gray-500 mb-8">Learn more about the covers your adviser may recommend.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="group bg-white border border-gray-100 rounded-2xl p-5 hover:border-violet-300 hover:shadow-md transition-all text-center"
                >
                  <div className="text-3xl mb-3">{l.icon}</div>
                  <div className="font-bold text-gray-900 text-sm group-hover:text-violet-700 transition-colors mb-1">{l.label}</div>
                  <div className="text-gray-400 text-xs">{l.desc}</div>
                </Link>
              ))}
            </div>
          </div>

          {/* Back home */}
          <div className="text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-violet-600 hover:text-violet-800 font-semibold text-sm transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
