const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.port ?? 8080;

// Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors())

// Route
app.get("/", cors(), async (req, res) => {
    res.send("Express server is working")
})

app.listen(port, (err) => {
        if (err) console.error(err);
        console.log(`Express Server listening on port ${port}`)

    })