// const {model} = require("mongoose");

// const { OrdersSchema } = require("../schema/OrdersSchema");

// const OrdersModel = new model("order", OrdersSchema);


// module.exports = {OrdersModel};



const mongoose = require('mongoose');
const ordersSchema = require('./schema/OrdersSchema');

const OrdersModel = mongoose.model('Order', ordersSchema);

module.exports = { OrdersModel };
