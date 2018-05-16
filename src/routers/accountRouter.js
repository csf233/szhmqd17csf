const express = require('express')
const path = require('path')

const accountRouter = express.Router()

const accountController = require(path.join(__dirname,"../controllers/accountController"))

accountRouter.get("/login",accountController.getLoginPage)

accountRouter.get("/vcode",accountController.getVcodeImage)

accountRouter.get("/register",accountController.getRegisterPage)

accountRouter.post("/register",accountController.register)

accountRouter.post("/login",accountController.login)

module.exports = accountRouter
