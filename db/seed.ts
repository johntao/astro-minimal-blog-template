import { db, ViewCount } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
	// TODO
	await db.insert(ViewCount).values([
		{ count: 0, slug: 'getting-started' },
		{ count: 100, slug: 'using-mdx' },
	])
}
