const router = require("express").Router();
const Course = require("./model");

//create course

router.post("/", async (req, res) => {
  const course = await Course.create(req.body.course);
  req.body.videos.forEach((video) => {
    const courseVideo = course.createVideo(video);
  });
  res.status(201).json({ msg: "success" });
});

//get all courses

router.get("/", async (req, res) => {
  const courses = await Course.findAll({});

  for (let i = 0; i < courses.length; i++) {
    const videos = await courses[i].getVideos({
      where: { CourseId: courses[i].id },
    });
    courses[i].dataValues.videoArr = videos;
  }
  console.log("courses: ", courses);
  console.log("courses: ", JSON.stringify(courses, null, 2));

  res.status(200).json(courses);
});

//get course
router.get("/:course_name", async (req, res) => {
  const course = await Course.findOne({
    where: { course_name: req.params.course_name },
  });

  const videos = await course.getVideos({ where: { CourseId: course.id } });
  res.status(200).json({ course, videos });
});

module.exports = router;
