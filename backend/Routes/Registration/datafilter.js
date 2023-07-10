const express = require("express");
const router = express.Router();
const RegistrationController = require("../../Controllers/RegistrationController");
const upload = require("../../Middleware/upload");
const verifyToken = require("../../Middleware/Auth");

const { Validation } = require("../../Middleware/Validate");

router
  .route("/searchregiatration")
  .post(RegistrationController.SearchRegistration);

module.exports = router;
