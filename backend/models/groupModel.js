const mongoose = require('mongoose');

const Schema  = mongoose.Schema;

const groupSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: false
    },
    description:{
        type: String, required: true, unique: false
    },
    owner:{
        type: user, required: true
    },
    //not sure how to do members so this might be wrong
    members: [{
        type: user, unique: true
    }]
})