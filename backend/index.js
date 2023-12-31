const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
var cors = require("cors");
const db = require("./Helper/Connect");

const Admin = require("./Routes/Admin");
const Slider = require("./Routes/Slider");
const Course = require("./Routes/Course");
const Enquiry = require("./Routes/Enquiry");
const Work = require("./Routes/Work");
const Fee = require("./Routes/Fee");
const Branch = require("./Routes/Branch");
const Registration = require("./Routes/Registration");
const Student = require("./Routes/student");
const Certificate = require("./Routes/Certificate");
const Gallery = require("./Routes/Gallery");
const EnquiryFilter = require("./Routes/Enquiry/datefilter");
const SearchRegistration = require("./Routes/Registration/datafilter");
const SearchStudent = require("./Routes/student/searchstudent");
const Download = require("./Routes/Certificate/Download");
const Razorpay = require("./Routes/Registration/razorpay");
const Projectenquiry = require("./Routes/ProjectEnquiry");
// to run migrations run command - --------  npm run migrate ---------------------

app.use(cors());
app.use(express.static(__dirname + "/Documentation"));
app.use(express.json({ limit: "50mb" }));

app.get("/test", (req, res) => {
  res.send("<h2>working api's</h2>");
});

app.get("/docs", (req, res) => {
  res.sendFile(__dirname + "/Documentation/index.html");
});
app.use("*/images", express.static("public/upload"));
app.use("/api", Admin);
app.use("/api", Slider);
app.use("/api", Course);
app.use("/api", Enquiry);
app.use("/api", Work);
app.use("/api", Fee);
app.use("/api", Branch);
app.use("/api", Registration);
app.use("/api", Student);
app.use("/api", Certificate);
app.use("/api", Gallery);
app.use("/api", EnquiryFilter);
app.use("/api", SearchRegistration);
app.use("/api", SearchStudent);
app.use("/api", Download);
app.use("/api/payment", Razorpay);
app.use("/api", Projectenquiry);
app.use("*", (req, res) => {
  return res.status(404).json({
    status: false,
    msg: "No Route Found!!",
  });
});

db.sync({ sync: true }).then((req) => {
  app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
  });
});
