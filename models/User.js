const mongoose = require("mongoose");



const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  role: {
    type: String,
    enum: ["regular", "admin", "super_admin"],
    default: "regular",
  },
});

module.exports = mongoose.model("user", UserSchema);
