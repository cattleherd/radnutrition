const express = require('express')
const router = express.Router();
const user = require('../controllers/users.js')
const passport = require('passport')

router.post("/register", user.createUser)

module.exports = router;


