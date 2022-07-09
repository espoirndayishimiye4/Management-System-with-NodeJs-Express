const express = require('express')
const staffsRoutes = require('./routes/staffs')
const app = express()

const PORT = 3000

app.use('/staffs',staffsRoutes)

app.listen(PORT,()=>{console.log(`server is running on port ${PORT}`)})