import fs from 'fs';
import path from 'path';

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
}

export function getSavedContent() {
  const dataPath = path.join(process.cwd(), 'src', 'lib', 'saved_content.json');
  
  if (!fs.existsSync(dataPath)) {
    return [];
  }

  const rawData = fs.readFileSync(dataPath, 'utf8');
  const data = JSON.parse(rawData);
  
  let articles = [];

  // Iterate over video IDs
  for (const videoId of Object.keys(data)) {
    const contentTypes = data[videoId];
    
    // Iterate over all keys in the video object
    for (const blogType of Object.keys(contentTypes)) {
      // Check if it's a blog entry
      if (blogType.startsWith('blog_')) {
        // STRICT PUBLISH FILTER: Only show this blog if it's in the published_blogs array
        if (!contentTypes.published_blogs || !contentTypes.published_blogs.includes(blogType)) {
          continue;
        }

        const blog = contentTypes[blogType];
          
        const imageUrl = blog.image_url ? `/${blog.image_url}` : '';
        const title = blog.title || "Untitled Article";
        const slug = slugify(title);

        articles.push({
          id: slug, // Ultra-clean SEO URL (Title only)
          videoId: videoId,
          videoUrl: `https://youtube.com/watch?v=${videoId}`,
          title: title,
          content: blog.content,
          // Generate a quick excerpt by stripping markdown and taking first 150 chars
          excerpt: blog.content.replace(/#|\*|_/g, '').substring(0, 150) + "...",
          imageUrl: imageUrl,
          date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
          // Extract category name dynamically (e.g. blog_deep_dive -> Deep Dive)
          category: blogType.replace('blog_', '').split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
        });
      }
    }
  }

  return articles;
}

export function getArticleById(id) {
  const articles = getSavedContent();
  return articles.find(a => a.id === id);
}

export async function getAllAffiliateProducts() {
  const articles = getSavedContent();
  const productsMap = new Map();
  
  // Regex to match [Product Title](https://www.amazon.com/s?k=...)
  // We specifically look for the tag=deconstruct-21 to ensure it's an affiliate link
  const linkRegex = /\[([^\]]+)\]\((https:\/\/www\.amazon\.com[^)]+tag=deconstruct-21[^)]*)\)/g;

  for (const article of articles) {
    if (!article.content) continue;
    
    let match;
    while ((match = linkRegex.exec(article.content)) !== null) {
      const rawTitle = match[1].trim();
      const url = match[2].trim();
      
      // Clean up the title (e.g. remove "by Author" or parentheses) to improve search accuracy
      const searchTitle = rawTitle.split(' by ')[0].split('(')[0].trim();
      
      if (!productsMap.has(searchTitle)) {
        productsMap.set(searchTitle, {
          title: rawTitle,
          searchTitle: searchTitle,
          url,
          sourceArticle: article,
          coverUrl: null
        });
      }
    }
  }

  // Fetch cover art from iTunes API in parallel (OpenLibrary is currently down)
  const products = Array.from(productsMap.values());
  
  await Promise.all(products.map(async (product) => {
    try {
      const response = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(product.searchTitle)}&media=ebook&limit=1`, {
        signal: AbortSignal.timeout(1500)
      });
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        const doc = data.results[0];
        if (doc.artworkUrl100) {
          // Replace 100x100 resolution with 600x600
          product.coverUrl = doc.artworkUrl100.replace('100x100bb', '600x600bb');
        }
      }
    } catch (e) {
      console.error(`Failed to fetch cover for ${product.title}`, e);
    }
  }));

  return products;
}
