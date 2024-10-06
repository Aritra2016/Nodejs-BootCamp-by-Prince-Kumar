//we required express
const express = require('express')

//we import express
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)