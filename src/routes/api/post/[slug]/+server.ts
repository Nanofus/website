import type {RequestHandler} from '@sveltejs/kit';
import {contentToPost} from "$lib/utils";
import {json} from "@sveltejs/kit";

export const GET: RequestHandler = async ({params}) => {
  return json(await contentToPost((await import(`../../../posts/${params.slug}.md?raw`)).default));
};
