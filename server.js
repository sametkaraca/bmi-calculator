const express = require('express')
const app = express()
const bodyParser = require('body-parser') 
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req,res)=> { 

let weight = Number(req.body.weight)
let height = Number(req.body.height)
let result = height / weight 

res.send("Result " + result)

})

app.listen(3000, console.log("Listening port " + port))