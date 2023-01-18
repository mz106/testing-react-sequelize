const router = require("express").Router();
const User = require("../user/model");
const ActivitySubmission = require("./model");

// post activity submission to user_activity_submissions
router.post("/", async (req, res) => {
  console.log(req.body);
  const submissionCheck = await ActivitySubmission.findOne({
    where: { UserId: req.body.UserId, activity_name: req.body.activity_name },
  });
  console.log("submissionCheck: ", submissionCheck);
  if (submissionCheck === null) {
    const activitySubmission = await ActivitySubmission.create(req.body);
    console.log("activitySubmission: ", activitySubmission);
    res.status(201).json({
      msg: "success for user_activity_submissions",
      activity_submission: activitySubmission,
    });
  } else {
    res.status(202).json({ msg: "Submission already exists" });
  }
});

//update acticity submission is_reviewed
router.put("/update", async (req, res) => {
  console.log("update route: ", req.body);
  const updatedSubmission = await ActivitySubmission.update(
    { is_reviewed: true },
    { where: { id: parseInt(req.body.id) } }
  );
  const updatedSubArr = await ActivitySubmission.findAll({
    where: { id: parseInt(req.body.id) },
  });
  res.status(201).json({ msg: "success", updatedSubmission, updatedSubArr });
  //   const sub = await ActivitySubmission.findOne({
  //     where: { id: parseInt(req.body.id) },
  //   });
  //   console.log(sub);
});

module.exports = router;
