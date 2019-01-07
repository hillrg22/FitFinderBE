
exports.up = function(knex, Promise) {
  return knex.schema.createTable('clothing_type', function (table){
  table.increments('id')
  table.integer('clothing_article_id').references('clothing_article.id').unsigned().onDelete('cascade')
  table.integer('retailer_id').references('retailer.id').unsigned().onDelete('cascade')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('retailer_clothing_article')
};
