const fs = require('fs')

const path = require('path')
const express = require('express')
const { url } = require('inspector')

const app = express()

app.use(express.urlencoded())



app.get('/currenttime',function(req, res) {
    res.send('<h1>' + new Date() + '</h1>')
})

app.get('/', function(req, res) {

    res.send('<form action="/store-user" method="POST"><label>Your name</label><input type="text" name="username"><button>Submit</button></form>')
})

app.post('/store-user', function(req, res) {
    const userName = req.body.username

    const filePath = path.join(__dirname, 'data', 'user.json')

    const fileData = fs.readFileSync(filePath)
    const existingUser = JSON.parse(fileData)
    
    existingUser.push(userName);

    fs.writeFileSync(filePath, JSON.stringify(existingUser))
    

    res.send('<h1>User name stored<h1>')
})

app.get('/users', function(req, res) {
    const filePath = path.join(__dirname, 'data', 'user.json')

    const fileData = fs.readFileSync(filePath)
    const existingUser = JSON.parse(fileData)

    let responseData = '<ul>'

    for (const user of existingUser) {
        responseData += '<li>' + user + '</li>'
    }

    responseData += '</ul>'

    res.send(existingUser)
})


app.listen(3000)
