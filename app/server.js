'use strict'

const express = require('express')
const path = require('path')

let app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// ******* add Component-Express ******* //

app.use(require('component').middleware())

// ******* Thats all ******************* //

app.get('/', (req, res) => {
  const user = {
    firstName: 'Anton',
    lastName: 'Kulakov'
  }

  const comment = {
    id: 1,
    text: 'Comment text example',
    user
  }

  const meta = {
    title: 'Home page'
  }

  res.render('index', {
    user,
    meta,
    comment
  })
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
