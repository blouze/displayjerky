/** @type {import('./$types').PageLoad} */

export async function load({ params: { slug } }) {
  // const post = await import(`$content/blog/${slug}`)
  const post = await import(`../${slug}.md`)

  const { title, description, date } = post.metadata
  const content = post.default

  return { title, description, date, content };
}