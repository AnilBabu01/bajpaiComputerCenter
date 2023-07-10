const express = require("express");
const router = express.Router();
const GalleryController = require("../../Controllers/GalleryController");
const upload = require("../../Middleware/upload");
const verifyToken = require("../../Middleware/Auth");

const { Validation } = require("../../Middleware/Validate");

router
  .route("/uploadgallery")
  .post(upload.single("galleryimg"), GalleryController.uploadimg)
  .get(GalleryController.getimg)
  .delete(GalleryController.deleteimg);
module.exports = router;
