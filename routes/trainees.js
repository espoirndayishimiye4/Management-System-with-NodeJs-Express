const express = require('express')
const app = express()
const routes = express.Router()

const  trainees = require('../controllers/trainees')
const time = require('../middleware/time')

 routes.route('/:id')
    .get(trainees.getOnetrainee)

routes.route('/')
    .get(trainees.getAlltrainees)
    .post(trainees.createtrainee)
    .put(trainees.updatetrainee)
    .delete(trainees.deletetrainee)

module.exports = routes