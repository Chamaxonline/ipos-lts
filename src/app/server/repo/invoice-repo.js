const mongoose = require("mongoose");
const ClientBaseSchema = require("./client-base-schema");

const InvoiceSchema = new ClientBaseSchema();
InvoiceSchema.add({
  number: String,
  grandTotal: Number,
  netTotal: Number,
  date: Date,
  lineDiscountTotal: Number,
  billDiscount: Number,
  totalDiscount: Number,
  cashValue: Number,
  cardValue: Number,
  bankTransferValue: Number,
  creditValue: Number,
  balanceValue: Number,
  comment: String,
  items: [
    {
      itemCode: String,
      itemDescription: String,
      price: Number,
      cost: Number,
      qty: Number,
      discountPercentage: Number,
      discountValue: Number,
      subtotal: Number,
    },
  ],
});

var InvoiceModel = mongoose.model("Invoices", InvoiceSchema);

module.exports = InvoiceModel;
