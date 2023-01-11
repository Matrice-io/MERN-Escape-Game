const mongoose = require('mongoose');
// require('dontenv').config()

// console.log(process.env.DB_USER)
mongoose.set('strictQuery', false)

const DB = "escapeGame"
// const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.47cdf59.mongodb.net/${DB}?retryWrites=true&w=majority`;
const URI = "mongodb+srv://root:root@cluster0.ud1m57v.mongodb.net/escapeGame?retryWrites=true&w=majority"


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