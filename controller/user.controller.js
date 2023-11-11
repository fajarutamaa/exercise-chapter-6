const { ResponseTemplate } = require('../helper/resp.helper')
const { HashPassword } = require('../helper/pass.helper')
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function CreateUser(req, res) {

    const { Nama, password, email, address } = req.body
    const hashPass = await HashPassword(password)

    try {
        const user = await prisma.users.create({
            data: {
                Nama,
                password : hashPass,
                email,
                address, 
            }
        })
        let response = ResponseTemplate(user, 'created user success', null, 200)
        res.status(200).json(response)
        return

    } catch (error) {
        let response = ResponseTemplate(null, 'internal server error', error, 500)
        res.status(500).json(response)
        return
    }
}

module.exports = {
    CreateUser,
}
