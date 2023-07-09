const { config } = require("dotenv");
const Course = require("../Models/course.model");
const removefile = require("../Middleware/removefile");
const respHandler = require("../Handlers");
config();

const Createcourse = async (req, res) => {
  let { coursename, courdescription } = req.body;
  if (req.file != "" || courdescription != "" || coursename != "") {
    try {
      let course = await Course.create({
        coursename: coursename,
        courdescription: courdescription,
        courseimg: `images/${req.file.filename}`,
      });

      if (course) {
        return respHandler.success(res, {
          status: true,
          data: [course],
          msg: "Course Added Successfully!!",
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

const Getcourses = async (req, res) => {
  try {
    let course = await Course.findAll();
    return respHandler.success(res, {
      status: true,
      data: [course],
      msg: "All Course Fetch Successfully!!",
    });
  } catch (err) {
    return respHandler.error(res, {
      status: false,
      msg: "Something Went Wrong!!",
      error: [err.message],
    });
  }
};

const updatecourse = async (req, res) => {
  let { id, coursename, courdescription, courseimg } = req.body;

  try {
    let course = await Course.findOne({
      where: {
        id: id,
      },
    });
    if (req?.file) {
      removefile(`public/upload/${course?.courseimg.substring(7)}`);
    }
    let status = await Course.update(
      {
        coursename: coursename,
        courdescription: courdescription,
        courseimg: req?.file ? `images/${req.file.filename}` : courseimg,
      },
      {
        where: {
          id: id,
        },
      }
    );

    if (status) {
      let course = await Course.findOne({
        where: {
          id: id,
        },
      });
      return respHandler.success(res, {
        status: true,
        data: [course],
        msg: "Course Updated Successfully!!",
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

const Deletecourse = async (req, res) => {
  try {
    let course = await Course.findOne({ id: req.body.id });
    if (course) {
      removefile(`public/upload/${course?.courseimg.substring(7)}`);
      await Course.destroy({
        where: {
          id: course.id,
        },
      });

      return respHandler.success(res, {
        status: true,
        data: [],
        msg: "Course Deleted Successfully!!",
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
  Createcourse,
  Getcourses,
  updatecourse,
  Deletecourse,
};
