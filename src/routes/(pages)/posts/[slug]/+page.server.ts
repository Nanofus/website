import type { Load } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { fetchMarkdownPost } from '$lib/utils';

export const load: Load = async ({ params }) => {
  try {
    const post = await fetchMarkdownPost(params.slug as string);
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
