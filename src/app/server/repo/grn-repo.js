const mongoose = require("mongoose");
const ClientBaseSchema = require("./client-base-schema");

const GrnSchema = new ClientBaseSchema();
GrnSchema.add({
  number: String,
  grandTotal: Number,
  date: Date,
  isProcessed: Boolean,
  comment: String,
  _supplierId: mongoose.Schema.Types.ObjectId,
  items: [
    {
      itemCode: String,
      itemDescription: String,
      price: Number,
      cost: Number,
      qty: Number,
      subtotal: Number,
    },
  ],
});

var GrnModel = mongoose.model("Grns", GrnSchema);

module.exports = GrnModel;
