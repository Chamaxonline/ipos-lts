const mongoose = require('mongoose')
const ClientBaseSchema = require('./client-base-schema')

const ItemCategorySchema = new ClientBaseSchema();
ItemCategorySchema.add({
    name: String,
    _parentId: mongoose.Schema.ObjectId
})

var UserModel = mongoose.model('ItemCategories', ItemCategorySchema)

module.exports = UserModel