
exports.up = function(knex, Promise) {
  return knex.schema.createTable('brand_size', function (table){
  table.increments('id')
  table.integer('brand_id').references('brand.id').unsigned().onDelete('cascade')
  table.integer('size_id').references('size.id').unsigned().onDelete('cascade')
  table.integer('chest_in')
  table.integer('waist_in')
  table.integer('inseam_in')
  table.integer('neck_in')
  table.integer('shoe_size_cm')
  table.integer('clothing_type_id').references('clothing_type.id').unsigned().onDelete('cascade')
  })
}
;

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('brand_size')
};
