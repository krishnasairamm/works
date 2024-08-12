/* main purpose - to write api 
api definition is in user.controllers */
const express = require('express')
const router = express.Router()
/* express and router methods are used for redirecting */
const userController = require('../controllers/user.controllers');
/* .. = previous folder */
// Retrieve all users
router.get('/', userController.findAll);
// Create a new user
router.post('/', userController.create);
// Retrieve a single user with id
router.get('/:id', userController.findOne);
// Update a user with id
router.put('/:id', userController.update);
// Delete a user with id
router.delete('/:id', userController.delete);
module.exports = router