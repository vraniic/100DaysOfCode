const fs = require('fs');

const express = require('express')

const app = express()

app.post ('/user-storage', function(req, res) {
    const userName = req.body.user-name
    
    const filePath = path.join(__dirname, 'data', 'users.json')
    const rawData = fs.readFileSync(filePath)

    const existingUsers = JSON.parse(rawData)

    existingUsers.push(userName)

    fs.writeFileSync(JSON.stringify(existingUsers))
})