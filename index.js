
require('dotenv').config()
const express = require('express')
const app = express()
const Person = require('./models/person')

const cors = require('cors')
app.use(cors())
app.use(express.static('build'))

var morgan = require('morgan')
morgan.token('type', function (req, res) { return JSON.stringify(req.body)})
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :type'))

//info sivu
app.get('/info', (req, res) => {
  res.send(
    `<p>PhoneBook has info for ${Person.countDocuments({})} people</p>
    <p>${new Date()}</p>`)
})
//kaikkien henkilöiden datan hakeminen tietokannasta
app.get('/api/persons', (req, res) => {
  Person.find({}).then(persons => {
    res.json(persons)
  })
})
/*
app.get('/api/persons', (req, res) => {
res.json(persons)
})
*/
/*
app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  const person = persons.find(person => person.id === id)
  if (person)
  {
    res.json(person)
  }
  else
  {
    res.status(404).end()
  }
  
})*/
app.get('/api/persons/:id', (req, res, next) => {
  Person.findById(req.params.id)
  .then(person => {
    if(person){
      res.json(person)
    }
    else{
      res.status(404).end()
    }
  })
  .catch(error => next(error))
})
//yksittäisen henkilön poisto listalta
/*
app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)

  res.status(204).end()
})*/
app.delete('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(204).end()
    })
    .catch(error => next(error))
})

//henkilön lisäys
app.post('/api/persons', (req, res) => {
  const body = req.body

  if (!body.name) {
    return res.status(400).json({ 
      error: 'name missing' 
    })
  }
  if (!body.number) {
    return res.status(400).json({ 
      error: 'number missing' 
    })
  }
  const person = new Person({
    name : body.name,
    number : body.number,
    id : Math.floor(Math.random() * Math.floor(5000))  
  })
  person.save().then(savedPerson => {
    res.json(savedPerson)
  })
})
//henkilön numeron muutos
/*
app.put('/api/persons/:id', (req, res, next) => {
  Person.findByIdAndUpdate(req.params.id,{name : req.body.name, number: req.body.number})
    .then(result => {
      res.status(204).end()
    })
    .catch(error => next(error))
})*/
app.put('/api/persons/:id', (req, res, next) => {
  const body = req.body

  const person = {
    name: body.name,
    number: body.number,
    id :body.id,
  }

  Person.findByIdAndUpdate(req.params.id, person, { number: body.number })
    .then(updatedPerson => {
      res.json(updatedPerson)
    })
    .catch(error => next(error))
})

//virheellisten pyyntöjen käsittely
const errorHandler = (error, req, res, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' })
  }

  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


