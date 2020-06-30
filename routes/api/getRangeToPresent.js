const express = require("express");
const router = express.Router();

//How Mongo stores date/time
//2020-06-29T23:54:24.191Z

// POST Route
// Retrieves from a point in time to present.
// Access PUBLIC for testing

//Example Request
// {
//     "year": 2020,
//     "month": 5,
//     "day": 28,
//     "hour": 0,
//     "minute": 0,
//     "second": 0
// }

router.post("/", async (req, res) => {
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
