//add models and migrate that models
const sequelize = require("./Connect");
const user = require("../Models/user.model");
const Slider = require("../Models/slider.model");
const Branch = require("../Models/branch.model");
const Certificate = require("../Models/certificate.model");
const course = require("../Models/course.model");
const Enquiry = require("../Models/enquiry.model");
const fee = require("../Models/fee.model");
const Works = require("../Models/work.model");
const Registration = require("../Models/registration.model");
const Student = require("../Models/student.model");
sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("table created successfully!");
  })
  .catch((error) => {
    console.error("Unable to create table : ", error);
  });
