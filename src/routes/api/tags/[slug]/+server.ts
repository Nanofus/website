import {fetchMarkdownPostsByTag} from '$lib/utils';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({params}) => {
  return json(await fetchMarkdownPostsByTag(params.slug as string));
};
