const express = require("express");
const router = express.Router();
const EnquiryController = require("../../Controllers/EnquiryController");
const verifyToken = require("../../Middleware/Auth");

const { Validation } = require("../../Middleware/Validate");

router.route("/search").post(EnquiryController.Searchenquiry);

module.exports = router;
