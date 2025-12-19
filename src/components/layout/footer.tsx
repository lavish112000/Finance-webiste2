import Link from 'next/link';
import { TrendingUp, Mail, Twitter, Linkedin, Github, Youtube } from 'lucide-react';
import { SITE_CONFIG, FOOTER_LINKS, DISCLAIMER_TEXT } from '@/lib/constants';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-finance-navy-900 dark:bg-finance-navy-950 text-white no-print">
      {/* Newsletter Section */}
      <div className="border-b border-finance-navy-700">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-2">Stay Ahead of the Markets</h3>
            <p className="text-finance-navy-300 mb-6">
              Get weekly insights on market trends, investment strategies, and financial planning
              delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-finance-navy-800 border border-finance-navy-600 rounded-lg text-white placeholder:text-finance-navy-400 focus:outline-none focus:ring-2 focus:ring-finance-emerald-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-finance-emerald-500 hover:bg-finance-emerald-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Subscribe
              </button>
            </form>
            <p className="text-xs text-finance-navy-400 mt-3">
              By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-finance-emerald-500 to-finance-emerald-600 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">{SITE_CONFIG.name}</span>
            </Link>
            <p className="text-finance-navy-300 text-sm mb-4">
              Your trusted source for finance education, market insights, and economic analysis.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 bg-finance-navy-800 hover:bg-finance-navy-700 rounded-lg transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-finance-navy-800 hover:bg-finance-navy-700 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-finance-navy-800 hover:bg-finance-navy-700 rounded-lg transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="p-2 bg-finance-navy-800 hover:bg-finance-navy-700 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold mb-4 text-finance-navy-100">Categories</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.categories.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-finance-navy-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-finance-navy-100">Resources</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-finance-navy-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-finance-navy-100">Company</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-finance-navy-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-finance-navy-100">Legal</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-finance-navy-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-finance-navy-700">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <p className="text-xs text-finance-navy-400 text-center max-w-4xl mx-auto">
            <strong className="text-finance-navy-300">Disclaimer:</strong>{' '}
            {DISCLAIMER_TEXT.trim()}
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-finance-navy-700">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-finance-navy-400">
            <p>© {currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span>Made with ❤️ for financial literacy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
