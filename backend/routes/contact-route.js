const express = require('express')
const {check} = require('express-validator')
const router = express.Router()

const contactController = require('../controllers/contact-controller')

router.post('/contact', 
[
    check('email').isEmail().normalizeEmail().withMessage('Must have a valid email address'),
    check('message').isLength({min: 30}).withMessage('The message must be longer than 30 characters')
],
contactController.contactUs)

module.exports = router