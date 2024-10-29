const express = require("express");
const app = express();
const cors = require("cors");
const AuthRouter = require('./Routes/AuthRouter')

require('dotenv').config();
const PORT = process.env.PORT || 8080;
require('./Models/db')

app.use(express.json());
app.use(cors());
app.use("/auth", AuthRouter);

app.listen(PORT, () => {
    console.log(`http://localhost/${3001}`)
})