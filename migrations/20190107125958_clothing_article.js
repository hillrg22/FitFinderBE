
exports.up = function(knex, Promise) {
  return knex.schema.createTable('clothing_article', function (table){
    table.increments('id')
    table.string('name')
    table.integer('brand_id').references('brand.id').unsigned().onDelete('cascade')
    table.string('clothing_type')
    table.string('img_url')
    table.string('sex')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('clothing_article')
};
