
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('clothing_article').del()
    .then(function () {
      // Inserts seed entries
      return knex('clothing_article').insert([
        {
          id: 1,
          name: 'Mens Breathe Hyper Dry Training Top',
          brand_id: 1,
          clothing_type: "Shirt",
          img_url:'https://slimages.macysassets.com/is/image/MCY/products/2/optimized/10326792_fpx.tif?op_sharpen=1&wid=1230&hei=1500&fit=fit,1&$filterxlrg$',
          sex: 'male'
        },
        {
          id: 2,
          name: 'Saturday Stretch Lightweight Flannel',
          brand_id: 2,
          clothing_type: "Shirt",
          img_url: 'https://s7d9.scene7.com/is/image/LuckyBrandJeans/7M43497_340_1?$hi-res$',
          sex: 'male'
        },
        {
          id: 3,
          name: 'Venice Burnout Henley',
          brand_id: 2,
          clothing_type: "Shirt",
          img_url: 'https://s7d9.scene7.com/is/image/LuckyBrandJeans/7M62435_400_1?$hi-res$',
          sex: 'male'
        },
        {
          id: 4,
          name: 'Mateo Western Shirt',
          brand_id: 2,
          clothing_type: "Shirt",
          img_url: 'https://s7d9.scene7.com/is/image/LuckyBrandJeans/7MD41472_460_1?$hi-res$',
          sex: 'male'
        },
        {
          id: 5,
          name: '410 Athletic Slim Jean',
          brand_id: 2,
          clothing_type: "Pants",
          img_url: 'https://s7d9.scene7.com/is/image/LuckyBrandJeans/7MD10316_420_1?$hi-res$',
          sex: 'male'
        },
      ]);
    });
};
