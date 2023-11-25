const express = require('express');
const router = express.Router();
const userController = require('../../controllers/userController')

router.put('/:email', userController.signUp);
// router.put('/signup/:email', userController.signUp);
// router.put('/login/:email', userController.login);
module.exports = router;