const express = require("express");
const router = express.Router();
const BranchController = require("../../Controllers/BranchController");
const verifyToken = require("../../Middleware/Auth");
const { Validation } = require("../../Middleware/Validate");

router
  .route("/branch")
  .post(BranchController.Createbranch)
  .put(BranchController.updatebranch)
  .get(BranchController.Getbranch)
  .delete(BranchController.Deletebranch);
module.exports = router;
