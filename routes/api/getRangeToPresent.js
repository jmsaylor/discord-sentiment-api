const express = require("express");
const router = express.Router();

//How Mongo stores date/time
//2020-06-29T23:54:24.191Z

//maybe create basic GET route that gets time now and deducts say 24 hours

router.get("/test", async (req, res) => {
  const records = await Record.find();
  // .limit(5) // doesn't want to work correct
  res.send(records);
});

router.get("/", async (req, res) => {
  try {
    let time = new Date();
    console.log(time);
    time.setHours(time.getHours() - 24);
    const records = Record.find();
    console.log(time);
    res.send(time);
  } catch (error) {
    console.error(error);
  }
});

// ROUTE: POST
// DESCRIPTION: Retrieves from a point in time to present.
// ACCESS: PUBLIC for testing

//Example Request
// {
//     "year": 2020,
//     "month": 5,
//     "day": 28,
//     "hour": 0,
//     "minute": 0,
//     "second": 0
// }

router.post("/range", async (req, res) => {
  try {
    const { year, month, day, hour, minute, second } = req.body;
    console.log(
      `Y: ${year} M: ${month} D: ${day} H: ${hour} M: ${minute} S: ${second}`
    );

    const start = new Date(year, month, day, hour, minute, second);
    console.log(start);

    const records = await Record.find({ createdAt: { $gte: start } });
    console.log(records);
    res.send(records);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
