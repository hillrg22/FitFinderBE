
exports.up = function(knex, Promise) {
  return knex.schema.createTable('size', function (table){
  table.increments('id')
  table.string('size')
  })
}
;

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('size')
};
