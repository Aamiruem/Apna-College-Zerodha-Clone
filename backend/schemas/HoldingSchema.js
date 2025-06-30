const { Schema } = require('mongoose');

const HoldingSchema = new Schema({

    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    symbol: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    prices: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = { HoldingSchema };
