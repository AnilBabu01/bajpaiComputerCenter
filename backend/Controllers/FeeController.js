const { config } = require("dotenv");
const Fee = require("../Models/fee.model");
const respHandler = require("../Handlers");
config();

const Createfee = async (req, res) => {
  let { fee } = req.body;
  if (fee != "") {
    try {
      let fee = await Fee.create({
        fee: req.body.fee,
      });

      if (fee) {
        return respHandler.success(res, {
          status: true,
          data: [fee],
          msg: "New Fee Successfully!!",
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

const Getenfee = async (req, res) => {
  try {
    let fee = await Fee.findAll();
    return respHandler.success(res, {
      status: true,
      data: [fee],
      msg: "Fee Fetch Successfully!!",
    });
  } catch (err) {
    return respHandler.error(res, {
      status: false,
      msg: "Something Went Wrong!!",
      error: [err.message],
    });
  }
};

const updateefee = async (req, res) => {
  let { fee, id } = req.body;

  try {
    let status = await Fee.update(
      {
        fee: fee,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    );

    if (status) {
      let fee = await Fee.findOne({
        where: {
          id: req.body.id,
        },
      });
      return respHandler.success(res, {
        status: true,
        data: [fee],
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

const Deleteefee = async (req, res) => {
  try {
    let fee = await Fee.findOne({ id: req.body.id });
    if (fee) {
      await Fee.destroy({
        where: {
          id: fee?.id,
        },
      });

      return respHandler.success(res, {
        status: true,
        data: [],
        msg: "Fee Deleted Successfully!!",
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
  Createfee,
  updateefee,
  Deleteefee,
  Getenfee,
};
