
// require('dotenv').config();
// // This is the entry point for the backend server

// const express = require('express');
// const mongoose = require('mongoose');

// const {HoldingsModel} = require('./model/HoldingsModel');

// const PORT = process.env.PORT || 3002;
// const uri = process.env.MONGO_URL;
// const app = express();

// app.get('/addHoldings', async (req, res) => {
//     let tempHoldings = [
//         {
//             name: "HDFCBANK",
//             qty: 2,
//             avg: 1383.4,
//             price: 1522.35,
//             net: "+10.04%",
//             day: "+0.11%",
//         },
//         {
//             name: "HINDUNILVR",
//             qty: 1,
//             avg: 2335.85,
//             price: 2417.4,
//             net: "+3.49%",
//             day: "+0.21%",
//         },
//         {
//             name: "INFY",
//             qty: 1,
//             avg: 1350.5,
//             price: 1555.45,
//             net: "+15.18%",
//             day: "-1.60%",
//             isLoss: true,
//         },
//         {
//             name: "ITC",
//             qty: 5,
//             avg: 202.0,
//             price: 207.9,
//             net: "+2.92%",
//             day: "+0.80%",
//         },
//         {
//             name: "KPITTECH",
//             qty: 5,
//             avg: 250.3,
//             price: 266.45,
//             net: "+6.45%",
//             day: "+3.54%",
//         },
//         {
//             name: "M&M",
//             qty: 2,
//             avg: 809.9,
//             price: 779.8,
//             net: "-3.72%",
//             day: "-0.01%",
//             isLoss: true,
//         },
//         {
//             name: "RELIANCE",
//             qty: 1,
//             avg: 2193.7,
//             price: 2112.4,
//             net: "-3.71%",
//             day: "+1.44%",
//         },
//         {
//             name: "SBIN",
//             qty: 4,
//             avg: 324.35,
//             price: 430.2,
//             net: "+32.63%",
//             day: "-0.34%",
//             isLoss: true,
//         },
//         {
//             name: "SGBMAY29",
//             qty: 2,
//             avg: 4727.0,
//             price: 4719.0,
//             net: "-0.17%",
//             day: "+0.15%",
//         },
//         {
//             name: "TATAPOWER",
//             qty: 5,
//             avg: 104.2,
//             price: 124.15,
//             net: "+19.15%",
//             day: "-0.24%",
//             isLoss: true,
//         },
//         {
//             name: "TCS",
//             qty: 1,
//             avg: 3041.7,
//             price: 3194.8,
//             net: "+5.03%",
//             day: "-0.25%",
//             isLoss: true,
//         },
//         {
//             name: "WIPRO",
//             qty: 4,
//             avg: 489.3,
//             price: 577.75,
//             net: "+18.08%",
//             day: "+0.32%",
//         },
//     ];

//     try {
//         // Delete existing holdings
//         await HoldingsModel.deleteMany({});

//         // Insert new holdings
//         const savedHoldings = await HoldingsModel.insertMany(tempHoldings);
//         res.status(200).json({message: "Holdings added successfully", data: savedHoldings});
//     } catch (error) {
//         console.error("Error adding holdings:", error);
//         res.status(500).json({error: "Failed to add holdings"});
//     }
// });

// app.listen(PORT, async () => {
//     console.log(`Server is running on port ${PORT}`);
//     try {
//         await mongoose.connect(uri);
//         console.log("DB Connected successfully");
//     } catch (error) {
//         console.error("DB Connection failed:", error);
//         process.exit(1); // Exit the process if DB connection fails
//     }
// });



















// require('dotenv').config();
// const express = require('express');
// const mongoose = require('mongoose');
// const { HoldingsModel } = require('./model/HoldingsModel');

// const PORT = process.env.PORT || 3002;
// const uri = process.env.MONGO_URL;
// const app = express();

