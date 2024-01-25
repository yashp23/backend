const express = require("express");
const User = require("../db");
const router = express.Router();
const bcryptjs = require("bcryptjs");

router.post("/signup", async (req, res, next) => {
  const { username, password, email } = req.body; // Change Password to password
  const hashPass = bcryptjs.hashSync(password, 10); // Change Password to password
  const userDetails = new User({ username, password: hashPass, email }); // Change Password to password
  try {
    const result = await userDetails.save();
    console.log(result);

    res.status(200).json({
      msg: "User Created Successfully",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
