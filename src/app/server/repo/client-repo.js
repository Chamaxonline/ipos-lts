const mongoose = require('mongoose')
const Schema = mongoose.Schema

// • Create Schema. This will be used later to define model fields (db columns)
const ClientSchema = new Schema({
    name: String,
    address: String,
    contact: String,
    whatsapp: String,
    date: Date
})

// • Created Model below will help us to work with MongoDB easily.
var ClientModel = mongoose.model('Clients', ClientSchema)

// • Export Model
module.exports = ClientModel