// app.get('/addHoldings', async (req, res) => {
//     const tempHoldings = [
//         { name: "HDFCBANK", qty: 2, avg: 1383.4, price: 1522.35, net: "+10.04%", day: "+0.11%" },
//         { name: "HINDUNILVR", qty: 1, avg: 2335.85, price: 2417.4, net: "+3.49%", day: "+0.21%" },
//         { name: "INFY", qty: 1, avg: 1350.5, price: 1555.45, net: "+15.18%", day: "-1.60%", isLoss: true },
//         { name: "ITC", qty: 5, avg: 202.0, price: 207.9, net: "+2.92%", day: "+0.80%" },
//         { name: "KPITTECH", qty: 5, avg: 250.3, price: 266.45, net: "+6.45%", day: "+3.54%" },
//         { name: "M&M", qty: 2, avg: 809.9, price: 779.8, net: "-3.72%", day: "-0.01%", isLoss: true },
//         { name: "RELIANCE", qty: 1, avg: 2193.7, price: 2112.4, net: "-3.71%", day: "+1.44%" },
//         { name: "SBIN", qty: 4, avg: 324.35, price: 430.2, net: "+32.63%", day: "-0.34%", isLoss: true },
//         { name: "SGBMAY29", qty: 2, avg: 4727.0, price: 4719.0, net: "-0.17%", day: "+0.15%" },
//         { name: "TATAPOWER", qty: 5, avg: 104.2, price: 124.15, net: "+19.15%", day: "-0.24%", isLoss: true },
//         { name: "TCS", qty: 1, avg: 3041.7, price: 3194.8, net: "+5.03%", day: "-0.25%", isLoss: true },
//         { name: "WIPRO", qty: 4, avg: 489.3, price: 577.75, net: "+18.08%", day: "+0.32%" },
//     ];

//     try {
//         await HoldingsModel.deleteMany({}); // Clear existing holdings
//         const savedHoldings = await HoldingsModel.insertMany(tempHoldings);
//         res.status(200).json({ message: "Holdings added successfully", data: savedHoldings });
//     } catch (error) {
//         console.error("Error adding holdings:", error);
//         res.status(500).json({ error: "Failed to add holdings" });
//     }
// });

// app.listen(PORT, async () => {
//     console.log(`Server is running on port ${PORT}`);
//     try {
//         await mongoose.connect(uri);
//         console.log("DB Connected successfully");
//     } catch (error) {
//         console.error("DB Connection failed:", error);
//         process.exit(1);
//     }
// });











//ORIGINAL CODE

// require('dotenv').config();
// // This is the entry point for the backend server


// const express = require('express');
// const mongoose = require('mongoose');
// const { HoldingsModel } = require('./model/HoldingsModel');




// const PORT = process.env.PORT || 3002;
// const uri = process.env.MONGO_URL;
// const app = express();


// app.get('./addPositions', async (req, res) => {
//     let tempPositions = [
//         {
//             name: "HDFCBANK",
//             qty: 2,
//             avg: 1383.4,
//             price: 1522.35,
//             net: "+10.04%",
//             day: "+0.11%",
//         },
//         {
//             name: "HINDUNILVR",
//             qty: 1,
//             avg: 2335.85,
//             price: 2417.4,
//             net: "+3.49%",
//             day: "+0.21%",
//         },
//         {
//             name: "INFY",
//             qty: 1,
//             avg: 1350.5,
//             price: 1555.45,
//             net: "+15.18%",
//             day: "-1.60%",
//             isLoss: true,
//         },
//         {
//             name: "ITC",
//             qty: 5,
//             avg: 202.0,
//             price: 207.9,
//             net: "+2.92%",
//             day: "+0.80%",
//         },
//         {
//             name: "KPITTECH",
//             qty: 5,
//             avg: 250.3,
//             price: 266.45,
//             net: "+6.45%",
//             day: "+3.54%",
//         },
//         {
//             name: "M&M",
//             qty: 2,
//             avg: 809.9,
//             price: 779.8,
//             net: "-3.72%",
//             day: "-0.01%",
//             isLoss: true,
//         },
//         {
//             name: "RELIANCE",
//             qty: 1,
//             avg: 2193.7,
//             price: 2112.4,
//             net: "-3.71%",
//             day: "+1.44%",
//         },
//         {
//             name: "SBIN",
//             qty: 4,
//             avg: 324.35,
//             price: 430.2,
//             net: "+32.63%",
//             day: "-0.34%",
//             isLoss: true,
//         },
//         {
//             name: "SGBMAY29",
//             qty: 2,
//             avg: 4727.0,
//             price: 4719.0,
//             net: "-0.17%",
//             day: "+0.15%",
//         },
//         {
//             name: "TATAPOWER",
//             qty: 5,
//             avg: 104.2,
//             price: 124.15,
//             net: "+19.15%",
//             day: "-0.24%",
//             isLoss: true,
//         },
//         {
//             name: "TCS",
//             qty: 1,
//             avg: 3041.7,
//             price: 3194.8,
//             net: "+5.03%",
//             day: "-0.25%",
//             isLoss: true,
//         },
//         {
//             name: "WIPRO",
//             qty: 4,
//             avg: 489.3,
//             price: 577.75,
//             net: "+18.08%",
//             day: "+0.32%",
//         },
//     ];

