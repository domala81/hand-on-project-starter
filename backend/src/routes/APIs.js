const router = require("express").Router();
const apiModel = require("../models/APIs.js");

// Create

// Validity Schema
const Joi = require("@hapi/joi");
const validationSchema = Joi.object({
  name: Joi.string().required().min(2),
  endPoint: Joi.string().required(),
  description: Joi.string().required().min(3),
});

router.post("/", async (req, res) => {
  const { error } = validationSchema.validate(req.body);

  if (error) {
    return res.send({
      status: 400,
      description: error.details[0].message,
    });
  } else {
    const apiName = req.body.name;
    const apiEndPoint = req.body.endPoint;
    const apiDescription = req.body.description;

    const api = new apiModel({
      name: apiName,
      endPoint: apiEndPoint,
      description: apiDescription,
    });

    try {
      await api.save();
      res.send({
        status: 200,
        description: "API added successfully",
      });
    } catch (err) {
      console.log(err);
    }
  }
});

// Read

router.get("/", async (req, res) => {
  apiModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

// Update

router.put("/", async (req, res) => {
  const newName = req.body.name;
  const newEndPoint = req.body.endPoint;
  const newDescription = req.body.description;
  const id = req.body.id;

  try {
    await apiModel
      .findById(id, (error, updatedAPI) => {
        updatedAPI.name = newName;
        updatedAPI.endPoint = newEndPoint;
        updatedAPI.description = newDescription;
        updatedAPI.save();
        res.send("updated successfully");
      })
      .clone();
  } catch (err) {
    console.log(err);
  }
});

// Delete

router.delete("/:id", async (req, res) => {
  const id = req.params.id;

  await apiModel.findByIdAndRemove(id).exec();
  res.send("deleted successfully");
});

module.exports = router;
