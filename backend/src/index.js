
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./models/user.js");
const InitiateMongoServer = require("./config/dbServer.js");

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// Initiate Mongo Server
InitiateMongoServer();


// Importing Routes
const authRoute = require("./routes/auth");
app.use("/login", authRoute);


app.listen(process.env.PORT, () => {
  console.log("Backend server started at port :" + process.env.PORT)
});
