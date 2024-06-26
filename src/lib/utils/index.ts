import rehypeStringify from 'rehype-stringify';
import remarkFrontmatter from 'remark-frontmatter';
import { matter } from 'vfile-matter';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkSmartypants from 'remark-smartypants';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeExternalLinks from 'rehype-external-links';
import rehypeSlug from 'rehype-slug';
// @ts-expect-error - no working types
import remarkPrism from 'remark-prism';
import { unified } from 'unified';

export type Post = {
  metadata: any;
  content?: string;
  path?: string;
};

export const fetchMarkdownPosts = async (): Promise<Post[]> => {
  const allPostFiles = import.meta.glob('/src/routes/posts/*.md', { query: '?raw', eager: true });
  const iterablePostFiles = Object.entries(allPostFiles);
  const posts = await Promise.all(
    iterablePostFiles.map(async ([filePath, content]) => {
      const metadata: any = (await contentToPost((content as any).default)).metadata;
      const path = filePath.slice(11, -3);

      return {
        metadata,
        path
      };
    })
  );
  return posts.sort((a, b) => +new Date(b.metadata.date) - +new Date(a.metadata.date));
};

export const fetchMarkdownPostsByTag = async (tag: string) => {
  const posts = await fetchMarkdownPosts();
  return posts.filter((post) => post.metadata.tags.includes(tag));
};

export const contentToPost = async (content: string): Promise<Post> => {
  const result = await unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(() => (tree, file) => matter(file))
    .use(remarkGfm)
    .use(remarkPrism)
    .use(remarkSmartypants, { quotes: false, backticks: false })
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeExternalLinks, { target: '_blank' })
    .use(rehypeAutolinkHeadings)
    .process(content);
  return {
    metadata: result.data.matter,
    content: result.value.toString()
  };
};
