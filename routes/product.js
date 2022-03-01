const express = require("express");
const router = express.Router();
const { adminRequired, loginRequired: auth } = require("../middlewares/auth");
const Products = require("../models/Products");

// this gets data from the server,
// @route   GET api/products
// @desc    get products for logged in user
// @access  Private

router.get("/", auth, async (req, res) => {
  try {
    const products = await Products.find(req.products).sort({
      date: -1,
    });

    res.json(products);
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
