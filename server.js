const mongoose = require("mongoose");
const Record = require("./models/Record");
const connectDB = require("./config/db");
const express = require("express");
const app = express();

const getRange = require("./routes/api/getRange");

connectDB();

//setup express server
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

app.use(express.json());

app.use("/api/range", getRange);
