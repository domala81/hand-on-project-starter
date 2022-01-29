const mongoose = require("mongoose");

// connecting to database
const InitiateMongoServer = () => {
  mongoose
    .connect(process.env.MONGODB_URL,{
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then( () => {
      console.log("Connected to MongoDB database");
    })
    .catch( err => {
      console.log("Error connecting to database " + err);
    });
};


module.exports = InitiateMongoServer;
