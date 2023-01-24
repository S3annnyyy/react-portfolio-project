const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const port = process.env.port ?? 27017;

// Solving strictQuery depreciation 
mongoose.set('strictQuery', false);

// Connection to mongoose
const connectDB = async () => {
    mongoose.connect("mongodb://127.0.0.1:27017/portfolio-msgs")
    // Define schema
    const userDataSchema = new mongoose.Schema({
        name: String,
        address: String,
        message: String
    });
    const userData = mongoose.model("userData", userDataSchema, "userData");
    const data = await userData.find();
    console.warn(data)
}

connectDB();

// Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors())

// Route
app.get("/", cors(), async (req, res) => {
    res.sendFile(__dirname + "/components/ContactPage/contactPage.js")
})

app.post("/", cors(), async (req, res) => {
    let newMsg = new userData({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    });

    newMsg.save();
    res.redirect('/');
})

app.listen(port, (err) => {
        if (err) console.error(err);
        console.log(`Express Server listening on port ${port}`)

    })