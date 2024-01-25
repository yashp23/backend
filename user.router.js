const express = require("express");
const router = express.Router();

router.get("/yash", (req, res) => {
  res.json({
    msg: "continue",
  });
});

module.exports = router;
