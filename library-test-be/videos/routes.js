const Video = require("./model");

const router = require("express").Router();

// create video
router.post("/", async (req, res) => {
  const video = await Video.create(req.body);
  res.status(201).json(video);
});

// get all videos
router.get("/", async (req, res) => {
  const videos = await Video.findAll({});
  res.status(200).json(videos);
});

module.exports = router;
