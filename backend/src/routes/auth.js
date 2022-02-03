const router = require("express").Router();
const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
const User = require("../models/user.js");

let isLoggedIn = false;

// Validity Schema
const Joi = require("@hapi/joi");

const validationSchema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required().min(6),
});

router.post("/", async (req, res) => {
  // validity checks
  const { error } = validationSchema.validate(req.body);

  if (error) {
    return res.send({
      status: 400,
      description: error.details[0].message,
    });
  } else {
    const { email, password: plainTextPassword } = req.body;

    // Finding the email in database
    const user = await User.findOne({ email }).lean();

    if (!user) {
      // register

      const password = await bcrypt.hash(plainTextPassword, 10);

      try {
        const newUser = await User.create({
          email: email,
          password: password,
        });
      } catch (err) {
        return res.send({
          status: 400,
          description: err,
        });
      }

      isLoggedIn = true;
      res.send({
        status: 200,
        description: "User created successfully!",
      });
    } else if (await bcrypt.compare(plainTextPassword, user.password)) {
      // login

      isLoggedIn = true;
      res.send({
        status: 200,
        description: "User logged in successfully!",
      });

      // const token = jwt.sign({
      //   id: user._id,
      //   email: user.email
      // }, process.env.JWT_SECRET_KEY );
      //
      // res.header("auth-token", token).send(token);
    } else {
      return res.send({
        status: 400,
        description: "Invalid Password",
      });
    }
  }
});

router.get("/", (req, res) => {
  res.send({ loginStatus: isLoggedIn });
});

module.exports = router;
