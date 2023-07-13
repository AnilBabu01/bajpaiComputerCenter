const { config } = require("dotenv");
const Registration = require("../Models/registration.model");
const Student = require("../Models/student.model");
const removefile = require("../Middleware/removefile");
const respHandler = require("../Handlers");
config();

const Createregistration = async (req, res) => {
  let student = await Student.findOne({
    where: {
      rollno: req.body.rollno,
    },
  });
  if (!student) {
    return respHandler.error(res, {
      status: false,
      msg: "Please Check Roll No!!",
    });
  }
  if (student) {
    let isregistration = await Registration.findOne({
      where: {
        rollno: req.body.rollno,
      },
    });
    if (isregistration) {
      return respHandler.error(res, {
        status: false,
        msg: "You Have Already Registered!!",
      });
    }

    let {
      firstname,
      lastname,
      gender,
      address,
      dateofbirth,
      phoneno1,
      phoneno2,
      coursename,
      fee,
      paymentstatus,
      rollno,
      date,
      fathersname,
      branch,
      transactionid,
    } = req.body;

    if (!req.files.passportsizephoto || !req.files.aadharcard) {
      return respHandler.error(res, {
        status: false,
        msg: "Error in file uploading",
      });
    }

    if (
      firstname != "" ||
      lastname != "" ||
      gender != "" ||
      address != "" ||
      dateofbirth != "" ||
      phoneno1 != "" ||
      phoneno2 != "" ||
      coursename != "" ||
      fee != "" ||
      paymentstatus != "" ||
      rollno != "" ||
      fathersname != ""
    ) {
      try {
        let registration = await Registration.create({
          date: date,
          branch: branch,
          firstname: firstname,
          lastname: lastname,
          gender: gender,
          address: address,
          dateofbirth: dateofbirth,
          phoneno1: phoneno1,
          phoneno2: phoneno2,
          coursename: coursename,
          fee: fee,
          paymentstatus: paymentstatus,
          rollno: rollno,
          fathersname: fathersname,
          transactionid: transactionid,
          passportsizephoto: `images/${req.files.passportsizephoto[0].originalname}`,
          aadharcard: `images/${req.files.aadharcard[0].originalname}`,
        });

        if (registration) {
          return respHandler.success(res, {
            status: true,
            data: [registration],
            msg: "Registration Successfully!!",
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
  } else {
    return respHandler.error(res, {
      status: false,
      msg: "Record Not Found!!",
    });
  }
};

const Getregistration = async (req, res) => {
  try {
    let registration = await Registration.findAll();
    return respHandler.success(res, {
      status: true,
      data: [registration],
      msg: "All Works Fetch Successfully!!",
    });
  } catch (err) {
    return respHandler.error(res, {
      status: false,
      msg: "Something Went Wrong!!",
      error: [err.message],
    });
  }
};

const Deleteregistration = async (req, res) => {
  try {
    let registration = await Registration.findOne({ id: req.body.id });
    if (registration) {
      if (
        removefile(
          `public/upload/${registration?.passportsizephoto.substring(7)}`
        ) &&
        removefile(`public/upload/${registration?.aadharcard.substring(7)}`)
      ) {
        await Registration.destroy({
          where: {
            id: registration?.id,
          },
        });

        return respHandler.success(res, {
          status: true,
          data: [],
          msg: "Registration Details Deleted Successfully!!",
        });
      }
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

const SearchRegistration = async (req, res) => {
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
    let registration = await Registration.findAll({
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

const Checkrollno = async (req, res) => {
  console.log(req.body);
  try {
    let isregistration;
    let student = await Student.findOne({
      where: {
        rollno: req.body.rollno,
      },
    });
    if (!student) {
      return respHandler.error(res, {
        status: false,
        msg: "Please Check Roll No!!",
      });
    }
    if (student) {
      isregistration = await Registration.findOne({
        where: {
          rollno: req.body.rollno,
        },
      });
      if (isregistration) {
        return respHandler.error(res, {
          status: false,
          msg: "You Have Already Registered!!",
        });
      } else {
        return respHandler.success(res, {
          status: true,
          data: [student],
          msg: "You Can Registration!!",
        });
      }
    }
  } catch (error) {}
};

module.exports = {
  Createregistration,
  Getregistration,
  Deleteregistration,
  SearchRegistration,
  Checkrollno,
};
