const express = require("express");
const router = express.Router();
const WorkController = require("../../Controllers/WorkController");
const verifyToken = require("../../Middleware/Auth");
const upload = require("../../Middleware/upload");
const { Validation } = require("../../Middleware/Validate");

router
  .route("/work")
  .post(upload.single("workimg"), WorkController.Creatework)
  .put(upload.single("workimg"), WorkController.updatework)
  .get(WorkController.Getworks)
  .delete(WorkController.Deletework);
module.exports = router;
