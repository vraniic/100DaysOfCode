const express = erquire('express')

const app = express()

app.get('/', function(req, res) {
    res.send('<h1>Hello world</h1>')
})


app.post('/recommend', function(req, res){
    const data = req.body
    const filePath = path.join(__dirname, 'data', 'restaurants.json')

    const fileData = fs.readFileSync(filePath)
    const storedData = JSON.parse(fileData)

    fs.writeFileSync(filePath, JSON.stringify(storedData))
})





app.listen(3000)