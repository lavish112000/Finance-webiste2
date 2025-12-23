import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllArticles, getArticle } from '@/lib/content';
import { ArticleContent } from '@/components/article/article-content';
import { Article } from '@/types';

// MDX Components
import { ArticleCard } from '@/components/ui/article-card';
import { Callout } from '@/components/ui/callout';
import { ComparisonTable } from '@/components/investing/comparison-table';
import { MarketSnapshot } from '@/components/ui/market-snapshot';
import { DisclaimerCallout } from '@/components/article/disclaimer-callout';
import { KeyTakeaways } from '@/components/article/key-takeaways';
import { GlossaryTooltip } from '@/components/ui/glossary-tooltip';

const components = {
  ArticleCard,
  Callout,
  ComparisonTable,
  MarketSnapshot,
  DisclaimerCallout,
  KeyTakeaways,
  GlossaryTooltip,
};

interface ArticlePageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const article = getArticle(category, slug);

  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author.name],
      tags: article.tags,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { category, slug } = await params;
  const article = getArticle(category, slug);

  if (!article) {
    notFound();
  }

  // Fetch related articles
  let relatedArticles: Article[] = [];
  if (article.relatedArticles && article.relatedArticles.length > 0) {
    const allArticles = getAllArticles();
    relatedArticles = allArticles.filter((a) => article.relatedArticles?.includes(a.slug));
  }

  return (
    <ArticleContent article={article} relatedArticles={relatedArticles}>
      <MDXRemote source={article.content} components={components} />
    </ArticleContent>
  );
}
