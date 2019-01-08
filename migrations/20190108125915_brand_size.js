
exports.up = function(knex, Promise) {
  return knex.schema.createTable('brand_size', function (table){
  table.increments('id')
  table.integer('brand_id').references('brand.id').unsigned().onDelete('cascade')
  table.integer('size_id').references('size.id').unsigned().onDelete('cascade')
  table.decimal('waist_in', 4, 2)
  table.decimal('inseam_in', 4, 2)
  table.decimal('neck_in',4,2)
  table.decimal('chest_in', 4, 2)
  table.decimal('shoe_size_cm', 4, 2)
  table.integer('clothing_type_id').references('clothing_type.id').unsigned().onDelete('cascade')
  })
}
;

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('brand_size')
};
