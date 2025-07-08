// // backend/model/HoldingModel.js

// const mongoose = require('mongoose');
// const HoldingSchema = require('../schema/HoldingSchema');

// const HoldingModel = mongoose.model('Holding', HoldingSchema);

// module.exports = { HoldingModel };






const { Schema } = require('mongoose');

const HoldingsSchema = new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
});

module.exports = { HoldingsSchema };
