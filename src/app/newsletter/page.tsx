import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Mail, TrendingUp, Bell, BookOpen, Zap, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Newsletter - Stay Updated on Finance & Markets',
  description: 'Subscribe to FinanceHub newsletter for weekly financial insights, market analysis, investment tips, and economic updates delivered to your inbox.',
  openGraph: {
    title: 'Subscribe to FinanceHub Newsletter',
    description: 'Get weekly financial insights and market updates delivered to your inbox.',
  },
};

const BENEFITS = [
  {
    title: 'Market Analysis',
    description: 'Deep dives into what moved the markets this week.',
    icon: TrendingUp,
  },
  {
    title: 'Investment Ideas',
    description: 'Curated list of potential opportunities and risks.',
    icon: Zap,
  },
  {
    title: 'Educational Content',
    description: 'Learn a new financial concept every week.',
    icon: BookOpen,
  },
  {
    title: 'Timely Alerts',
    description: 'Be the first to know about major economic events.',
    icon: Bell,
  },
];

export default function NewsletterPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'Newsletter', href: '/newsletter' },
        ]}
      />
      
      <div className="max-w-4xl mx-auto mt-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Stay Ahead in Finance
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of readers who receive weekly insights on markets, investing, 
            personal finance, and economic trends.
          </p>
        </div>
        
        {/* Newsletter Form */}
        <div className="bg-muted/50 border p-8 rounded-2xl mb-16 max-w-2xl mx-auto shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">Subscribe Now</h2>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="John"
                  className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-2 rounded-lg border bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>
            
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                Subscribe Free
                <CheckCircle className="w-5 h-5" />
              </button>
              <p className="text-xs text-center text-muted-foreground mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </form>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {BENEFITS.map((benefit) => (
            <Card key={benefit.title} className="border-none shadow-sm bg-card">
              <CardContent className="flex items-start gap-4 p-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <benefit.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-3">
                Interests (select all that apply)
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Stock Market',
                  'Personal Finance',
                  'Cryptocurrency',
                  'Global Economy',
                  'Investing',
                  'Banking',
                ].map((interest) => (
                  <label key={interest} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-primary" />
                    <span className="text-sm">{interest}</span>
                  </label>
                ))}
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <input type="checkbox" id="agree" className="mt-1 w-4 h-4 text-primary" />
              <label htmlFor="agree" className="text-sm text-muted-foreground">
                I agree to receive weekly newsletters and occasional special updates. 
                You can unsubscribe anytime.
              </label>
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Subscribe to Newsletter
            </button>
          </form>
          
          <p className="text-xs text-center text-muted-foreground mt-4">
            🔒 Your privacy is important. We never share your data.
          </p>
        </div>
        
        {/* What You'll Get */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">What You&apos;ll Get</h2>
          <div className="grid md:grid-cols-3 gap-6">,
            <div className="p-6 border border-border rounded-lg text-center">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Market Insights</h3>
              <p className="text-muted-foreground">
                Weekly analysis of stock markets, indices, and emerging opportunities
              </p>
            </div>
            
            <div className="p-6 border border-border rounded-lg text-center">
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Educational Content</h3>
              <p className="text-muted-foreground">
                In-depth guides on investing, personal finance, and wealth building
              </p>
            </div>
            
            <div className="p-6 border border-border rounded-lg text-center">
              <Bell className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Economic Updates</h3>
              <p className="text-muted-foreground">
                Key economic indicators, policy changes, and their impact on your money
              </p>
            </div>
          </div>
        </div>
        
        {/* Features */}
        <div className="bg-linear-to-br from-primary/5 to-emerald-500/5 p-8 rounded-2xl mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Zap className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Newsletter Benefits</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Weekly market roundup and analysis',
              'Exclusive investment insights and tips',
              'Early access to new articles',
              'Economic calendar highlights',
              'Curated reading recommendations',
              'Personal finance strategies',
              'No spam, ever - one email per week',
              'Unsubscribe anytime with one click',
            ].map((benefit) => (
              <div key={benefit} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Social Proof */}
        <div className="text-center mb-12">
          <p className="text-muted-foreground mb-6">
            Join <strong className="text-foreground">10,000+</strong> readers who trust FinanceHub 
            for their financial education
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-linear-to-br from-primary to-emerald-500 border-2 border-background"
                />
              ))}
            </div>
            <span>and many more...</span>
          </div>
        </div>
        
        {/* FAQ */}
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">How often will I receive emails?</h3>
              <p className="text-muted-foreground">
                We send one comprehensive newsletter every week, typically on Sunday evening. 
                Occasionally, we may send special updates for major market events.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Can I customize what I receive?</h3>
              <p className="text-muted-foreground">
                Yes! When you subscribe, you can select your interests. We&apos;ll tailor content 
                to match your preferences, though you&apos;ll still get important updates relevant to everyone.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Is my email safe?</h3>
              <p className="text-muted-foreground">
                Absolutely. We never share, sell, or rent your email address to third parties. 
                Your privacy is our top priority.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">How do I unsubscribe?</h3>
              <p className="text-muted-foreground">
                Every email includes an unsubscribe link at the bottom. One click and you&apos;re out - 
                no questions asked, though we&apos;d love to know how we can improve!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
