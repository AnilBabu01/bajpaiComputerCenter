const express = require("express");
const router = express.Router();
const ProjectenquiryController = require("../../Controllers/ProjectenquiryController");
const verifyToken = require("../../Middleware/Auth");
const upload = require("../../Middleware/upload");
const { Validation } = require("../../Middleware/Validate");

router
  .route("/projectenquiry")
  .post(ProjectenquiryController.CreatesProjectenquiry)
  .put(ProjectenquiryController.updateProjectenquiry)
  .get(ProjectenquiryController.GetProjectenquirs)
  .delete(ProjectenquiryController.DeleteProjectenquiry);

router
  .route("/searchprojectenquiry")
  .post(ProjectenquiryController.SearchProjectenquiry);

module.exports = router;
