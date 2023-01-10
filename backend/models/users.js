const Mongoose = require('mongoose');

const usersSchema = new Mongoose.Schema({
    userName: {type: String, required: true},
    surname: {type: String, required: true},
    email: {type: String, required: true},
    birthday: {type: Date, required: true},
    password: {type: String, required: true},
    admin: {type: Boolean, required: true},
    bookings: {type: Array, "default": [
        {
            day: {type: String},
            time: {type: String}
        }
    ]}
}, {collection: "users"})

module.exports = Mongoose.model('users', usersSchema);