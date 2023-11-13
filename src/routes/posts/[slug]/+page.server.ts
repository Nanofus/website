import { error } from '@sveltejs/kit';
import type { Load } from '@sveltejs/kit';
import {contentToPost} from "$lib/utils";

export const load: Load = async ({ params }) => {
  try {
    const post = await contentToPost((await import(`../${params.slug}.md?raw`)).default);
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
