
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















const mongoose = require('mongoose');

const PositionsSchema = new mongoose.Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean
});

// export model or schema
module.exports = { PositionsSchema };
