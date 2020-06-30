const express = require("express");
const router = express.Router();

//2020-06-29T23:54:24.191Z

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
