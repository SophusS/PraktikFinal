const express = require('express')

const {
    createEvent,
    getEvent,
    getEvents,
    deleteEvent,
    updateEvent
} = require('../controllers/eventController');

const router = express.Router()

//GET all events
router.get('/', getEvents);

//GET single event
router.get('/:id', getEvent);

//POST a new event
router.post('/', createEvent);

//DELETE an event
router.delete('/:id', deleteEvent);

//UPDATE/PATCH an event
router.patch('/:id', updateEvent);


module.exports = router