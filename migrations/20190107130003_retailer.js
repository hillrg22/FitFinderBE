
exports.up = function(knex, Promise) {
  return knex.schema.createTable('retailer', function (table){
  table.increments('id')
  table.string('name')
  table.string('url')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('retailer')
};
