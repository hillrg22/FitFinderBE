
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('clothing_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('clothing_type').insert([
        {id: 1,
        type: 't-shirt'
        },
        {id: 2,
        type: 'dress shirt'
        },
        {id: 3,
        type: 'pants'
        },
        {id: 4,
        type: 'shorts'
        },
        {id: 5,
        type: 'shoes'
        }
      ]);
    });
};
