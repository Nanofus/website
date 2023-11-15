import type { Load } from '@sveltejs/kit';
import {fetchMarkdownPosts} from "$lib/utils";

export const load: Load = async () => {
  const posts = await fetchMarkdownPosts();

  return {
    posts
  };
};
