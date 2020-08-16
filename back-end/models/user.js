const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: { type: String, required: true },
    name: { type: String, unique: true, required: true },
    password: { type: String, minlength: 6, required: true },
    image: { type: String, required: true },
    places: { type: String, required: true }
})

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);