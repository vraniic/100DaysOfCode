const express = require('express')

const app = express()

app.use(express.static('public'))

app.use(exrpess.urlencoded({extended: false}))
const path = require('path')
const fs = require('fs')

app.get('/question', function(req,res){
    
})

app.post('/question', function(req,res){
    
    const victimsName = req.body.victimsName

    const path = path.join(__dirname, 'exercises', 'victims.json')

    const rawData = fs.readFileSync(path)
    const parsedData = JSON.parse(rawData)

    parsedData.push(victimsName)

    const jsonData = JSON.stringify(parsedData)
    fs.writeFileSync(path, jsonData)

     


})