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
