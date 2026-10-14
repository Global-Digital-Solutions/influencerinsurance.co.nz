import { siteConfig } from "../../data/site-config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Use | Influencer Insurance NZ",
  description: "Terms of use for influencerinsurance.co.nz — please read before using this website.",
  alternates: { canonical: siteConfig.url + "/terms/" },
}

export default function TermsPage() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Terms of Use</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: October 2026</p>
        <div className="prose prose-gray max-w-none space-y-6 text-gray-700 leading-relaxed">
          <p>By using influencerinsurance.co.nz (&quot;this website&quot;), you agree to these Terms of Use. Please read them carefully before using the website.</p>
          <h2 className="text-xl font-bold text-gray-900">Nature of Service</h2>
          <p>This website is operated as an insurance referral service only. We are not an insurer, underwriter, or licensed financial adviser. We do not provide insurance advice, quotes or policies. We connect users with licensed NZ insurance advisers and brokers who provide those services. The advisers and brokers we refer you to are Registered Financial Service Providers.</p>
          <h2 className="text-xl font-bold text-gray-900">General Information Only</h2>
          <p>The content on this website — including all articles, guides, FAQs and pricing information — is provided for general informational purposes only and does not constitute financial advice. Insurance premiums, coverage terms and availability vary by insurer and individual circumstances. Always obtain personalised advice from a licensed NZ adviser before making insurance decisions.</p>
          <h2 className="text-xl font-bold text-gray-900">No Warranty</h2>
          <p>We make no warranty that the information on this website is accurate, complete or current. Insurance markets and regulatory requirements change. Always verify information with a licensed adviser before relying on it.</p>
          <h2 className="text-xl font-bold text-gray-900">Information About Insurers and Other Providers</h2>
          <p>Information on this website about insurers and other providers was accurate at the time of publishing. Products, policy wordings, prices and services can change, so please confirm any details directly with the provider before relying on them. If you are a reader or a provider and you notice information that is outdated or incorrect, please let us know at <a href="mailto:hello@cover4you.co.nz" className="text-purple-700 underline">hello@cover4you.co.nz</a> and we will review it.</p>
          <h2 className="text-xl font-bold text-gray-900">Limitation of Liability</h2>
          <p>To the extent permitted by law, we exclude all liability for any loss or damage arising from use of or reliance on this website or the insurance referral services it provides.</p>
          <h2 className="text-xl font-bold text-gray-900">Governing Law</h2>
          <p>These terms are governed by the laws of New Zealand. Any disputes are subject to the exclusive jurisdiction of the New Zealand courts.</p>
        </div>
      </div>
    </section>
  )
}
