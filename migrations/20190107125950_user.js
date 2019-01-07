
exports.up = function(knex, Promise) {
  return knex.schema.createTable('clothing_article', function (table){
    table.increments('id')
    table.string('first_name')
    table.string('last_name')
    table.string('username')
    table.date('dob')
    table.integer('height_in')
    table.decimal('chest_in', 3, 1)
    table.decimal('waist_in', 3, 1)
    table.decimal('inseam_in', 3, 1)
    table.decimal('shoe_size_cm', 3, 1)
    table.string('prof_img_url')
  })
};

exports.down = function(knex, Promise) {

};
