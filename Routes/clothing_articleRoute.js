const express = require('express')
const router = express.Router()
const knex = require('../db/connection.js')

router.get('/', (req,res,next) =>{
  knex('clothing_article')
    .then(articles =>{
      res.json({articles:articles})
    })
  })


  router.get('/:id', (req,res,next) =>{
    let id = req.params.id
    knex('clothing_article')
      .where('clothing_article.id', id)
      .select(
        'clothing_article.id AS clothing_article_id',
        'clothing_article.name AS article_name',
        'clothing_article.img_url',
        'brand.name AS brand_name',
      )
      .innerJoin('brand', 'clothing_article.brand_id', 'brand.id' )
      .then(article =>{
        res.json({article:article})
      })
    })





module.exports = router
