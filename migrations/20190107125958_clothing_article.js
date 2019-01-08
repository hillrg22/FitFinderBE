
exports.up = function(knex, Promise) {
  return knex.schema.createTable('clothing_article', function (table){
    table.increments('id')
    table.string('name')
    table.integer('brand_id')
    table.integer('size_id').references('size.id').unsigned().onDelete('cascade')
    table.integer('item_type_id').references('clothing_type.id').unsigned().onDelete('cascade')
    table.integer('favorited_by').references('users.id').unsigned().onDelete('cascade')
    table.string('image_url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('clothing_article')
};
