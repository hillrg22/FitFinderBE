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

router.post('/', (req,res,next) =>{
  // const body = req.body
  knex('student')
    .insert(req.body)
    .returning('*')
    .then((student) =>{
      console.log(student)
      res.json({student: student})
    })
})
router.put('/:id', (req,res,next) => {
  const id = req.params.id
  const body = req.body

  knex('student')
    .where('id', id)
    .update(body)
    .returning('*')
    .then(updatedStudent =>{
      res.json({beer: updatedStudent[0]})
    })
})

router.delete('/:id', (req,res,next) => {
  const id = req.params.id
  knex('student')
  .where('id', id)
  .del()
  .returning('*')
  .then(deletedStudent => {
    res.json({student:deletedStudent[0]})
  })
})




module.exports = router
