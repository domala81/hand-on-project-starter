const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./config/dbServer.js");

dotenv.config();
const app = express();
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 100000,
  }),
);
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4040;

// Initiate Mongo Server
InitiateMongoServer();

// Importing Routes
const authRoute = require("./routes/auth");
app.use("/login", authRoute);

const bgRemoveRoute = require("./routes/bgRemove");
app.use("/bgremover", bgRemoveRoute);

const apiRoute = require("./routes/APIs");
app.use("/apis", apiRoute);

if (process.env.NODE_ENV == "production") {
  app.use(express.static("frontend/build"));
}

app.listen(process.env.PORT, () => {
  console.log("Backend server started at port :" + PORT);
});
