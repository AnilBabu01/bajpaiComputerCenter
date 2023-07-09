const { config } = require("dotenv");
const Certificate = require("../Models/certificate.model");
const removefile = require("../Middleware/removefile");
const respHandler = require("../Handlers");
config();

const Createcertificate = async (req, res) => {
  let { rollno, fullname } = req.body;
  if (req.file != "" || fullname != "" || rollno != "") {
    try {
      let iscer = await Certificate.findOne({
        where: {
          rollno: rollno,
        },
      });
      if (iscer) {
        removefile(`public/upload/${req.file.filename.substring(7)}`);
        return respHandler.error(res, {
          status: false,
          msg: "With this roll no certificate allready added!!",
        });
      } else {
        let certificate = await Certificate.create({
          date: new Date(),
          fullname: fullname,
          rollno: rollno,
          certificateimg: `images/${req.file.filename}`,
        });

        if (certificate) {
          return respHandler.success(res, {
            status: true,
            data: [certificate],
            msg: "Certificate Added Successfully!!",
          });
        }
      }
    } catch (err) {
      return respHandler.error(res, {
        status: false,
        msg: "Something Went Wrong!!",
        error: [err.message],
      });
    }
  } else {
    return respHandler.error(res, {
      status: false,
      msg: "All field are required!!",
    });
  }
};

const Getcertificate = async (req, res) => {
  try {
    let Certificates = await Certificate.findAll();
    return respHandler.success(res, {
      status: true,
      data: [Certificates],
      msg: "All Certificates Fetch Successfully!!",
    });
  } catch (err) {
    return respHandler.error(res, {
      status: false,
      msg: "Something Went Wrong!!",
      error: [err.message],
    });
  }
};

const updatecertificate = async (req, res) => {
  let { id, rollno, fullname } = req.body;

  try {
    let certificate = await Certificate.findOne({
      where: {
        id: id,
      },
    });
    if (
      removefile(`public/upload/${certificate?.certificateimg.substring(7)}`)
    ) {
      let status = await Course.update(
        {
          fullname: fullname,
          rollno: rollno,
          certificateimg: `images/${req.file.filename}`,
        },
        {
          where: {
            id: id,
          },
        }
      );

      if (status) {
        let certificate = await Certificate.findOne({
          where: {
            id: id,
          },
        });
        return respHandler.success(res, {
          status: true,
          data: [certificate],
          msg: "Certificate Updated Successfully!!",
        });
      }
    }
  } catch (err) {
    return respHandler.error(res, {
      status: false,
      msg: "Something Went Wrong!!",
      error: [err.message],
    });
  }
};

const Deletecertificate = async (req, res) => {
  try {
    let certificate = await Certificate.findOne({ id: req.body.id });
    if (certificate) {
      removefile(`public/upload/${certificate?.certificateimg.substring(7)}`);
      await Certificate.destroy({
        where: {
          id: certificate.id,
        },
      });

      return respHandler.success(res, {
        status: true,
        data: [],
        msg: "Certficte Deleted Successfully!!",
      });
    } else {
      return respHandler.error(res, {
        status: false,
        msg: "Something Went Wrong!!",
        error: ["not found"],
      });
    }
  } catch (err) {
    return respHandler.error(res, {
      status: false,
      msg: "Something Went Wrong!!",
      error: [err.message],
    });
  }
};

module.exports = {
  Createcertificate,
  Getcertificate,
  updatecertificate,
  Deletecertificate,
};
