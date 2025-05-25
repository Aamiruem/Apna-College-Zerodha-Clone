require('dotenv').config();
// This is the entry point for the backend server


const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

// const bodyParser = require('body-parser');
// const cors = require('cors');
const app = express();



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    mongoose.connect(uri);
});
