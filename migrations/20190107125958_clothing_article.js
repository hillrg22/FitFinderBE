
exports.up = function(knex, Promise) {
  return knex.schema.createTable('clothing_article', function (table){
    table.increments('id')
    table.string('size_listed')
    table.decimal('chest_in', 3, 1)
    table.decimal('waist_in', 3, 1)
    table.decimal('inseam_in', 3, 1)
    table.decimal('shoe_size_cm', 3, 1)
    table.integer('item_type').references('clothing_type.id').unsigned().onDelete('cascade')
    table.integer('favorited_by').references('user.id').unsigned().onDelete('cascade')
    table.string('image_url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('clothing_article')
};
