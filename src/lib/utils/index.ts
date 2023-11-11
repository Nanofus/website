export const fetchMarkdownPosts = async () => {
  const allPostFiles = import.meta.glob('/src/routes/posts/*.md');
  const iterablePostFiles = Object.entries(allPostFiles);

  return await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata }: any = await resolver();
      const postPath = path.slice(11, -3);

      return {
        meta: metadata,
        path: postPath
      };
    })
  );
};
