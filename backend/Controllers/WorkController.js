const { config } = require("dotenv");
const Work = require("../Models/work.model");
const removefile = require("../Middleware/removefile");
const respHandler = require("../Handlers");
config();

const Creatework = async (req, res) => {
  let { projectname, projectscription, projecturl } = req.body;
  if (
    req.file != "" ||
    projectname != "" ||
    projectscription != "" ||
    projecturl != ""
  ) {
    try {
      let work = await Work.create({
        projecturl: projecturl,
        projectname: projectname,
        projectscription: projectscription,
        projectimg: `images/${req.file.filename}`,
      });

      if (work) {
        return respHandler.success(res, {
          status: true,
          data: [work],
          msg: "Work Added Successfully!!",
        });
      }
    } catch (err) {
      removefile(`images/${req.file.filename}`);
      return respHandler.error(res, {
        status: false,
        msg: "Something Went Wrong!!",
        error: [err.message],
      });
    }
  } else {
    removefile(`images/${req.file.filename}`);
    return respHandler.error(res, {
      status: false,
      msg: "All field are required!!",
    });
  }
};

const Getworks = async (req, res) => {
  try {
    let Works = await Work.findAll();
    return respHandler.success(res, {
      status: true,
      data: [Works],
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

const updatework = async (req, res) => {
  let { id, projectname, projectscription, projecturl, workimg } = req.body;

  try {
    let work = await Work.findOne({
      where: {
        id: id,
      },
    });
    if (removefile(`public/upload/${work?.projectimg.substring(7)}`)) {
      let status = await Work.update(
        {
          projecturl: projecturl,
          projectname: projectname,
          projectscription: projectscription,
          projectimg: req.file ? `images/${req.file.filename}` : workimg,
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
    removefile(`images/${req.file.filename}`);
    return respHandler.error(res, {
      status: false,
      msg: "Something Went Wrong!!",
      error: [err.message],
    });
  }
};

const Deletework = async (req, res) => {
  try {
    let work = await Work.findOne({ id: req.body.id });
    if (work) {
      removefile(`public/upload/${work?.projectimg.substring(7)}`);
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
  Creatework,
  Getworks,
  Deletework,
  updatework,
};
