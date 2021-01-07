const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const contactRoutes = require('./routes/contact-route')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/API', contactRoutes)

app.listen(3001, () => {
    console.log('Server is up and running!')
})