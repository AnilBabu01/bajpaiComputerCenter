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
  if (student) {
    let isregistration = await Registration.findOne({
      where: {
        rollno: req.body.rollno,
      },
    });
    if (isregistration) {
      return respHandler.error(res, {
        status: false,
        msg: "You Have Allready Registered for certificate!!",
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
    } = req.body;

    if (!req.files.passportsizephoto || !req.files.aasharcard) {
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
      rollno != ""
    ) {
      try {
        let registration = await Registration.create({
          date: new Date(),
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
          partportphoto: `images/${req.files.passportsizephoto[0].originalname}`,
          aadharcard: `images/${req.files.aasharcard[0].originalname}`,
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

const updateregistration = async (req, res) => {
  let { id, projectname, projectscription } = req.body;

  try {
    let registration = await Registration.findOne({
      where: {
        id: id,
      },
    });
    if (removefile(`public/upload/${registration?.projectimg.substring(7)}`)) {
      let status = await Registration.update(
        {
          projectname: projectname,
          projectscription: projectscription,
          projectimg: `images/${req.file.filename}`,
        },
        {
          where: {
            id: id,
          },
        }
      );

      if (status) {
        let work = await Work.findOne({
          where: {
            id: id,
          },
        });
        return respHandler.success(res, {
          status: true,
          data: [work],
          msg: "Work Updated Successfully!!",
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

const Deleteregistration = async (req, res) => {
  try {
    let registration = await Registration.findOne({ id: req.body.id });
    if (registration) {
      removefile(`public/upload/${registration?.projectimg.substring(7)}`);
      await Work.destroy({
        where: {
          id: work?.id,
        },
      });

      return respHandler.success(res, {
        status: true,
        data: [],
        msg: "NewGame Deleted Successfully!!",
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
  Createregistration,
  updateregistration,
  Getregistration,
  Deleteregistration,
};
