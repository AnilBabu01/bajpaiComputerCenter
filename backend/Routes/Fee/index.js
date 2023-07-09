const express = require("express");
const router = express.Router();
const FeeController = require("../../Controllers/FeeController");
const verifyToken = require("../../Middleware/Auth");
const { Validation } = require("../../Middleware/Validate");

router
  .route("/fee")
  .post(FeeController.Createfee)
  .put(FeeController.updateefee)
  .get(FeeController.Getenfee)
  .delete(FeeController.Deleteefee);
module.exports = router;
