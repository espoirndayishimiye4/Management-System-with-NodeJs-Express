const express = require('express')
const app = express()
const routes = express.Router()

const  staffs = require('../controllers/staffs')
const time = require('../middleware/time')

 routes.route('/:id')
    .get(staffs.getOneStaff)

routes.route('/')
    .get(staffs.getAllStaffs)
    .post(staffs.createStaff)
    .put(staffs.updateStaff)
    .delete(staffs.deleteStaff)

module.exports = routes