const mongoose = require('mongoose')
const ClientBaseSchema = require('./client-base-schema')

const CashierSignInOffSchema = new ClientBaseSchema();
CashierSignInOffSchema.add({
    signInAt: Date,
    signOutAt: Date,
    status: Number,
    openingBalance: Number,
    closingBalance: Number,
    comments: String
})

var UserModel = mongoose.model('CashierSignInOffSchemas', CashierSignInOffSchema)

module.exports = UserModel