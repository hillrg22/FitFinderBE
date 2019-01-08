
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('retailer').del()
    .then(function () {
      // Inserts seed entries
      return knex('retailer').insert([
        {id: 1,
        name: 'Nike',
        url: 'www.nike.com'
        },
        {id: 2,
        name: 'Lucky Brand',
        url: 'www.luckybrand.com'
        },
        {id: 3,
        name: 'Old Navy',
        url: 'www.oldnavy.com'
        },
        {id: 4,
        name: 'Amazon',
        url: 'www.amazon.com'
        },
        {id: 5,
        name: 'Macys',
        url: 'www.macys.com'
        }
      ]);
    });
};
