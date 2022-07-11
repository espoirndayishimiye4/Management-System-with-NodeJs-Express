const express = require('express')
const staffsRoutes = require('./routes/staffs')
const app = express()
app.use(express.json())

const PORT = 3000

app.use('/staffs',require('./routes/staffs'))

app.listen(PORT,()=>{console.log(`server is running on port ${PORT}`)})