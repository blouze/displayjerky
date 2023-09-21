export const load = async ({ fetch }) => {
  const response = await fetch(`/api/sketches`);
  const sketches = await response.json();

  return {
    sketches
  };
};
