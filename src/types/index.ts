export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  author: Author;
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
  tags: string[];
  featured: boolean;
  featureImage: string;
  featureImageAlt: string;
  content: string;
  tableOfContents: TableOfContentsItem[];
  keyTakeaways?: string[];
  relatedArticles?: string[];
  seoKeywords: string[];
  examRelevant?: boolean;
  featureImageIdea?: string;
  impactLevel?: 'low' | 'medium' | 'high';
  indiaImpact?: string;
  globalImpact?: string;
  timeSensitive?: boolean;
}

export interface Author {
  name: string;
  avatar: string;
  role: string;
  bio?: string;
  social?: {
    twitter?: string;
    linkedin?: string;
  };
}

export interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
  children?: TableOfContentsItem[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
  featured: boolean;
}

export interface MarketIndex {
  name: string;
  value: number;
  change: number;
  region: string;
}

export interface CurrencyRate {
  pair: string;
  value: number;
  change: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface KeyTakeaway {
  icon?: string;
  text: string;
}

export interface ArticleFrontmatter {
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  description: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  author: string;
  featured: boolean;
  featureImage: string;
  featureImageAlt: string;
  seoKeywords: string[];
  relatedArticles?: string[];
  examRelevant?: boolean;
  featureImageIdea?: string;
  impactLevel?: 'low' | 'medium' | 'high';
  indiaImpact?: string;
  globalImpact?: string;
  timeSensitive?: boolean;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
  relatedTerms?: string[];
}

export interface NewsletterSubscription {
  email: string;
  preferences: string[];
  subscribedAt: Date;
}

export interface SearchResult {
  slug: string;
  title: string;
  description: string;
  category: string;
  excerpt: string;
  score: number;
}

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export interface SocialShareProps {
  url: string;
  title: string;
  description: string;
}
