const express = require('express')
const router = express.Router()
const knex = require('../db/connection.js')


router.get('/', (req,res,next) => {
  knex('users')
    .then(users =>{
      res.json({users:users})
    })
})




module.exports = router
