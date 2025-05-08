import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  
  return rss({
    title: 'My Astro Blog',
    description: 'A blog built with Astro sharing insights about technology, programming, and web development',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/posts/${post.id}/`,
      // Optional: Add categories/tags if your blog posts have them
      // categories: post.data.tags || [],
    })),
  });
}