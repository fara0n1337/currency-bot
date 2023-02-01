const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RateSchema = new Schema({
  exchangeType: { type: String, required: true, unique: false },
  currencyName: { type: String, required: true },
  buy: { type: String, required: true },
  sale: { type: String, required: false, default: null },
  difference: { type: String, required: false, default: null }
},{ timestamps: true });

const Rate = mongoose.model('rates', RateSchema);
module.exports = Rate
