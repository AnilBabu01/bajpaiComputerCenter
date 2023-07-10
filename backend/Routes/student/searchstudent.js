const express = require("express");
const router = express.Router();
const StudentController = require("../../Controllers/StudentController");
const verifyToken = require("../../Middleware/Auth");
const upload = require("../../Middleware/upload");
const { Validation } = require("../../Middleware/Validate");

router.route("/searchstudent").post(StudentController.SearchStudent);

module.exports = router;
