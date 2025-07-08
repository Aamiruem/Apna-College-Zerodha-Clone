// // backend/schema/OrdersSchema.js

// const mongoose = require('mongoose');

// const ordersSchema = new mongoose.Schema({
//     name: String,
//     qty: Number,
//     orderType: {
//         type: String,
//         enum: ['BUY', 'SELL'],
//         default: 'BUY'
//     },
//     orderPrice: Number,
//     executed: {
//         type: Boolean,
//         default: false
//     },
//     timestamp: {
//         type: Date,
//         default: Date.now
//     }
// });

// module.exports = ordersSchema;











const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
});

module.exports = { OrdersSchema };
