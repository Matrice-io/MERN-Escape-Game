import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    // birthdate ...
    creationDate: {type: Date, required: true}
}, {collection: "User"})

const User = model('User', userSchema);


export default User
