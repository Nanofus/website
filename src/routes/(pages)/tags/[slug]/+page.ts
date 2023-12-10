import type { Load } from '@sveltejs/kit';

export const prerender = true;

export const load: Load = async ({ fetch, params }) => {
  const response = await fetch(`/api/tags/${params.slug}`);
  const posts = await response.json();

  return {
    posts,
    slug: params.slug as string
  };
};
