const mongoose = require('mongoose')
const ClientBaseSchema = require('./client-base-schema')

const ItemSchema = new ClientBaseSchema();
ItemSchema.add({
    code: String,
    name: String,
    searchkeyWords: String,
    price: Number,
    cost: Number,
    maxDiscountPercentage: Number,
    maxDiscountValue: Number,
    qty: Number,
    isInactive: Boolean,
    reorderLevel: Number,
    reorderQty: Number,
    _categoryId: mongoose.Schema.ObjectId,
    _supplierId: mongoose.Schema.Types.ObjectId
})

var UserModel = mongoose.model('Items', ItemSchema)

module.exports = UserModel