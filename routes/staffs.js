const express = require('express')
const app = express()
const routes = express.Router()

const staffsController = require('../controllers/staffs')

app.get('/',staffsController)

