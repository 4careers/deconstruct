import { getSavedContent } from '../lib/data';

export default function sitemap() {
  const articles = getSavedContent();
  const baseUrl = 'https://thedeconstruct.vercel.app';

  // Core static pages
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/store`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];

  // Dynamic blog articles
  const articleRoutes = articles.map((article) => ({
    url: `${baseUrl}/blog/${article.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...routes, ...articleRoutes];
}
