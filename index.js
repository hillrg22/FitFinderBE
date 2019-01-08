const express = require('express')
const app = express()
const port =  process.env.PORT || 3000

const cors = require('cors')
const bodyParser = require('body-parser')
const knex = require('./db/connection')

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())






app.get('/', (req,res,next) =>{
  knex('clothing_article')
    .then(articles =>{
      res.json({articles:articles})
    })

})








app.use(notFound)

app.use(errorHandler)


function notFound(req, res, next) {
  res.status(404).send({ error: 'Not found!', status: 404, url: req.originalUrl })
}


function errorHandler(err, req, res, next) {
  console.error('ERROR', err)
  const stack = process.env.NODE_ENV !== 'production' ? err.stack : undefined
  res.status(500).send({ error: err.message, stack, url: req.originalUrl })
}



app.listen(port, () =>{
  console.log(`running on ${port}`)
})
