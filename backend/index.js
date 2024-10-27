const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();
require('./Models/db')
const AuthRouter = require('./Routes/AuthRouter')

app.use(express.json());
app.use(cors())

const PORT = process.env.PORT || 8080;

app.get("/ping", (req, res) => {
    res.send("Hello World")
})

app.use("/auth", AuthRouter);

app.listen(PORT, () => {
    console.log(`http://localhost/${3001}`)
})