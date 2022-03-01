const express = require("express");
const router = express.Router();
const { adminRequired, loginRequired: auth } = require("../middlewares/auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const User = require("../models/User");

// this gets data from the server,
// @route   GET api/auth
// @desc    get logged in user
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// this gets data from the server,
// @route   POST api/auth
// @desc    Authorize user and get Token
// @access  Public
router.post(
  "/",
  [
    check("email", "Enter a valid email address").isEmail(),
    check("password", "Enter your Valid password").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(401)
          .json({ msg: "Invalid Credentials, Check Email Adress" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(401).json({
          msg: "Invalid Credentials, Check Password",
        });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        {
          expiresIn: 3600,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

router.get("/", adminRequired, async (req, res) => {
  const { title, desc, price, image_url, quantity } = req.body;
  const product = new Product({
    title,
    desc,
    price,
    image_url,
    quantity,
  });
  await product.save();

  res.status(200).json();
});

module.exports = router;
