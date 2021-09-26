const express = require('express')
const yoloRouter = require('../src/routers/yolo')
const app = express()
app.use(yoloRouter)

const port = process.env.PORT || 3000
console.log(port)
app.listen(port, () => {
    console.log('Listening on port ' + port)
})

module.exports = app
