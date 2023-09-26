export const load = async ({ fetch }) => {
  const posts = await (await fetch(`/api/posts`)).json();
  const sketches = await (await fetch(`/api/sketches`)).json();

  return {
    latestPost: posts[0],
    latestSketch: sketches[0]
  };
};
