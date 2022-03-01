const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../models/User");

function loginRequired(req, res, next) {
  // Get token from header

  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({
      msg: "No Token, authorizaton denied",
    });
  }

  try {
    const decoded = jwt.verify(token, config.get("jwtSecret"));

    req.user = decoded.user;
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ msg: "Token is not valid" });
  }
}

function adminRequired(req, res, next) {
  loginRequired(req, res, async function () {
    const user = await User.findById(req.user.id).select("-password");
    console.error(user);
    if (!["admin"].includes(user.role)) {
      return res.status(401).json({
        msg: "You're not an admin",
      });
    } 
    next();

    
  });
}

module.exports = {
  adminRequired,
  loginRequired,
};