//     tempPositions.forEach((item) => {
//         let newHoldings = new HoldingsModel({
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,

//         });
//         newHoldings.save();
//     });
//     res.send("Holdings added");
// })




// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//     mongoose.connect(uri);
//     console.log("DB Connected")
// });




















require('dotenv').config();
// This is the entry point for the backend server

// const express = require('express');
// const mongoose = require('mongoose');
// const { HoldingsModel } = require('./model/HoldingsModel');

// const PORT = process.env.PORT || 3002;
// const uri = process.env.MONGO_URL;
// const app = express();

// // Added middleware to parse JSON requests
// app.use(express.json());

// Fixed the route path (removed the leading dot)
// app.get('/addPositions', async (req, res) => {
//     const tempPositions = [
//         {
//             name: "HDFCBANK",
//             qty: 2,
//             avg: 1383.4,
//             price: 1522.35,
//             net: "+10.04%",
//             day: "+0.11%",
//         },
//         {
//             name: "HINDUNILVR",
//             qty: 1,
//             avg: 2335.85,
//             price: 2417.4,
//             net: "+3.49%",
//             day: "+0.21%",
//         },
//         {
//             name: "INFY",
//             qty: 1,
//             avg: 1350.5,
//             price: 1555.45,
//             net: "+15.18%",
//             day: "-1.60%",
//             isLoss: true,
//         },
//         {
//             name: "ITC",
//             qty: 5,
//             avg: 202.0,
//             price: 207.9,
//             net: "+2.92%",
//             day: "+0.80%",
//         },
//         {
//             name: "KPITTECH",
//             qty: 5,
//             avg: 250.3,
//             price: 266.45,
//             net: "+6.45%",
//             day: "+3.54%",
//         },
//         {
//             name: "M&M",
//             qty: 2,
//             avg: 809.9,
//             price: 779.8,
//             net: "-3.72%",
//             day: "-0.01%",
//             isLoss: true,
//         },
//         {
//             name: "RELIANCE",
//             qty: 1,
//             avg: 2193.7,
//             price: 2112.4,
//             net: "-3.71%",
//             day: "+1.44%",
//         },
//         {
//             name: "SBIN",
//             qty: 4,
//             avg: 324.35,
//             price: 430.2,
//             net: "+32.63%",
//             day: "-0.34%",
//             isLoss: true,
//         },
//         {
//             name: "SGBMAY29",
//             qty: 2,
//             avg: 4727.0,
//             price: 4719.0,
//             net: "-0.17%",
//             day: "+0.15%",
//         },
//         {
//             name: "TATAPOWER",
//             qty: 5,
//             avg: 104.2,
//             price: 124.15,
//             net: "+19.15%",
//             day: "-0.24%",
//             isLoss: true,
//         },
//         {
//             name: "TCS",
//             qty: 1,
//             avg: 3041.7,
//             price: 3194.8,
//             net: "+5.03%",
//             day: "-0.25%",
//             isLoss: true,
//         },
//         {
//             name: "WIPRO",
//             qty: 4,
//             avg: 489.3,
//             price: 577.75,
//             net: "+18.08%",
//             day: "+0.32%",
//         },
//     ];

