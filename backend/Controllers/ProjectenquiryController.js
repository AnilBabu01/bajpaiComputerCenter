const { config } = require("dotenv");
const Projectenquiry = require("../Models/projectenquiry.model");
const respHandler = require("../Handlers");
config();

const Createstudent = async (req, res) => {
  let {
    fullname,
    gender,
    address,
    phoneno1,
    rollno,
    coursename,
    branch,
    fathersname,
  } = req.body;

  if (
    gender != "" ||
    address != "" ||
    phoneno1 != "" ||
    coursename != "" ||
    fullname != "" ||
    rollno != "" ||
    fathersname != "" ||
    branch != ""
  ) {
    try {
      let projectenquiry = await Projectenquiry.create({
        fullname: fullname,
        gender: gender,
        address: address,
        phoneno1: phoneno1,
        rollno: rollno,
        coursename: coursename,
        fathersname: fathersname,
        branch: branch,
      });

      if (projectenquiry) {
        return respHandler.success(res, {
          status: true,
          data: [projectenquiry],
          msg: "Your Project Enquiry  Successfully!!",
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

const Getstudents = async (req, res) => {
  try {
    let Projectenquirys = await Projectenquiry.findAll();
    return respHandler.success(res, {
      status: true,
      data: [],
      msg: "All Project Enquiry Fetch Successfully!!",
    });
  } catch (err) {
    return respHandler.error(res, {
      status: false,
      msg: "Something Went Wrong!!",
      error: [err.message],
    });
  }
};

const updatestudent = async (req, res) => {
  let {
    id,
    fullname,
    gender,
    address,
    phoneno1,
    rollno,
    coursename,
    branch,
    fathersname,
  } = req.body;

  try {
    let status = await Student.update(
      {
        fullname: fullname,
        gender: gender,
        address: address,
        phoneno1: phoneno1,
        rollno: rollno,
        coursename: coursename,
        branch: branch,
        fathersname: fathersname,
      },

      {
        where: {
          id: id,
        },
      }
    );

    if (status) {
      let student = await Student.findOne({
        where: {
          id: id,
        },
      });
      return respHandler.success(res, {
        status: true,
        data: [student],
        msg: "Project Enquiry Updated Successfully!!",
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

const Deletestudent = async (req, res) => {
  try {
    let student = await Student.findOne({ id: req.body.id });
    if (student) {
      await Student.destroy({
        where: {
          id: student?.id,
        },
      });

      return respHandler.success(res, {
        status: true,
        data: [],
        msg: "Project Enquiry Successfully!!",
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

const SearchStudent = async (req, res) => {
  try {
    const { date, rollno, branch } = req.body;
    let whereClause = {};
    let searchdate = new Date(date);
    if (date) {
      whereClause.date = searchdate;
    }

    if (rollno) {
      whereClause.rollno = rollno;
    }
    if (branch) {
      whereClause.branch = branch;
    }
    let students = await Student.findAll({
      where: whereClause,
    });

    if (students.length != 0) {
      return respHandler.success(res, {
        status: true,
        data: [students],
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
  Createstudent,
  updatestudent,
  Getstudents,
  Deletestudent,
  SearchStudent,
};
