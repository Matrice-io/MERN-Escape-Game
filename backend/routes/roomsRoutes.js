const Rooms = require('../models/rooms')

const roomsRoutes = (app) => {
    // Ces headers permettent :
// d'accéder à notre API depuis n'importe quelle origine ( '*' ) ;
// d'ajouter les headers mentionnés aux requêtes envoyées vers notre API (Origin , X-Requested-With , etc.) ;
// d'envoyer des requêtes avec les méthodes mentionnées ( GET ,POST , etc.).
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); 
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); 
        next();
      });

    app.get('/rooms', async (req,res) => {
        const rooms = await Rooms.find({})
        res.json({status:200, rooms:rooms})
    })

    app.get('/rooms/:id', async (req,res)=> {
            const id = req.params.id
            const room = await Rooms.find({_id: id})
            res.json({status:200, room:room})
    })

    app.put('/rooms/update/:id', async(req,res)=>{
        const id = req.params.id
        const result = await Rooms.updateOne({_id: id, 'planning.day': req.body.day}, {'planning.$': {...req.body}})
        res.json({status: 200, result: result})
    })
}

module.exports = roomsRoutes

// const result = await Rooms.updateOne({_id: id}, {"$set": {'planning.index.time': false}})
