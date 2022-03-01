const express = require("express");
const router = express.Router();
const { adminRequired } = require("../middlewares/auth");

const config = require("config");
const { check, validationResult } = require("express-validator");
const Product = require("../models/Products");

//  Admin panel
// this posts data to the server,
// @route   POST api/admin/products
// @desc    posts data to the backend
// @access  Private
router.post(
  "/",
  [
    check("title", "Please Enter a Title").not().isEmpty(),
    check("desc", " Enter a Description").not().isEmpty(),
    check("price", " Enter a Price").not().isEmpty(),
    check("image_url", " Enter a Valid Url  ").not().isEmpty(),
    check("quantity", " Enter a Quantity").not().isEmpty(),
    check("tag", " Enter a Tag").not().isEmpty(),
  ],
  adminRequired,
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(401).json({ errors: errors.array() });
    }

    const { title, desc, price, image_url, quantity, tag } = req.body;

    try {
      const product = new Product({
        title,
        desc,
        price,
        image_url,
        quantity,
        tag,
      });

      await product.save();
      res.status(200).json({
        msg: "product successfully added",
      });
    } catch (err) {
      console.log(err);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
