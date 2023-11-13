import { fetchMarkdownPosts, type PostMeta } from '$lib/utils';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
  const allPosts: PostMeta[] = await fetchMarkdownPosts();

  const sortedPosts = allPosts.sort((a, b) => {
    return +new Date(b.metadata.date) - +new Date(a.metadata.date);
  });

  return json(sortedPosts);
};
