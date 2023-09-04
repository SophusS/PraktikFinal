const express = require("express")

const {
    createEvent,
    getEvent,
    getEvents,
    deleteEvent,
    updateEvent
} = require('../controllers/eventController');

const router = express.Router()

//GET all events
router.get('/', (req, res) => {
    res.json({mssg: 'GET all events'})
})

//GET single event
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET a single event'})
})

//POST a new event
router.post('/', (req, res) => {
    res.json({mssg: 'POST an event'})
})

//DELETE an event
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE an event'})
})

//UPDATE/PATCH an event
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE/PATCH an event'})
})



module.exports = router