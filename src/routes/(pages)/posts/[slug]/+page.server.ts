import type { Load } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { fetchMarkdownPost } from '$lib/utils';

export const load: Load = async ({ params }) => {
  try {
    const post = await fetchMarkdownPost(params.slug as string);

    return {
      metadata: post.metadata,
      content: post.content,
    };
  } catch (e) {
    throw error(404, 'Not Found');
  }
};
