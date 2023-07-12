const express = require("express");
const router = express.Router();
const CertificateController = require("../../Controllers/CertificateController");
const verifyToken = require("../../Middleware/Auth");
const upload = require("../../Middleware/upload");
const { Validation } = require("../../Middleware/Validate");

router.route("/download").get(CertificateController.DownloadPdf);
module.exports = router;
