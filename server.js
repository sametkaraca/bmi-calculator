const express = require('express')
const app = express()
const bodyParser = require('body-parser') 
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req,res) =>{
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req,res)=> { 

let weight = parseFloat(req.body.weight)
let height = parseFloat(req.body.height)
let bmi = weight / (height * height)

res.send("Result " + bmi)

})

app.listen(3000, console.log("Listening port " + port))