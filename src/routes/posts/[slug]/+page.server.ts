import { error } from '@sveltejs/kit';
import type { Load } from '@sveltejs/kit';
import { fetchMarkdownPost } from '$lib/utils';

export const load: Load = async ({ params }) => {
  try {
    if (!params.slug) throw error(404, 'Not Found');
    const post = await fetchMarkdownPost(params.slug);
    const { title, date } = post.metadata;
    const content = post.content;

    return {
      content,
      title,
      date
    };
  } catch (e) {
    throw error(404, 'Not Found');
  }
};
