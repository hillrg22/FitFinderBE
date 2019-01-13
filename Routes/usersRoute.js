const express = require('express')
const router = express.Router()
const knex = require('../db/connection.js')


router.get('/', (req,res,next) => {
  knex('users')
    .then(users =>{
      res.json({users:users})
    })
})


router.get('/:id', (req,res,next) =>{
  const id = req.params.id
  knex('users')
  .where('id',id)
  .then((user) =>{
    if(!user.length){
      next()
    }
    else{
    res.json({user: user[0]})
    }
  })
})


router.get('/:id/favorites', (req,res,next) =>{
  const id = req.params.id
  knex('users')
  .select('users.id AS user_id', 'favorites.id AS favorites_id', 'username', 'clothing_article.name', 'clothing_article.brand_id', 'clothing_article.img_url').from('users')
  .where('users.id', id)
  .innerJoin('favorites', 'favorites.users_id', 'users.id')
  .innerJoin('clothing_article', 'favorites.clothing_article_id', 'clothing_article.id')
  .then(favorite => {
    res.json({ favorite: favorite})
  })
})


router.post('/', (req,res,next) =>{
  // const body = req.body
  knex('users')
    .insert(req.body)
    .returning('*')
    .then((user) =>{
      console.log(user)
      res.json({user: user})
    })
})
router.put('/:id', (req,res,next) => {
  const id = req.params.id
  const body = req.body

  knex('users')
    .where('id', id)
    .update(body)
    .returning('*')
    .then(updatedUser =>{
      res.json({user: updatedUser[0]})
    })
})

router.delete('/:id', (req,res,next) => {
  const id = req.params.id
  knex('users')
  .where('id', id)
  .del()
  .returning('*')
  .then(deletedUser => {
    res.json({user:deletedUser[0]})
  })
})




module.exports = router
