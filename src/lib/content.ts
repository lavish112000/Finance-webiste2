import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';
import { slugify } from '@/lib/utils';
import type { Article, ArticleFrontmatter, TableOfContentsItem } from '@/types';

const CONTENT_DIR = path.join(process.cwd(), 'content');

export function getContentDir(category?: string): string {
  if (category) {
    return path.join(CONTENT_DIR, category);
  }
  return CONTENT_DIR;
}

export function getAllCategories(): string[] {
  try {
    const dirs = fs.readdirSync(CONTENT_DIR, { withFileTypes: true });
    return dirs.filter((d) => d.isDirectory()).map((d) => d.name);
  } catch {
    return [];
  }
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  const categoryDir = getContentDir(categorySlug);
  
  try {
    const files = fs.readdirSync(categoryDir);
    const mdxFiles = files.filter((file) => file.endsWith('.mdx'));
    
    return mdxFiles.map((file) => {
      const filePath = path.join(categoryDir, file);
      const source = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(source);
      const frontmatter = data as ArticleFrontmatter;
      const stats = readingTime(content);
      const toc = extractTableOfContents(content);
      
      return {
        slug: frontmatter.slug || file.replace('.mdx', ''),
        title: frontmatter.title,
        description: frontmatter.description,
        category: frontmatter.category,
        categorySlug: frontmatter.categorySlug || categorySlug,
        author: {
          name: frontmatter.author || 'FinanceHub Team',
          avatar: '/images/authors/default.jpg',
          role: 'Financial Analyst',
        },
        publishedAt: frontmatter.publishedAt,
        updatedAt: frontmatter.updatedAt || frontmatter.publishedAt,
        readingTime: Math.ceil(stats.minutes),
        tags: frontmatter.tags || [],
        featured: frontmatter.featured || false,
        featureImage: frontmatter.featureImage || '',
        featureImageAlt: frontmatter.featureImageAlt || frontmatter.title,
        content,
        tableOfContents: toc,
        relatedArticles: frontmatter.relatedArticles,
        seoKeywords: frontmatter.seoKeywords || [],
        examRelevant: frontmatter.examRelevant,
        featureImageIdea: frontmatter.featureImageIdea,
        impactLevel: frontmatter.impactLevel,
        indiaImpact: frontmatter.indiaImpact,
        globalImpact: frontmatter.globalImpact,
        timeSensitive: frontmatter.timeSensitive,
      };
    }).sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  } catch {
    return [];
  }
}

export function getArticle(categorySlug: string, articleSlug: string): Article | null {
  const categoryDir = getContentDir(categorySlug);
  const filePath = path.join(categoryDir, `${articleSlug}.mdx`);
  
  try {
    const source = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(source);
    const frontmatter = data as ArticleFrontmatter;
    const stats = readingTime(content);
    const toc = extractTableOfContents(content);
    
    return {
      slug: articleSlug,
      title: frontmatter.title,
      description: frontmatter.description,
      category: frontmatter.category,
      categorySlug: categorySlug,
      author: {
        name: frontmatter.author || 'FinanceHub Team',
        avatar: '/images/authors/default.jpg',
        role: 'Financial Analyst',
      },
      publishedAt: frontmatter.publishedAt,
      updatedAt: frontmatter.updatedAt || frontmatter.publishedAt,
      readingTime: Math.ceil(stats.minutes),
      tags: frontmatter.tags || [],
      featured: frontmatter.featured || false,
      featureImage: frontmatter.featureImage || '',
      featureImageAlt: frontmatter.featureImageAlt || frontmatter.title,
      content,
      tableOfContents: toc,
      relatedArticles: frontmatter.relatedArticles,
      seoKeywords: frontmatter.seoKeywords || [],
      examRelevant: frontmatter.examRelevant,
      featureImageIdea: frontmatter.featureImageIdea,
      impactLevel: frontmatter.impactLevel,
      indiaImpact: frontmatter.indiaImpact,
      globalImpact: frontmatter.globalImpact,
      timeSensitive: frontmatter.timeSensitive,
    };
  } catch {
    return null;
  }
}

export function getAllArticles(): Article[] {
  const categories = getAllCategories();
  const allArticles: Article[] = [];
  
  categories.forEach((category) => {
    const articles = getArticlesByCategory(category);
    allArticles.push(...articles);
  });
  
  return allArticles.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getFeaturedArticles(limit: number = 5): Article[] {
  const allArticles = getAllArticles();
  return allArticles.filter((a) => a.featured).slice(0, limit);
}

export function getLatestArticles(limit: number = 10): Article[] {
  return getAllArticles().slice(0, limit);
}

export function getRelatedArticles(currentSlug: string, tags: string[], limit: number = 3): Article[] {
  const allArticles = getAllArticles();
  
  return allArticles
    .filter((article) => article.slug !== currentSlug)
    .map((article) => {
      const matchingTags = article.tags.filter((tag) => tags.includes(tag));
      return { article, score: matchingTags.length };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.article);
}

function extractTableOfContents(content: string): TableOfContentsItem[] {
  const headingRegex = /^#{2,3}\s+(.+)$/gm;
  const toc: TableOfContentsItem[] = [];
  let currentH2: TableOfContentsItem | null = null;
  
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[0].match(/^#+/)?.[0].length || 2;
    const title = match[1].trim();
    const id = slugify(title);
    
    if (level === 2) {
      currentH2 = { id, title, level, children: [] };
      toc.push(currentH2);
    } else if (level === 3 && currentH2) {
      currentH2.children?.push({ id, title, level });
    }
  }
  
  return toc;
}

export function searchArticles(query: string): Article[] {
  const allArticles = getAllArticles();
  const lowerQuery = query.toLowerCase();
  
  return allArticles.filter((article) => {
    return (
      article.title.toLowerCase().includes(lowerQuery) ||
      article.description.toLowerCase().includes(lowerQuery) ||
      article.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)) ||
      article.content.toLowerCase().includes(lowerQuery)
    );
  });
}
