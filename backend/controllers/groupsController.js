const Group = require('../models/groupModel')
const mongoose = require('mongoose')


//GETALL group by membership STILL NEED TO FIGURE OUT HOW TO CHECK FOR MEMBERSHIP
const getGroupsMember = async (req, res) => {}

//GETALL group by owner STILL NEED TO FIGURE OUT HOW TO CHECK FOR owner
const getGroupsOwner = async (req, res) => {
    const ownerID =  req.ownerID

    const groups = await Group.find({ownerID})
    res.status(200).json(groups)
}

//GET one group
const getGroup = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no group with that id'})
    }

    const group= await Group.findById(id)

    if(!group){
        return res.status(404).json({error: 'no such Group'})
    }
    res.status(200).json(group)
}

//POST new group STILL NEEDS TO ASSIGN OWNER
const postGroup = async (req, res) => {
    const {title, description}= req.body

    if(!title){
        return res.status(400).json({error: 'missing required title'})
    }

    try{
        const ownerID = req.ownerID
        const group = await group.create({title, description, ownerID})
        res.status(200).json(group)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

//DELETE specific group
const deleteGroup = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'group not found'})
    }


    const group = await group.findOneAndDelete({_id: id})

    if(!group){
        return res.status(404).json({error: 'somethings wrong and group was not created'})
    }else{
        return res.status(200).json(group)
    }
    
}

//UPDATE group
const updateGroup = async (req, res) => {
    const{id}= req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'no group like that exists'})
    }

    const group = await group.findOneAndUpdate({_id:id},{...req.body})

    if(!group){
        return res.status(400).json({error: 'Something went wrong and group does not exist'})
    }else{
        return res.status(200).json(group)
    }
}



module.exports = {
    getGroupsMember,
    getGroupsOwner,
    getGroup,
    postGroup,
    deleteGroup,
    updateGroup
}