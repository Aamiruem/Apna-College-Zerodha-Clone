// const {model} = require("mongoose");

// const {PositionsSchema} = require("../schema/PositionsSchema");
// const PositionsModel = new model("positions", PositionsSchema);
// module.exports = {
//     PositionsModel
// };





const mongoose = require('mongoose');
const positionsSchema = require('./schema/PositionsSchema');

const PositionsModel = mongoose.model('Position', positionsSchema);

module.exports = { PositionsModel };
