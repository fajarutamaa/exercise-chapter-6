const router = require('express').Router()
const storage = require('../libs/multer')
const { GenerateQr, MediaImage } = require('../controller/media.controller')

router.post('/image', storage.image.single('image'), MediaImage)
router.post('/qr-generate', GenerateQr)

module.exports = router