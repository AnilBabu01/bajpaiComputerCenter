const express = require("express");
const router = express.Router();
const RegistrationController = require("../../Controllers/RegistrationController");
const upload = require("../../Middleware/upload");
const verifyToken = require("../../Middleware/Auth");

const { Validation } = require("../../Middleware/Validate");

router
  .route("/registration")
  .post(
    upload.fields([
      {
        name: "passportsizephoto",
        maxCount: 1,
      },
      {
        name: "aadharcard",
        maxCount: 1,
      },
    ]),
    RegistrationController.Createregistration
  )
  .get(RegistrationController.Getregistration)
  .delete(RegistrationController.Deleteregistration);
module.exports = router;
