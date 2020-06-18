const mongoose = require("mongoose");
const Record = require("./models/Record");
const connectDB = require("./config/db");
const express = require("express");
const app = express();

connectDB();

//setup express server
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`listening on ${PORT}`));

app.use(express.json());

app.get("/", async (req, res) => {
  const date = new Date(2020, 5, 18, 14, 39, 0);
  console.log(date);
  try {
    const records = await Record.find({ createdAt: { $gte: date } });
    res.send(records);
  } catch (error) {
    console.error(error);
  }
});
