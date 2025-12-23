import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

export const metadata: Metadata = {
  title: 'Disclaimer - FinanceHub',
  description: 'Disclaimer for FinanceHub. Important legal information about the content on this website.',
};

export default function DisclaimerPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Disclaimer', href: '/disclaimer' },
        ]}
      />
      <div className="mt-8 prose prose-lg dark:prose-invert max-w-none">
        <h1>Disclaimer</h1>
        <p>
          The information provided by FinanceHub is for general informational purposes only. All information on the site is provided in good faith; however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the site.
        </p>
        <h2>Not Financial Advice</h2>
        <p>
          The content on FinanceHub does not constitute financial, investment, or legal advice. You should consult with a qualified professional before making any financial decisions.
        </p>
        <h2>External Links</h2>
        <p>
          Our website may contain links to external websites that are not provided or maintained by us. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
        </p>
        <h2>Limitation of Liability</h2>
        <p>
          Under no circumstance shall FinanceHub have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site.
        </p>
      </div>
    </div>
  );
}
