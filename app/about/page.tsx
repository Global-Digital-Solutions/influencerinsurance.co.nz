import Link from "next/link"
import { siteConfig } from "../../data/site-config"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Influencer Insurance | Creator Cover Specialists",
  description: "Influencer Insurance is a specialist referral service connecting content creators with licensed insurance advisers who understand the creator economy.",
  alternates: { canonical: siteConfig.url + "/about/" },
}

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-hero text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">About Influencer Insurance</h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            We exist to make specialist insurance accessible to every content creator — connecting you with licensed advisers who actually understand the creator economy.
          </p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The creator economy is growing fast — but the insurance industry has been slow to catch up. Most standard business insurance policies were not designed with content creators in mind. They miss the unique risks of social media, brand partnerships, equipment used on location, and income that flows from online platforms.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Influencer Insurance was built to bridge that gap. We are a specialist referral service that connects content creators with insurance brokers and advisers who understand the creator economy and can recommend the right cover for your specific situation.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">How We Work</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              We are not an insurer, underwriter or insurance adviser. We are a referral service. When you submit an enquiry through our website, it goes directly to a licensed insurance broker or adviser who specialises in commercial and creator insurance.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              The advisers we work with hold current Financial Advice Provider (FAP) licences under the Financial Markets Conduct Act 2013. They will contact you directly, provide a formal disclosure statement, and give you personalised insurance advice based on your specific creator business.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-10">Why Creator Insurance Matters</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Influencers and content creators operate in an increasingly regulated environment. The Commerce Commission monitors influencer content under the Fair Trading Act 1986, with fines of up to $200,000 per offence for misleading or undisclosed commercial communications. The Privacy Act 2020 creates obligations around how creators handle follower and subscriber data. And as brand partnerships become more formalised, professional indemnity cover is increasingly expected by the brands creators work with.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              At the same time, the value of equipment, the income generated from content, and the reputational stakes of a hacked account or defamation claim are all growing. Insurance is the financial backstop that lets creators build their businesses with confidence.
            </p>

            <div className="bg-purple-50 rounded-2xl p-6 mt-8">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Important Disclosure</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Influencerinsurance.co.nz is an insurance referral service only. We are not an insurer, underwriter or licensed financial adviser. The insurance advisers and brokers we refer enquiries to are independently licensed under the Financial Markets Conduct Act 2013. This website provides general information about insurance for content creators and does not constitute financial advice. All insurance recommendations are made by the licensed advisers who contact you following your enquiry.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link href="/quote/" className="inline-block bg-gradient-brand text-white px-10 py-4 rounded-xl font-bold hover:opacity-90 transition-opacity shadow-lg">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
