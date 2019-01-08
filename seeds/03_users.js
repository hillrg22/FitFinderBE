
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          first_name: 'John',
          last_name: 'Smith',
          username: 'Jsmith',
          dob: '1985-01-02',
          height_in: 68,
          waist_in: 30,
          inseam_in: 29,
          neck_in: 15.5,
          chest_in: 38,
          shoe_size_cm: 26,
          prof_img_url: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=face-facial-hair-fine-looking-614810.jpg&fm=jpg'
        },
        {
          id: 2,
          first_name: 'Mike',
          last_name: 'Sullivan',
          username: 'Msullivan',
          dob: '1988-02-03',
          height_in: 72,
          waist_in: 31,
          inseam_in: 32,
          neck_in: 16.5,
          chest_in: 41,
          shoe_size_cm: 28.5,
          prof_img_url: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
          id: 3,
          first_name: 'Oscar',
          last_name: 'White',
          username: 'Owhite',
          dob: '1982-03-04',
          height_in: 74,
          waist_in: 33,
          inseam_in: 34,
          neck_in: 17,
          chest_in: 42,
          shoe_size_cm: 29,
          prof_img_url: 'https://images.pexels.com/photos/555790/pexels-photo-555790.png?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
      ]);
    });
};
