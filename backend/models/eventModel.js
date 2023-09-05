const mongoose = require('mongoose')

//function that creates a new schema
const Schema = mongoose.Schema 

const eventSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: false
    }
}, {timestamps: true});

module.exports = mongoose.model('Event', eventSchema)