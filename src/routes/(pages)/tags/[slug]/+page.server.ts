import type { Load } from '@sveltejs/kit';
import {fetchMarkdownPostsByTag} from "$lib/utils";

export const load: Load = async ({ params }) => {
  const posts = await fetchMarkdownPostsByTag(params.slug as string);

  return {
    posts,
    slug: params.slug as string
  };
};
