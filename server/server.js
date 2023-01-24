const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const router = express.Router();
const port = process.env.port ?? 27017;

// Solving strictQuery depreciation 
mongoose.set('strictQuery', false);

// Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors())

// Connection to mongoose
mongoose.connect("mongodb://127.0.0.1:27017/portfolio-msgs")

// Route
app.use("/", require("../server/route.js"))

// Listen on PORT
app.listen(port, (err) => {
        if (err) console.error(err);
        console.log(`Express Server listening on port ${port}`)

    })