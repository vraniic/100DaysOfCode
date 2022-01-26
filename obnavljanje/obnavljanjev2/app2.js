const express = require('express')
const path = reuire('path')
const app = express()

app.post('/answers', function(req, res) {
    const data = req.body
    const filePath = path.join(__dirname, 'obnavljanje', 'restaurans.json')

    const parsedData = fs.readFileSync(filePath.JSON.parse)

    const newData = restaurants.push(parsedData)

    fs.writeFileSync(filePath, JSON.stringify)
})