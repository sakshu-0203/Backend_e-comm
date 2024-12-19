const express = require("express");
const app = express();
const mongoose = require("mongoose");

app.use(express.json());
console.log("index file is running");

var categery = require("./routes/categery_router");
var user = require("./routes/user_route");
var admin = require("./routes/admin_route");

app.use("/api/categery", categery);
app.use("/api/user", user);
app.use("/api/admin", admin);

mongoose
  .connect(
    "mongodb+srv://Shubham:shubham4444@cluster.lu6ja.mongodb.net/?retryWrites=true&w=majority&appName=Cluster"
  )
  .then(() => {})
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

console.log("file is running");

app.listen(5030, () => {
  console.log("server running on port 5030");
});
