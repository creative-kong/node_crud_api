const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')

const connect = require('./config/db')

const bookRoute = require('./routes/book.route')

dotenv.config({ path : './config/config.env' })

const app = express()

connect()

app.use(express.json())

if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use('/api/v1/book', bookRoute)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})

