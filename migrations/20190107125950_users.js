
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function (table){
    table.increments('id')
    table.string('first_name')
    table.string('last_name')
    table.string('username')
    table.date('dob')
    table.string('sex')
    table.integer('height_in')
    table.decimal('waist_in', 4, 2)
    table.decimal('inseam_in', 4, 2)
    table.decimal('neck_in',4,2)
    table.decimal('chest_in', 4, 2)
    table.decimal('shoe_size_cm', 4, 2)
    table.string('prof_img_url')
  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('users')
};
