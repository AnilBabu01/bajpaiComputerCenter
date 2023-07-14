const { config } = require("dotenv");
const Projectenquiry = require("../Models/projectenquiry.model");
const respHandler = require("../Handlers");
config();

const CreatesProjectenquiry = async (req, res) => {
  let { email, address, phoneno1, projecttype, bussiness, fullname } = req.body;

  if (
    email != "" ||
    address != "" ||
    phoneno1 != "" ||
    projecttype != "" ||
    fullname != "" ||
    bussiness != ""
  ) {
    try {
      let projectenquiry = await Projectenquiry.create({
        fullname: fullname,
        email: email,
        address: address,
        phoneno1: phoneno1,
        projecttype: projecttype,
        bussiness: bussiness,
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

const GetProjectenquirs = async (req, res) => {
  try {
    let Projectenquirys = await Projectenquiry.findAll();
    return respHandler.success(res, {
      status: true,
      data: [Projectenquirys],
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

const updateProjectenquiry = async (req, res) => {
  let { id, email, address, phoneno1, projecttype, bussiness, fullname } =
    req.body;

  try {
    let status = await Projectenquiry.update(
      {
        fullname: fullname,
        email: email,
        address: address,
        phoneno1: phoneno1,
        projecttype: projecttype,
        bussiness: bussiness,
      },

      {
        where: {
          id: id,
        },
      }
    );

    if (status) {
      let projectenquiry = await Projectenquiry.findOne({
        where: {
          id: id,
        },
      });
      return respHandler.success(res, {
        status: true,
        data: [projectenquiry],
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

const DeleteProjectenquiry = async (req, res) => {
  try {
    let projectenquiry = await Projectenquiry.findOne({ id: req.body.id });
    if (projectenquiry) {
      await Projectenquiry.destroy({
        where: {
          id: projectenquiry?.id,
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

const SearchProjectenquiry = async (req, res) => {
  try {
    const { projecttype, bussiness } = req.body;
    let whereClause = {};

    if (projecttype) {
      whereClause.projecttype = projecttype;
    }
    if (bussiness) {
      whereClause.bussiness = bussiness;
    }
    let projectenquiry = await Projectenquiry.findAll({
      where: whereClause,
    });

    if (projectenquiry.length != 0) {
      return respHandler.success(res, {
        status: true,
        data: [projectenquiry],
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
  CreatesProjectenquiry,
  GetProjectenquirs,
  updateProjectenquiry,
  DeleteProjectenquiry,
  SearchProjectenquiry,
};
