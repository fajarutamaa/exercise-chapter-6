const express = require('express')
const router = express.Router()
const userRoute = require('./user.route')
const authRoute = require('./auth.route')
const morgan = require('morgan')

router.use(morgan('dev'))

router.use('/users', userRoute)
router.use('/auth', authRoute)



module.exports = router