const { ResponseTemplate } = require('../helper/resp.helper')
const Joi = require('joi')

function CheckUser(req, res, next) {
    const schema = Joi.object({
        Nama: Joi.string().max(100).required(),
        email: Joi.string().email().required(),
        password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9!@#$%^&*()]{8,30}$')).required(),
        address: Joi.string().required()
    })

    const { error } = schema.validate(req.body)
    if (error) {
        let respons = ResponseTemplate(null, 'invalid request', error.details[0].message, 400)
        res.status(400).json(respons)
        return
    }
    next()
}

const isAdmin = (req, res, next) => {
    const userType = req.headers['user-type'];
    if (userType === 'admin') {
      next();
    } else {
      res.status(403).json({ success: false, message: 'Access denied. Admin only.' });
      return
    }
  }

module.exports = {
    CheckUser,
    isAdmin,
}