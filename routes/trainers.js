const express = require('express')
const app = express()
const routes = express.Router()

const  trainers = require('../controllers/trainers')
const time = require('../middleware/time')

 routes.route('/:id')
    .get(trainers.getOnetrainer)

routes.route('/')
    .get(trainers.getAlltrainers)
    .post(trainers.createtrainer)
    .put(trainers.updatetrainer)
    .delete(trainers.deletetrainer)

module.exports = routes