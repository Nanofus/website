import rehypeStringify from 'rehype-stringify';
import remarkFrontmatter from 'remark-frontmatter';
import {matter} from 'vfile-matter';
import remarkGfm from 'remark-gfm';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
// @ts-expect-error - no working types
import remarkPrism from 'remark-prism';
import {unified} from 'unified';

export const fetchMarkdownPosts = async () => {
  const allPostFiles = import.meta.glob('/src/routes/posts/*.md', {as: 'raw', eager: true});
  const iterablePostFiles = Object.entries(allPostFiles);
  
  return await Promise.all(
      iterablePostFiles.map(async ([filePath, content]) => {
        const metadata: any = (await contentToPost(content)).metadata;
        const path = filePath.slice(11, -3);

        return {
          metadata,
          path
        };
      })
  );
};

type Post = {
  metadata: any,
  content: string
}

export const contentToPost = async (content: string): Promise<Post> => {
  const result = await unified()
      .use(remarkParse)
      .use(remarkFrontmatter)
      .use(() => {
        return function (tree, file) {
          matter(file)
        }
      })
      .use(remarkGfm)
      .use(remarkPrism)
      .use(remarkRehype)
      .use(rehypeStringify)
      .process(content);
  return {
    metadata: result.data.matter,
    content: result.value.toString()
  }
}