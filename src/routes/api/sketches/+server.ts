import { fetchSketches } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
  const allSketches = await fetchSketches();

  const sortedSketches = allSketches.sort((a, b) => {
    return new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime();
  });

  return json(sortedSketches);
};