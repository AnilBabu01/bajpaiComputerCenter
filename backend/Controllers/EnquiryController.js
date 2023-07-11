const { config } = require("dotenv");
const Enquiry = require("../Models/enquiry.model");
const removefile = require("../Middleware/removefile");
const respHandler = require("../Handlers");
const { date } = require("joi");
config();

const Createenquiry = async (req, res) => {
  let {
    firstname,
    lastname,
    gender,
    address,
    phoneno1,
    phoneno2,
    coursename,
    date,
    branch,
  } = req.body;
  if (
    firstname != "" ||
    lastname != "" ||
    gender != "" ||
    address != "" ||
    phoneno1 != "" ||
    phoneno2 != "" ||
    coursename != "" ||
    date != ""
  ) {
    try {
      let enquiry = await Enquiry.create({
        date: date,
        branch: branch,
        firstname: firstname,
        lastname: lastname,
        gender: gender,
        address: address,
        phoneno1: phoneno1,
        phoneno2: phoneno2,
        coursename: coursename,
      });

      if (enquiry) {
        return respHandler.success(res, {
          status: true,
          data: [enquiry],
          msg: " Enquiry Submitted Successfully!!",
        });
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

const Getenquiry = async (req, res) => {
  try {
    let enquiry = await Enquiry.findAll();
    return respHandler.success(res, {
      status: true,
      data: [enquiry],
      msg: "All Enquiry Fetch Successfully!!",
    });
  } catch (err) {
    return respHandler.error(res, {
      status: false,
      msg: "Something Went Wrong!!",
      error: [err.message],
    });
  }
};

const updateenquiry = async (req, res) => {
  let {
    id,
    firstname,
    lastname,
    gender,
    address,
    phoneno1,
    phoneno2,
    coursename,
    branch,
  } = req.body;

  try {
    let status = await Enquiry.update(
      {
        firstname: firstname,
        lastname: lastname,
        gender: gender,
        address: address,
        phoneno1: phoneno1,
        phoneno2: phoneno2,
        coursename: coursename,
        branch: branch,
      },
      {
        where: {
          id: id,
        },
      }
    );

    if (status) {
      let enquiry = await Enquiry.findOne({
        where: {
          id: id,
        },
      });
      return respHandler.success(res, {
        status: true,
        data: [enquiry],
        msg: "Enquiry Updated Successfully!!",
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

const Deleteenquiry = async (req, res) => {
  try {
    let enquiry = await Enquiry.findOne({ id: req.body.id });
    if (enquiry) {
      await Enquiry.destroy({
        where: {
          id: enquiry?.id,
        },
      });

      return respHandler.success(res, {
        status: true,
        data: [],
        msg: "Enquiry Deleted Successfully!!",
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

const Searchenquiry = async (req, res) => {
  try {
    const { date, rollno, branch } = req.body;
    let whereClause = {};
    let searchdate = new Date(date);

    console.log(new Date(date));
    if (date) {
      whereClause.date = searchdate;
    }

    if (rollno) {
      whereClause.rollno = rollno;
    }
    if (branch) {
      whereClause.branch = branch;
    }
    let registration = await Enquiry.findAll({
      where: whereClause,
    });

    console.log(registration);
    if (registration.length != 0) {
      return respHandler.success(res, {
        status: true,
        data: [registration],
        msg: "Search Successfully!!",
      });
    } else {
      return respHandler.error(res, {
        status: false,
        msg: "Not Found!!",
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
  Createenquiry,
  updateenquiry,
  Getenquiry,
  Deleteenquiry,
  Searchenquiry,
};
