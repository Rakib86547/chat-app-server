const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController')

// router.put('/:email', userController.signUp);
router.post('/', userController.signUp);

module.exports = router;