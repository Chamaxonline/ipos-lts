const mongoose = require('mongoose')
const Schema = mongoose.Schema

// • Create Schema. This will be used later to define model fields (db columns)
const SupplierSchema = new Schema({
    client: {
        _id: mongoose.Schema.Types.ObjectId,
    },
    code: String,
    name: String,
    address: String,
    contact1: String,
    contact2: String,
    contact3: String,
    whatsapp: String,
    date: Date
})

// • Created Model below will help us to work with MongoDB easily.
var SupplierModel = mongoose.model('Suppliers', SupplierSchema)

// • Export Model
module.exports = SupplierModel