
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('brand').del()
    .then(function () {
      // Inserts seed entries
      return knex('brand').insert([
        {
          id: 1,
          name: 'Nike'
        },
        {
          id: 2,
          name: 'Lucky Brand'
        },
        {
          id: 3,
          name: 'Old Navy'
        },
        {
          id: 4,
          name: 'Patagonia'
        }
      ]);
    });
};
