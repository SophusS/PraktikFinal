const express  = require('express')
//const { route } = require('./groups')
//const { updateGroup } = require('../controllers/eventController')

const {
    getGroups,
    getGroup,
    postGroup,
    deleteGroup,
    updateGroup
}= require ('../controllers/groupsController')

const router = express.Router();

//GET groups by membership need to figure out how to check for membership

//GET a single group
route.get('/:id', getGroup)

//POST a new group
route.post('/', postGroup)

//DELETE a group
route.delete('/:id', deleteGroup)

//UPDATE a group
route.patch('/:id', updateGroup)

module.exports = router