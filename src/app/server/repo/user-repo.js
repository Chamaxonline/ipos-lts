const mongoose = require('mongoose')
const ClientBaseSchema = require('./client-base-schema')

const UserSchema = new ClientBaseSchema();
UserSchema.add({
    firstName: String,
    lastName: String,
    email: String,
    mobile: String,
    role: Number,
    isActive: Boolean
})

var UserModel = mongoose.model('Users', UserSchema)

module.exports = UserModel