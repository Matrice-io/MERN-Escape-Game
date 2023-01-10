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
        //planing[0].morning = false
        const result = await Rooms.updateOne({_id: id}, {...body})
        res.json({status: 200, result: result})
    })
}

module.exports = roomsRoutes