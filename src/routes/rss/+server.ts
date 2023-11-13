import { fetchMarkdownPosts } from '$lib/utils';
import { config } from '$lib/config';
import type { RequestHandler } from '@sveltejs/kit';

export const prerender = true;

export const GET: RequestHandler = async () => {
  const allPosts = await fetchMarkdownPosts();
  const sortedPosts = allPosts.sort((a, b) => +new Date(b.metadata.date) - +new Date(a.metadata.date));

  const body = render(sortedPosts);
  const options = {
    headers: {
      'Cache-Control': 'max-age=0, s-maxage=3600',
      'Content-Type': 'application/xml'
    }
  };

  return new Response(body, options);
};

const render = (posts: any) => `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${config.siteTitle}</title>
      <description>${config.siteDescription}</description>
      <link>${config.siteURL}</link>
      <atom:link href="${config.siteURL}/rss.xml" rel="self" type="application/rss+xml"/>
      ${posts
        .map(
          (post: any) => `
      <item>
        <guid isPermaLink="true">${config.siteURL}${post.path}</guid>
        <title>${post.metadata.title}</title>
        <link>${config.siteURL}${post.path}</link>
        <description>${post.metadata.title}</description>
        <pubDate>${new Date(post.metadata.date).toUTCString()}</pubDate>
      </item>
      `
        )
        .join('')}
    </channel>
  </rss>
`;
