import { error } from '@sveltejs/kit';
import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ params }) => {
  try {
    const post = await import(`../${params.slug}.md`);
    const { title, date } = post.metadata;
    const content = post.default;

    return {
      content,
      title,
      date
    };
  } catch (e) {
    throw error(404, 'Not Found');
  }
};
