const express = require('express')
const path = require('path')

const studentManagerRouter = express.Router()

const studentManagerListCtrl = require(path.join(__dirname,"../controllers/studentManagerListCtrl.js"))

studentManagerRouter.get("/list",studentManagerListCtrl.getStudentListPage)



module.exports = studentManagerRouter