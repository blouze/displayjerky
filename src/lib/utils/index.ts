export const fetchPosts = async () => {
  const allPostFiles = import.meta.glob('/src/content/blog/*.md');
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const postPath = path.slice(12, -3);

      return {
        meta: metadata,
        path: postPath
      };
    })
  );

  return allPosts;
};

export const fetchSketches = async () => {
  const allSketchesFiles = import.meta.glob('/src/content/lab/*.md');
  const iterableSketchesFiles = Object.entries(allSketchesFiles);

  const allSketches = await Promise.all(
    iterableSketchesFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      const sketchPath = path.slice(12, -3);

      return {
        meta: metadata,
        path: sketchPath
      };
    })
  );

  return allSketches;
};
