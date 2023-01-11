const Mongoose = require('mongoose');

const roomsSchema = new Mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number},
    capacity: {type: Number},
    minPlayers: {type: Number},
    price: {type: Number},
    description: {type: String, required: true},
    img: {type: String, required: true},
    planning: {type: Array, "default": [
        {
            day: {type: String},
            morning: {type: Boolean},
            afternoon: {type: Boolean}
        }
    ]}
}, {collection: "rooms"})

module.exports = Mongoose.model('rooms', roomsSchema);