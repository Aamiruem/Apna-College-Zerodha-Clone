const { model } = require("mongoose");

const { HoldingSchema } = require("../schema/HoldingSchema");
const HoldingModel = new model("holding", HoldingSchema);

module.exports = { HoldingModel };





// const mongoose = require('mongoose');

// const holdingSchema = new mongoose.Schema({
//     name: String,
//     qty: Number,
//     avg: Number,
//     price: Number,
//     net: String,
//     day: String,
//     isLoss: Boolean
// });

// const HoldingsModel = mongoose.model('Holding', holdingSchema);

// module.exports = { HoldingsModel };
