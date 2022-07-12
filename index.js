const express = require('express')

const staffsRoutes = require('./routes/staffs')
const time = require('./middleware/time')
const app = express()
app.use(express.json())

const PORT = 3000

app.use('/staffs', require('./routes/staffs'))
app.use('/trainees',require('./routes/trainees'))
app.use('/trainers',require('./routes/trainers'))

app.listen(PORT,()=>{console.log(`server is running on port ${PORT}`)})