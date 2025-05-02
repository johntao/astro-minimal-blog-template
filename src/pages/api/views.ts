import type { APIRoute } from "astro";
import { db, ViewCount, sql, eq } from "astro:db";

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const params = new URLSearchParams(url.search);

  const slug = params.get("slug");

  if (!slug) {
    return new Response("Not found", { status: 404 });
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