//     try {
//         // Using Promise.all for parallel saving
//         await Promise.all(tempPositions.map(item => {
//             const newHoldings = new HoldingsModel({
//                 name: item.name,
//                 qty: item.qty,
//                 avg: item.avg,
//                 price: item.price,
//                 net: item.net,
//                 day: item.day,
//                 isLoss: item.isLoss || false // Added isLoss field with default false
//             });
//             return newHoldings.save();
//         }));

//         res.status(201).send("Holdings added successfully");
//     } catch (error) {
//         console.error("Error adding holdings:", error);
//         res.status(500).send("Error adding holdings");
//     }
// });

// // Improved database connection handling
// mongoose.connect(uri)
//     .then(() => {
//         console.log("DB Connected successfully");
//         app.listen(PORT, () => {
//             console.log(`Server is running on port ${PORT}`);
//         });
//     })
//     .catch(err => {
//         console.error("DB Connection failed:", err);
//         process.exit(1);
//     });
















const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
// const { json } = require('body-parser');

const { HoldingsModel } = require('./model/HoldingsModel');
const { PositionsModel } = require('./model/PositionsModel');
const { OrdersModel } = require('./model/OrdersModel');

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;
const app = express();

// Added middleware to parse JSON requests
app.use(express.json());


app.use(cors());
app.use(bodyParser.json());

app.get('/allHoldings', async (req, res) => {
    let allHoldings = await HoldingsModel.find({});
    // res.send(allHoldings);
    res.json(allHoldings);
});



app.get('/allPositions', async (req, res) => { // get means send the data for user 
    let allPositions = await PositionsModel.find({});
    // res.send(allHoldings);
    res.json(allPositions);


    
});


app.post('/newOrder', async (req, res) => {// post means get the data from user
    let newOrder = new OrdersModel({ 
        name: req.body.name,
        qty: req.body.qty,
        avg: req.body.avg,
        price: req.body.price,
        net: req.body.net,
        day: req.body.day
    });
    newOrder.save();
    res.send("Order saved!", newOrder);
})
    
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    mongoose.connect(uri);
    console.log("DB Connected")
});










// require('dotenv').config(); // Load environment variables

// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const { HoldingsModel } = require('./model/HoldingsModel');
// const { PositionsModel } = require('./model/PositionsModel');
// const { OrdersModel } = require('./model/OrdersModel');

// const PORT = process.env.PORT || 3002;
// const uri = process.env.MONGO_URL;
// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.json());

// // Route: Get all holdings
// app.get('/allHoldings', async (req, res) => {
//     try {
//         const allHoldings = await HoldingsModel.find({});
//         res.json(allHoldings);
//     } catch (error) {
//         console.error("Error fetching holdings:", error);
//         res.status(500).json({ error: "Failed to fetch holdings" });
//     }
// });

// // Route: Get all positions
// app.get('/allPositions', async (req, res) => {
//     try {
//         const allPositions = await PositionsModel.find({});
//         res.json(allPositions);
//     } catch (error) {
//         console.error("Error fetching positions:", error);
//         res.status(500).json({ error: "Failed to fetch positions" });
//     }
// });

// // Route: Create a new order
// app.post('/newOrder', async (req, res) => {
//     try {
//         const orderData = req.body;
//         const newOrder = new OrdersModel(orderData);
//         const savedOrder = await newOrder.save();
//         res.status(201).json({ message: "Order saved!", data: savedOrder });
//     } catch (error) {
//         console.error("Error saving order:", error);
//         res.status(500).json({ error: "Failed to save order" });
//     }
// });

// // Start server after connecting to DB
// app.listen(PORT, async () => {
//     try {
//         await mongoose.connect(uri);
//         console.log("DB Connected successfully");
//         console.log(`Server is running on port ${PORT}`);
//     } catch (error) {
//         console.error("DB Connection failed:", error.message);
//         process.exit(1); // Stop the server if DB fails
//     }
// });
