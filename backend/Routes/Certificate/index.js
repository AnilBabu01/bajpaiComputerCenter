const express = require("express");
const router = express.Router();
const CertificateController = require("../../Controllers/CertificateController");
const verifyToken = require("../../Middleware/Auth");
const upload = require("../../Middleware/upload");
const { Validation } = require("../../Middleware/Validate");

router
  .route("/certificate")
  .post(upload.single("cerimg"), CertificateController.Createcertificate)
  .put(upload.single("cerimg"), CertificateController.updatecertificate)
  .get(CertificateController.Getcertificate)
  .delete(CertificateController.Deletecertificate);
module.exports = router;
