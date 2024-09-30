export async function up(knex) {
  return knex.schema.createTable('projects', (table) => {
    table.increments('id')
    table.string('name')
    table.string('logo')
    table.string('description')
    table.string('link')
  })
}

export async function down(knex) {
  return knex.schema.dropTable('projects')
}
