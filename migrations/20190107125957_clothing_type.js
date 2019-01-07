
exports.up = function(knex, Promise) {
  return knex.schema.createTable('clothing_type', function (table){
  table.increments('id')
  table.string('type')
  })
}
;

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('clothing_type')
};
