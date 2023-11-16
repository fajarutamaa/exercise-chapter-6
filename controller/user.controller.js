const { ResponseTemplate } = require('../helper/resp.helper')
const { HashPassword } = require('../helper/pass.helper')
const { PrismaClient } = require('@prisma/client')
const { MediaImage } = require('./media.controller')

const prisma = new PrismaClient()

async function CreateUser(req, res) {

    const { Nama, password, email, address } = req.body
    const hashPass = await HashPassword(password)

    try {
        await prisma.users.create({
            data: {
                Nama,
                password: hashPass,
                email,
                address,
            }
        })
        let response = ResponseTemplate(null, 'created user success', null, 200)
        res.status(200).json(response)
        return

    } catch (error) {
        let response = ResponseTemplate(null, 'internal server error', error, 500)
        res.status(500).json(response)
        return
    }
}

async function UpdateAvatar(req, res) {

    const { id } = req.params
    const imageUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`

    try {
        await prisma.users.update({
            data: {
                profile_picture: MediaImage(imageUrl)
            },
            where: {
                id
            }
        })
    } catch (error) {
        let response = ResponseTemplate(null, 'internal server error', error, 500)
        res.status(500).json(response)
        return
    }
}






module.exports = {
    CreateUser,
    UpdateAvatar,
}
