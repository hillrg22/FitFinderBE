
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('brand_size').del()
    .then(function () {
      // Inserts seed entries
      return knex('brand_size').insert([
        {
          id: 1,
          brand_id: 1,
          size_id: 2,
          chest_in: 36.25,
          waist_in: 30.5,
          inseam_in: null,
          neck_in: null,
          shoe_size_cm: null,
          clothing_type_id: 1
        },
        {
          id: 2,
          brand_id: 1,
          size_id: 3,
          chest_in: 39.25,
          waist_in: 33.5,
          inseam_in: null,
          neck_in: null,
          shoe_size_cm: null,
          clothing_type_id: 1
        },
        {
          id: 3,
          brand_id: 1,
          size_id: 4,
          chest_in: 42.5,
          waist_in: 36.5,
          inseam_in: null,
          neck_in: null,
          shoe_size_cm: null,
          clothing_type_id: 1
        },
        {
          id: 4,
          brand_id: 1,
          size_id: 5,
          chest_in: 46.25,
          waist_in: 40.5,
          inseam_in: null,
          neck_in: null,
          shoe_size_cm: null,
          clothing_type_id: 1
        },
        {
          id: 5,
          brand_id: 1,
          size_id: 6,
          chest_in: 51,
          waist_in: 38.75,
          inseam_in: null,
          neck_in: null,
          shoe_size_cm: null,
          clothing_type_id: 1
        },
        {
          id: 6,
          brand_id: 2,
          size_id: 1,
          chest_in: 36,
          waist_in: null,
          inseam_in: null,
          neck_in: null,
          shoe_size_cm: null,
          clothing_type_id: 1
        },
        {
          id: 7,
          brand_id: 2,
          size_id: 2,
          chest_in: 38,
          waist_in: null,
          inseam_in: null,
          neck_in: null,
          shoe_size_cm: null,
          clothing_type_id: 1
        },
        {
          id: 8,
          brand_id: 2,
          size_id: 3,
          chest_in: 40,
          waist_in: null,
          inseam_in: null,
          neck_in: null,
          shoe_size_cm: null,
          clothing_type_id: 1
        },
        {
          id: 9,
          brand_id: 2,
          size_id: 4,
          chest_in: 42,
          waist_in: null,
          inseam_in: null,
          neck_in: null,
          shoe_size_cm: null,
          clothing_type_id: 1
        },
        {
          id: 10,
          brand_id: 2,
          size_id: 5,
          chest_in: 44,
          waist_in: null,
          inseam_in: null,
          neck_in: null,
          shoe_size_cm: null,
          clothing_type_id: 1
        },
        {
          id: 11,
          brand_id: 2,
          size_id: 6,
          chest_in: 46,
          waist_in: null,
          inseam_in: null,
          neck_in: null,
          shoe_size_cm: null,
          clothing_type_id: 1
        },
        {
          id: 12,
          brand_id: 2,
          size_id: 1,
          chest_in: 36,
          waist_in: null,
          inseam_in: null,
          neck_in: null,
          shoe_size_cm: null,
          clothing_type_id: 2
        },
        {
          id: 13,
          brand_id: 2,
          size_id: 2,
          chest_in: 38,
          waist_in: null,
          inseam_in: null,
          neck_in: null,
          shoe_size_cm: null,
          clothing_type_id: 2
        },
        {
          id: 14,
          brand_id: 2,
          size_id: 3,
          chest_in: 40,
          waist_in: null,
          inseam_in: null,
          neck_in: null,
          shoe_size_cm: null,
          clothing_type_id: 2
        },
        {
          id: 15,
          brand_id: 2,
          size_id: 4,
          chest_in: 42,
          waist_in: null,
          inseam_in: null,
          neck_in: null,
          shoe_size_cm: null,
          clothing_type_id: 2
        },
        {
          id: 16,
          brand_id: 2,
          size_id: 5,
          chest_in: 44,
          waist_in: null,
          inseam_in: null,
          neck_in: null,
          shoe_size_cm: null,
          clothing_type_id: 2
        },
        {
          id: 17,
          brand_id: 2,
          size_id: 6,
          chest_in: 46,
          waist_in: null,
          inseam_in: null,
          neck_in: null,
          shoe_size_cm: null,
          clothing_type_id: 2
        },
      ]);
    });
};
