const mongoose = require('mongoose');

mongoose.set('strictQuery', false)

const DB = process.env.DB
const URI = process.env.URI


const MongoDBClient = {
    initialize(){
        try {
            mongoose.connect(URI, 
                { 
                    useNewUrlParser: true, //dans la doc
                    useUnifiedTopology: true // dans la doc 
                })

            .then(() => console.log(`successfully connected to DB: ${DB}`))
            .catch((err)=> console.log(err))
        } catch(err) {
            throw Error(err)
        }
    }
}

module.exports = MongoDBClient;