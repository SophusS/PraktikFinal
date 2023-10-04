const mongoose = require('mongoose');

const Schema  = mongoose.Schema;

const groupSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: false
    },
    title:{
        type: String, required: false, unique: false
    },
    ownerID:{
        type: String, required: true
    },
    //not sure how to do members so this might be wrong
    members: {
        type: [user], unique: true
    }
    //need location 
})