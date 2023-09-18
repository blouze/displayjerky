import { readable } from 'svelte/store';

const { subscribe } = readable([
  // { label: 'games', href: '/games' },
  { label: 'lab/gallery', href: '/lab' },
  { label: 'blog', href: '/blog' },
  { label: 'contact', href: '/contact' }
])

export const links = {
  subscribe
}