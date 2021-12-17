const fs = require('fs')

const path = require('path')

const express = require('express')
const { raw } = require('body-parser')
const { stringify } = require('querystring')


const app = express()

app.post('/userStore', function(req, res) {
    const filePath = path.join(__dirname, 'data', 'users.json')
    const rawData = fs.readFileSync(filePath)
    const existingUsers = JSON.parse(rawData)

    existingUsers.push(userName)
    
    fs.writeFileSync(filePath, JSONstringify(existingUsers) )
    
    
})