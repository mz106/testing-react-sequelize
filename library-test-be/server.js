require("dotenv").config();
const cors = require("cors");
const express = require("express");
const userRouter = require("./user/routes");
const activityRouter = require("./activity/routes");
const videoRouter = require("./videos/routes");
const courseRouter = require("./course/routes");
const activitySubmissionRouter = require("./submissions/routes");
const User = require("./user/model");
const Activity = require("./activity/model");
const Video = require("./videos/model");
const Course = require("./course/model");
const ActivitySubmission = require("./submissions/model");

const app = express();

const syncTables = () => {
  Course.hasMany(Video);
  Video.belongsTo(Course);

  Video.hasMany(Activity);
  Activity.belongsTo(Video);

  User.hasMany(ActivitySubmission);
  ActivitySubmission.belongsTo(User);
};

syncTables();

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
app.use("/activity", activityRouter);
app.use("/video", videoRouter);
app.use("/course", courseRouter);
app.use("/activitySubmission", activitySubmissionRouter);

app.use("/health", (req, res) => {
  res.status(200).json({ msg: "API is healthy" });
});

app.listen(80, async () => {
  await User.sync({ alter: true });
  await Activity.sync({ alter: true });
  await Video.sync({ alter: true });
  await Course.sync({ alter: true });
  await ActivitySubmission.sync({ alter: true });
  console.log("server is listening");
});
