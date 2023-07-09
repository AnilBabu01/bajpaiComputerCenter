const express = require("express");
const router = express.Router();
const EnquiryController = require("../../Controllers/EnquiryController");
const verifyToken = require("../../Middleware/Auth");

const { Validation } = require("../../Middleware/Validate");

router
  .route("/enquriy")
  .post(EnquiryController.Createenquiry)
  .put(EnquiryController.updateenquiry)
  .get(EnquiryController.Getenquiry)
  .delete(EnquiryController.Deleteenquiry);
module.exports = router;
