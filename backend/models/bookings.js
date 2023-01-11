const Mongoose = require('mongoose');

const bookingsSchema = new Mongoose.Schema({
    userId: {type: String, required: true},
    roomId: {type: String, required: true},
    time: {type: String},
    date: {type: Date},
}, {collection: "bookings"})

module.exports = Mongoose.model('bookings', bookingsSchema);


