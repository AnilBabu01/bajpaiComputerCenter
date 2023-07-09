const express = require("express");
const router = express.Router();
const CourseController = require("../../Controllers/CourseController");
const upload = require("../../Middleware/upload");
const verifyToken = require("../../Middleware/Auth");

const { Validation } = require("../../Middleware/Validate");

router
  .route("/populargame")
  .post(upload.single("gameimg"), CourseController.Creategame)
  .put(upload.single("gameimg"), CourseController.updategame)
  .get(PopularGameController.Getgames)
  .delete(PopularGameController.Deletegame);
module.exports = router;
