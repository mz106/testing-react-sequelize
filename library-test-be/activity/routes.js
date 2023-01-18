const router = require("express").Router();
const Activity = require("./model");

// // post activity submission to user_activity_submissions
// router.post("/submission", async (req, res) => {
//   console.log(req.body);

//   res.status(201).json({ msg: "success for user_activity_submissions" });
// });

// create activity
router.post("/", async (req, res) => {
  const activity = await Activity.create(req.body);
  res.status(201).json(activity);
});

// get all activities
router.get("/", async (req, res) => {
  const activities = await Activity.findAll({});
  res.status(200).json(activities);
});

// get activity for specific video
router.get("/:VideoId", async (req, res) => {
  const activities = await Activity.findAll({
    where: { VideoId: req.params.VideoId },
  });
  console.log("activitis: ", activities);
  res.status(200).json(activities);
});

module.exports = router;
