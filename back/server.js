const express = require("express");
const connectDB = require("./config/db");
const app = express();
//body-parser
app.use(express.json());
//connect database
connectDB();
//define Routes
app.use("/users", require("./routes/user"));
app.use("/photos", require("./routes/photo"));
//run server
app.listen(5000, err =>
  err ? console.error(er) : console.log("server is running on port 5000"))