const Event = require('../models/eventModel')
const mongoose = require('mongoose')

//GET all events
const getEvents = async (req, res) => {
    const user_id = req.user._id

    const events = await Event.find({user_id}).sort({createdAt: -1}) //sort by newest first. .find(user_id) sorts events so users only see their own events

    res.status(200).json(events)
}

//GET one Event
const getEvent = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Event not found'})
    }

    const event = await Event.findById(id)

    if(!event) {
        return res.status(404).json({error: 'Event not found'})
    }

    res.status(200).json(event)
}

// create/POST a new event
const createEvent = async (req, res) => {
    const {title, description, date} = req.body

    let emptyFields = []

    if(!title) {
        emptyFields.push('title')
    }
    if(!description) {
        emptyFields.push('description')
    }

    if(emptyFields.length > 0) {
        return res.status(400).json({error: `Missing required fields: ${emptyFields.join(', ')}`})
    }
    
    //add document to database
    try {
      const user_id = req.user._id
      const event = await Event.create({title, description, date, user_id})
      res.status(200).json(event)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
}

// DELETE a specific Event
const deleteEvent = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Event not found'})
    }

    //_id is the id of the document in the database
    const event = await Event.findOneAndDelete({_id: id})

    if(!event) {
        return res.status(404).json({error: 'Event not found'})
    }

    res.status(200).json(event)
}

// UPDATE a specific Event
const updateEvent = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({error: 'No such event'})
    }
  
    const event = await Event.findOneAndUpdate({_id: id}, {
      ...req.body
    })
  
    if (!event) {
      return res.status(400).json({error: 'No such event'})
    }
  
    res.status(200).json(event)
}

module.exports = {
    createEvent,
    getEvent,
    getEvents,
    deleteEvent,
    updateEvent
}