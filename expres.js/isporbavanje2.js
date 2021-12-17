const fs = require('fs');

const express = require('express');
const { response } = require('express');
const { urlencoded } = require('body-parser');

const app = express()

app.use(express.urlencoded())

app.post ('/user-storage', function(req, res) {
    const userName = req.body.user-name
    
    const filePath = path.join(__dirname, 'data', 'users.json')
    const rawData = fs.readFileSync(filePath)

    const existingUsers = JSON.parse(rawData)

    existingUsers.push(userName)

    fs.writeFileSync(filePath, JSON.stringify(existingUsers))
})

app.get('/stored-users', function(req, res) {
    const filePath = path.join(__dirname, 'data', 'users.json')
    const rawData = fs.readFileSync(filePath)

    let existingUsers = JSON.parse(rawData)

    let resopnsedata = '<ul>'

        for (const user of users) {
            resopnsedata += '<li>' + user + '</li>'
        }

        resopnsedata += '</ul>'

        res.send(resopnsedata)

    
}) 