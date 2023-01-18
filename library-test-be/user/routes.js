const router = require("express").Router();
const User = require("./model");
const ActivitySubmission = require("../submissions/model");

router.post("/", async (req, res) => {
  const user = await User.findOne({ where: { username: req.body.username } });
  const userSubmissions = await ActivitySubmission.findAll({
    where: { UserId: user.id },
  });
  const userObj = { user, userSubmissions };
  res.status(201).json(userObj);
});

router.post("/create", async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json(user);
});

// get all
router.get("/", async (req, res) => {
  const users = await User.findAll({});
  const userSubmissions = await ActivitySubmission.findAll({});
  // const stringyUsers = JSON.stringify(users, null, 2)
  // for (let user of users) {
  //   JSON.stringify(user, null, 2);
  //   user.dataValues["userSubArr"] = [];
  //   console.log(user);
  // }

  for (let user of users) {
    user.dataValues["userSubArr"] = [];
    for (let sub of userSubmissions) {
      if (user.id === sub.UserId) {
        user.dataValues.userSubArr.push(sub);
      }
    }
  }

  res.status(200).json(users);
});

module.exports = router;
