
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.get("/", function (req,res) {
  res.send("<h1>Hello World</h1>");
})

app.listen(process.env.PORT, function () {
  console.log("Backend server started at port :" + process.env.PORT)
});
