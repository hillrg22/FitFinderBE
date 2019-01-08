
exports.up = function(knex, Promise) {
  return knex.schema.createTable('favorites', function (table){
    table.increments('id')
    table.integer('clothing_article_id').references('clothing_article.id').unsigned().onDelete('cascade')
    table.integer('users_id').references('users.id').unsigned().onDelete('cascade')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('favorites')
};
