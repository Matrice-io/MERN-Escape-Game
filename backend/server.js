const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3000
const MongoDBClient = require('./mongoDBClient')
const roomsRoutes = require('./routes/roomsRoutes')
const usersRoutes = require('./routes/usersRoutes')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.get('/', (req, res)=> {
    res.json({status: 200, msg: "ok"})
})

//Routes rooms 
roomsRoutes(app)

//Route users 
usersRoutes(app)


app.listen(port, ()=>{
    console.log(`Connecté au port ${port}`)
    MongoDBClient.initialize()
})