const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const validator = require('validator');

const Schema  = mongoose.Schema;

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
        unique: true
    },
    username:{
        type: String, 
        required: true, 
        unique: false
    },
    password:{
        type: String, 
        required: true
    }
})

userSchema.statics.login = async function(email, password){
    if(!email  || !password){
        throw Error('All fields must be filled')
    }
    const user = await this.findOne({email})

    if(!user){
        throw Error('Incorrect email')
    }

    const match = await bcrypt.compare(password, user.password)
    if(!match){
        throw Error ('Invalid login credentials')
    }

    return user;
}

userSchema.statics.signup = async function(email, username, password){
    //validate
    if(!email || !username || !password){
        throw Error('all fields must be filled')
    }
    if(!validator.isEmail(email)){
        throw Error ('email is invalid')
    }
    if (!validator.isStrongPassword(password)){
        throw Error ('Password too weak')
    }

    const emailExists = await this.findOne({email})

    if(emailExists) {
        throw Error('This email is already in use')
    }

    const usernameExists = await this.findOne({username})

    if(usernameExists) {
        throw Error("This username is already in use")
    }


    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)

    const user = await this.create({email, username, password: hash})

    return user
}

module.exports = mongoose.model('User', userSchema)