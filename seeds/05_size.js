
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('size').del()
    .then(function () {
      // Inserts seed entries
      return knex('size').insert([
        {id: 1, size: 'extra small'},
        {id: 2, size: 'small'},
        {id: 3, size: 'medium'},
        {id: 4, size: 'large'},
        {id: 5, size: 'extra large'},
        {id: 6, size: 'extra extra large'}
      ]);
    });
};
