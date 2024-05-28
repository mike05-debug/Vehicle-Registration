import { defineDb, defineTable, column } from 'astro:db';

const Keke = defineTable({
  columns: {
    color: column.text(),
    plateNumber: column.text(),
  }
})


export default defineDb({
  tables: {Keke},
});