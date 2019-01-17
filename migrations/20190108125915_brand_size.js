
exports.up = function(knex, Promise) {
  return knex.schema.createTable('brand_size', function (table){
  table.increments('id')
  table.string('brand')
  table.string('size')
  table.decimal('waist_in', 4, 2)
  table.decimal('inseam_in', 4, 2)
  table.decimal('neck_in',4,2)
  table.decimal('chest_in', 4, 2)
  table.decimal('shoe_size_cm', 4, 2)
  table.string('article_type')
  })
}
;

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('brand_size')
};
