import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Target, Users, TrendingUp, Shield, Globe, BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'About Us - Our Mission & Team',
  description: 'Learn about FinanceHub\'s mission to democratize financial education and empower individuals with knowledge for informed financial decisions.',
  openGraph: {
    title: 'About FinanceHub',
    description: 'Democratizing financial education through trustworthy, data-backed content.',
  },
};

const VALUES = [
  {
    title: 'Trust & Integrity',
    description: 'We prioritize accuracy and unbiased information in everything we publish.',
    icon: Shield,
  },
  {
    title: 'Accessibility',
    description: 'Making complex financial concepts easy to understand for everyone.',
    icon: BookOpen,
  },
  {
    title: 'Empowerment',
    description: 'Giving you the tools and knowledge to take control of your financial future.',
    icon: TrendingUp,
  },
  {
    title: 'Community',
    description: 'Building a supportive community of learners and investors.',
    icon: Users,
  },
];

const TEAM = [
  {
    name: 'Alex Morgan',
    role: 'Founder & Editor-in-Chief',
    bio: 'Former investment banker with a passion for financial literacy.',
    image: '/team/alex.jpg',
  },
  {
    name: 'Sarah Chen',
    role: 'Senior Analyst',
    bio: 'CFA charterholder specializing in market trends and macroeconomics.',
    image: '/team/sarah.jpg',
  },
  {
    name: 'David Kumar',
    role: 'Tech Lead',
    bio: 'Building the tools to visualize your financial journey.',
    image: '/team/david.jpg',
  },
];

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">
      <Breadcrumbs
        items={[
          { name: 'Home', href: '/' },
          { name: 'About', href: '/about' },
        ]}
      />
      
      <div className="mt-8 space-y-16">
        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About FinanceHub</h1>
          <p className="text-xl text-muted-foreground">
            We&apos;re on a mission to democratize financial education and empower individuals 
            with the knowledge they need to make informed financial decisions.
          </p>
        </section>

        {/* Mission Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Target className="w-8 h-8 text-primary" />
              Our Mission
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                FinanceHub was founded on the belief that everyone deserves access to high-quality 
                financial education, regardless of their background or experience level. We strive to 
                break down complex financial concepts into clear, actionable insights that anyone can understand.
              </p>
              <p>
                In a world where financial literacy is more important than ever, we&apos;re committed to 
                being your trusted companion on your journey to financial freedom and security.
              </p>
            </div>
          </div>
          <div className="bg-muted rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
            <Globe className="w-32 h-32 text-primary/20" />
          </div>
        </section>
        
        {/* Values Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">What We Stand For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value) => (
              <Card key={value.title} className="border-none shadow-md bg-card/50">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Meet The Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <Card key={member.name} className="text-center overflow-hidden">
                <div className="h-32 bg-gradient-to-r from-primary/10 to-primary/5" />
                <div className="-mt-16 mb-4 flex justify-center">
                  <div className="w-32 h-32 rounded-full bg-muted border-4 border-background flex items-center justify-center text-4xl font-bold text-muted-foreground">
                    {member.name[0]}
                  </div>
                </div>
                <CardContent>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
          
          <div className="grid md:grid-cols-2 gap-8 not-prose">
            <div className="p-6 border border-border rounded-lg">
              <Shield className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Trustworthy Information</h3>
              <p className="text-muted-foreground">
                Every article is thoroughly researched, fact-checked, and backed by reliable data 
                sources. We never compromise on accuracy.
              </p>
            </div>
            
            <div className="p-6 border border-border rounded-lg">
              <BookOpen className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Educational Focus</h3>
              <p className="text-muted-foreground">
                We believe in teaching fundamentals, not just giving tips. Our goal is to help you 
                understand the &quot;why&quot; behind financial decisions.
              </p>
            </div>
            
            <div className="p-6 border border-border rounded-lg">
              <Globe className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global & Local Perspective</h3>
              <p className="text-muted-foreground">
                We cover both Indian financial markets and global trends, helping you understand 
                how they interconnect and affect your finances.
              </p>
            </div>
            
            <div className="p-6 border border-border rounded-lg">
              <TrendingUp className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Actionable Insights</h3>
              <p className="text-muted-foreground">
                Every article provides practical takeaways you can implement immediately to improve 
                your financial situation.
              </p>
            </div>
          </div>
        </section>
        
        <section className="my-12">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Users className="w-8 h-8 text-primary" />
            Our Content Coverage
          </h2>
          <p>
            FinanceHub covers eight comprehensive categories designed to address every aspect of 
            your financial life:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 not-prose my-6">
            {[
              { name: 'Economy & Macroeconomics', desc: 'Understanding economic trends and policies' },
              { name: 'Personal Finance', desc: 'Managing money, budgeting, and financial planning' },
              { name: 'Investing & Wealth Building', desc: 'Growing wealth through smart investments' },
              { name: 'Banking, Credit & Loans', desc: 'Navigating banking products and credit' },
              { name: 'Stock Market & Trading', desc: 'Market analysis and trading strategies' },
              { name: 'Corporate Finance', desc: 'Business finance and valuation' },
              { name: 'FinTech & Crypto', desc: 'Digital finance and emerging technologies' },
              { name: 'Global Economy', desc: 'International markets and finance' },
            ].map((category) => (
              <div key={category.name} className="p-4 bg-muted rounded-lg">
                <h4 className="font-semibold mb-1">{category.name}</h4>
                <p className="text-sm text-muted-foreground">{category.desc}</p>
              </div>
            ))}
          </div>
        </section>
        
        <section className="my-12">
          <h2 className="text-3xl font-bold mb-6">Our Commitment to You</h2>
          <ul>
            <li><strong>No Get-Rich-Quick Schemes:</strong> We focus on sustainable, long-term wealth building strategies.</li>
            <li><strong>Unbiased Content:</strong> We don&apos;t promote specific financial products without disclosing relationships.</li>
            <li><strong>Continuous Learning:</strong> We stay updated with the latest financial regulations, market trends, and research.</li>
            <li><strong>Accessibility:</strong> Our content is written in clear, jargon-free language that anyone can understand.</li>
            <li><strong>Data-Driven:</strong> We back our insights with real data, statistics, and credible sources.</li>
          </ul>
        </section>
        
        <section className="my-12 p-8 bg-muted rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p>
            Subscribe to our newsletter to receive weekly financial insights, market updates, 
            and educational content delivered straight to your inbox. Join thousands of readers 
            who are taking control of their financial future.
          </p>
          <Link 
            href="/newsletter" 
            className="inline-block mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors no-underline"
          >
            Subscribe to Newsletter
          </Link>
        </section>
        
        <section className="my-12">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p>
            Have questions, suggestions, or feedback? We&apos;d love to hear from you! Reach out to us at{' '}
            <a href="mailto:contact@financehub.com">contact@financehub.com</a>
          </p>
          <p>
            For partnership inquiries:{' '}
            <a href="mailto:partnerships@financehub.com">partnerships@financehub.com</a>
          </p>
        </section>
        
        <div className="border-t border-border pt-8 mt-12">
          <p className="text-sm text-muted-foreground italic">
            <strong>Disclaimer:</strong> FinanceHub provides educational content for informational 
            purposes only. We are not financial advisors, and our content should not be considered 
            as personalized financial advice. Always consult with a qualified financial professional 
            before making investment decisions.
          </p>
        </div>
      </article>
    </div>
  );
}
