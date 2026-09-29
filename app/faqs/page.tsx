import type { Metadata } from 'next';
import FAQsPage from './FaqsClient';

export const metadata: Metadata = {
  alternates: { canonical: 'https://www.influencerinsurance.co.nz/faqs/' },
};

export default function Page() {
  return <FAQsPage />;
}
