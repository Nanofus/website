import type { Load } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';

export const prerender = true;

export const load: Load = async ({ fetch, params }) => {
  try {
    const response = await fetch(`/api/post/${params.slug as string}`);
    return await response.json();
  } catch (e) {
    error(404, 'Not Found');
  }
};
