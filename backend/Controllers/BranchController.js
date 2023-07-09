const { config } = require("dotenv");
const Branch = require("../Models/branch.model");
const respHandler = require("../Handlers");
config();

const Createbranch = async (req, res) => {
  let { branchname } = req.body;
  if (branchname != "") {
    try {
      let branch = await Branch.create({
        branchname: req.body.branchname,
      });

      if (branch) {
        return respHandler.success(res, {
          status: true,
          data: [branch],
          msg: "New branch Successfully!!",
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

const Getbranch = async (req, res) => {
  try {
    let branch = await Branch.findAll();
    return respHandler.success(res, {
      status: true,
      data: [branch],
      msg: "branch Fetch Successfully!!",
    });
  } catch (err) {
    return respHandler.error(res, {
      status: false,
      msg: "Something Went Wrong!!",
      error: [err.message],
    });
  }
};

const updatebranch = async (req, res) => {
  let { branchname, id } = req.body;

  try {
    let status = await Branch.update(
      {
        branchname: branchname,
      },
      {
        where: {
          id: id,
        },
      }
    );

    if (status) {
      let branch = await Branch.findOne({
        where: {
          id: id,
        },
      });
      return respHandler.success(res, {
        status: true,
        data: [branch],
        msg: "Fee Updated Successfully!!",
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

const Deletebranch = async (req, res) => {
  try {
    let branch = await Branch.findOne({ id: req.body.id });
    if (branch) {
      await Branch.destroy({
        where: {
          id: branch?.id,
        },
      });

      return respHandler.success(res, {
        status: true,
        data: [],
        msg: "Branch Deleted Successfully!!",
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
  Createbranch,
  Getbranch,
  updatebranch,
  Deletebranch,
};
