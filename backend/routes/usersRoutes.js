const Users = require('../models/users')

const usersRoutes = (app) => {
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

    app.get('/users', async (req,res) => {
        const users = await Users.find({})
        res.json({status:200, users:users})
    })

    app.get('/users/:id', async (req,res)=> {
            const id = req.params.id
            const user = await Users.find({_id: id})
            res.json({status:200, user:user})
    })

    app.post('/users/add', async (req,res) => {
        const data = {...body}
        const user = new user(data)
        const result = await user.save()
        res.json({status:200, result:result})
    })

    app.put('/users/update/:id', async(req,res)=>{
        const id = req.params.id
        const data = {
            name : req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category
        }
        const result = await Users.updateOne({_id: id}, data)
        res.json({status: 200, result: result})
    })
}

module.exports = usersRoutes