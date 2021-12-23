const mongodb = require('mongodb')

const MongoClient = mongodb.MongoClient


async function connect() {
    const client = await MongoClient.connect('mongodb://localhost:27017') 
    let database = client.db('blog')

}
