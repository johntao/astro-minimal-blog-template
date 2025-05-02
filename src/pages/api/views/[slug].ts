// filepath: /Users/taozongyou/Desktop/flex/astro-study/src/pages/api/views/[slug].ts
import type { APIRoute } from "astro";
import { db, ViewCount, sql, eq } from "astro:db";

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  const slug = params.slug;

  if (!slug) {
    return new Response(
      JSON.stringify({ error: "Slug is required" }),
      { status: 400, headers: { "content-type": "application/json" } }
    );
  }

  let item;
  try {
    await db
      .select({
        count: ViewCount.count,
      })
      .from(ViewCount)
      .where(eq(ViewCount.slug, slug));

    item = await db
      .insert(ViewCount)
      .values({
        slug: slug,
        count: 1,
      })
      .onConflictDoUpdate({
        target: ViewCount.slug,
        set: {
          count: sql`count + 1`,
        },
      })
      .returning({
        slug: ViewCount.slug,
        count: ViewCount.count,
      })
      .then((res) => res[0]);
  } catch (error) {
    item = { slug, count: 1 };
  }

  return new Response(
    JSON.stringify({
      ...item,
      time: Date.now(),
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
        "cache-control": "no-store, max-age=0",
      },
    }
  );
};