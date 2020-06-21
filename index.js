
const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())
app.use(express.static('build'))

var morgan = require('morgan')
//morgan.token('postData', (req, res) => { return req.body[''] })
morgan.token('type', function (req, res) { return JSON.stringify(req.body)})
app.use(express.json())
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :type'))


var persons =
[
    { 
      name: "Arto Hellas", 
      number: "040-123456",
      id: 1
    },
    { 
      name: "Ada Lovelace", 
      number: "39-44-5323523",
      id: 2
    },
    { 
      name: "Dan Abramov", 
      number: "12-43-234345",
      id: 3
    },
    { 
      name: "Mary Poppendieck", 
      number: "39-23-6423122",
      id: 4
    }
]
app.get('/info', (req, res) => {
  res.send(
    `<p>PhoneBook has info for ${persons.length} people</p>
    <p>${new Date()}</p>`)
})

app.get('/api/persons', (req, res) => {
res.json(persons)
})

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
  
}) 
app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter(person => person.id !== id)

  res.status(204).end()
})
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
  const person = {
    name : body.name,
    number : body.number,
    id : Math.floor(Math.random() * Math.floor(5000))
  }
  persons = persons.concat(person)
  res.json(person)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


