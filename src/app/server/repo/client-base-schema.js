const mongoose = require('mongoose')
const Schema = mongoose.Schema
var util = require('util');

function ClientBaseSchema() {
    Schema.apply(this, arguments);     
    //add                                     
    this.add({                              
        client: {
            _id: mongoose.Schema.Types.ObjectId,
        },
        createdBy: String,
        updatedBy: String,
        createdAt: Date,
        updatedAt: Date
    }); 
};
util.inherits(ClientBaseSchema, Schema);
module.exports = ClientBaseSchema;