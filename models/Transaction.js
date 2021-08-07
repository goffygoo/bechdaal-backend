const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const TransactionSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  mobile: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  costPerKG: {
    type: Number,
    required: true,
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
  images: {
    type: Array,
    required : true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = Transaction = mongoose.model("transaction", TransactionSchema);

//IMAGES NOT ADDED
