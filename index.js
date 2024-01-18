const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const TodoModal = require('./modal/Todo')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/test")

app.post("/createUser",(req,res)=>{
    console.log("body",req.body)
    TodoModal.create(req.body)
    .then(todos => req.json(todos))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log('server running')
})