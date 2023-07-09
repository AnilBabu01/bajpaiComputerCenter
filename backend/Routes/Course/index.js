const express = require("express");
const router = express.Router();
const CourseController = require("../../Controllers/CourseController");
const upload = require("../../Middleware/upload");
const verifyToken = require("../../Middleware/Auth");

const { Validation } = require("../../Middleware/Validate");

router
  .route("/course")
  .post(upload.single("courseimg"), CourseController.Createcourse)
  .put(upload.single("courseimg"), CourseController.updatecourse)
  .get(CourseController.Getcourses)
  .delete(CourseController.Deletecourse);
module.exports = router;
