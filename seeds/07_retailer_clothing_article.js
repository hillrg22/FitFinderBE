
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('retailer_clothing_article').del()
    .then(function () {
      // Inserts seed entries
      return knex('retailer_clothing_article').insert([
        {
          id: 1,
          clothing_article_id: 1,
          retailer_id: 5
        },
        {
          id: 2,
          clothing_article_id: 2,
          retailer_id: 2
        },
        {
          id: 3,
          clothing_article_id: 3,
          retailer_id: 2
        },
        {
          id: 4,
          clothing_article_id: 4,
          retailer_id: 2
        },
        {
          id: 5,
          clothing_article_id: 5,
          retailer_id: 2
        },
        {
          id: 6,
          clothing_article_id: 1,
          retailer_id: 1
        },
      ]);
    });
};
