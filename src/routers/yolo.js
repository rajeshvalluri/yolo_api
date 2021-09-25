const express = require('express')
const router = new express.Router()
const {exec_shell,exec_yolo} = require('../../utils/shellscript')

router.get('/yolo', async (req, res) => {
    try {
        // const task = await Task.findById(_id)
       //HELP ME CALL THE Function!!
       exec_yolo(results => {
        //    console.log(results)
           res.send({results})
       })
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router