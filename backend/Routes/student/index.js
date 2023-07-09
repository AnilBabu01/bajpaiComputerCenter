const express = require("express");
const router = express.Router();
const StudentController = require("../../Controllers/StudentController");
const verifyToken = require("../../Middleware/Auth");
const upload = require("../../Middleware/upload");
const { Validation } = require("../../Middleware/Validate");

router
  .route("/student")
  .post(StudentController.Createstudent)
  .put(StudentController.updatestudent)
  .get(StudentController.Getstudents)
  .delete(StudentController.Deletestudent);
module.exports = router;
