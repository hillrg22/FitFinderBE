
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('favorites').del()
    .then(function () {
      // Inserts seed entries
      return knex('favorites').insert([
        {
          id: 1,
          clothing_article_id: 1,
          users_id: 1
        },
        {
          id: 2,
          clothing_article_id: 3,
          users_id: 2
        },
        {
          id: 3,
          clothing_article_id: 4,
          users_id: 2
        },
        {
          id: 4,
          clothing_article_id: 2,
          users_id: 3
        },

      ]);
    });
};
