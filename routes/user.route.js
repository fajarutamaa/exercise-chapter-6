const router = require('express').Router()
const { CheckUser } = require('../middleware/middleware')
const { CreateUser } = require('../controller/user.controller')

router.post('/',CheckUser, CreateUser)

module.exports = router