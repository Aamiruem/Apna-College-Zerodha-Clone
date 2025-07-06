// const { schema } = require("mongoose");

// const {model } = schema.Types;

// const PositionsSchema = new schema({
//     name: String,
//     qty: Number,
//     avg: Number,
//     price: Number,
//     net: String,
//     day: String,
// });

// module.exports = { PositionsSchema };







// // backend/schema/PositionsSchema.js

// const mongoose = require('mongoose');

// const positionsSchema = new mongoose.Schema({
//     name: String,
//     qty: Number,
//     avg: Number,
//     price: Number,
//     net: String,
//     day: String,
//     isLoss: Boolean
// });

// module.exports = positionsSchema;







// backend/schema/PositionsSchema.js

const mongoose = require('mongoose');

const positionsSchema = new mongoose.Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean
});

module.exports = positionsSchema;
