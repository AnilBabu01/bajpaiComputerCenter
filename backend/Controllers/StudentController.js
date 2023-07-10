const { config } = require("dotenv");
const Student = require("../Models/student.model");
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

  let student = await Student.findOne({
    where: {
      rollno: rollno,
    },
  });
  if (student) {
    return respHandler.error(res, {
      status: false,
      msg: "With this roll no student allready added!!",
    });
  }
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
      let student = await Student.create({
        fullname: fullname,
        gender: gender,
        address: address,
        phoneno1: phoneno1,
        rollno: rollno,
        coursename: coursename,
        fathersname: fathersname,
        branch: branch,
      });

      if (student) {
        return respHandler.success(res, {
          status: true,
          data: [student],
          msg: "New Student Added Successfully!!",
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
    let students = await Student.findAll();
    return respHandler.success(res, {
      status: true,
      data: [students],
      msg: "All Students Fetch Successfully!!",
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
        msg: "Student Details Updated Successfully!!",
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
        msg: "student Deleted Successfully!!",
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
