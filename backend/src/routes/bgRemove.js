const router = require("express").Router();
const axios = require("axios");
var FormData = require("form-data");

router.post("/upload", (req, res) => {
  const { image } = req.body;
  const imageData = image.substring(image.indexOf(",") + 1);
  const formData = new FormData();
  formData.append("size", "auto");
  formData.append("image_file_b64", imageData);

  axios({
    method: "post",
    url: "https://api.remove.bg/v1.0/removebg",
    data: formData,
    headers: {
      ...formData.getHeaders(),
      "X-Api-Key": process.env.YOUR_REMOVE_BG_API_KEY,
      Accept: "application/json",
    },
    encoding: null,
  })
    .then((response) => {
      if (response.status != 200)
        return console.error("Error:", response.status, response.statusText);
      console.log(response.data);
      res.json(response.data.data);
    })
    .catch((error) => {
      return console.error("Request failed:", error);
    });
});

module.exports = router;
