const qr = require('node-qr-image')

//for single image
function MediaImage(req, res) {
    const imageUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    
    return res.status(200).json({
        data: { image_url: imageUrl },
        message: 'success',
        status: 200,
        error: null,
    })
}

function GenerateQr(req, res) {
    const message = req.query.message

    try {
        var pngString = qr.image(message, { type: 'png' })
        pngString.pipe(require('fs').createWriteStream(`${message.toLowerCase()}.png`))

        return res.status(200).json({
            data: pngString,
            message: 'generate success',
            status: 200,
            error: null,
        })

    } catch (error) {
        res.status(500).json({
            data: null,
            message: 'internal server error',
            status: 500,
            error: error.message
        })
    }

}



module.exports = {
    MediaImage,
    GenerateQr
}