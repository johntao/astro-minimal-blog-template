import { column, defineDb, defineTable } from 'astro:db';

const ViewCount = defineTable({
  columns: {
    slug: column.text({ primaryKey: true }),
    count: column.number({ default: 1 }),
  }
})

// https://astro.build/db/config
export default defineDb({
  tables: { ViewCount }
});
