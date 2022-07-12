

const time = ((req, res, next) => {
  const date = Date()
  console.log("time",date.toString())
  next()
})

module.exports = time