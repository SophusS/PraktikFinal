require('dotenv').config();

const express = require('express')
const mongoose = require('mongoose')
const eventRoutes = require('./routes/events')
const userRoutes = require('./routes/user')

//express app
const app = express()

//Middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/events', eventRoutes)
app.use('/api/user', userRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests
        app.listen(process.env.PORT, () => {
            console.log("connected to DB and listening on port", process.env.PORT)
        })
    })
    .catch(err => console.log('Error: ', err));