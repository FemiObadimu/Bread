const express = require("express");
const connectDB = require("./config/db");
const app = express();
const path = require("path");

// connected database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// DEFINE OUR ROUTES
app.use("/mart/sign-up", require("./routes/users"));
app.use("/mart/login", require("./routes/auth"));
app.use("/mart/dashboard/shop", require("./routes/product"));
app.use("/admin/manage-products", require("./routes/admin"));

// Serve Static asset in production

if (process.env.NODE_ENV === "production") {
  // set static folder

  app.use(express.static("client/build"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`server started at PORT ${PORT}`));
