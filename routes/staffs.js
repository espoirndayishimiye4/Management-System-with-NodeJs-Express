const express = require('express')
const app = express()
const routes = express.Router()

const  staffs = require('../controllers/staffs')

 routes.route('/:id')
    .get(staffs.getOneStaff)

routes.route('/')
    .get(staffs.getAllStaffs)
    .post(staffs.createStaff)
    .patch(staffs.updateStaff)
    .delete(staffs.deleteStaff)

module.exports = routes