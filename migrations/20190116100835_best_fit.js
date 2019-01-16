
exports.up = function(knex, Promise) {
  return knex.schema.createTable('best_fit', function (table){
  table.increments('id')
  table.integer('users_id').references('users.id').unsigned().onDelete('cascade')
  table.integer('brand_size_id').references('brand_size.id').unsigned().onDelete('cascade')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('best_fit')
};
