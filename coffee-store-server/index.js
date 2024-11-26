const express = require('express');
const Coffees = require('./Coffees.json');
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World! Do You Know Me')
})

app.get('/coffees', (req, res) => {
    res.send(Coffees)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})