const app = require('app')

const fs = require('fs')


const uuid = require('uuid')



app.get('restaurants/:id', function(req, res) {
    const restaurantId = req.params.id
    
    const rawData = fs.readFileSync(filePath)
    const restaurants = JSON.parse(rawData)

    for ( restaurant of restaurants) {
        if (restaurant.id === restaurantId) {
          return res.render('/restaurant-detail', { restaurant: restaurant})
        }
    }

})