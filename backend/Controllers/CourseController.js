const { config } = require("dotenv");
const Course = require("../Models/course.model");
const removefile = require("../Middleware/removefile");
const respHandler = require("../Handlers");
config();

const Createcourse = async (req, res) => {
  let { gamename, gameversion, gamedownload, gamebonus, downloadurl } =
    req.body;
  if (
    (req.file != "" ||
      gamename != "" ||
      gameversion != "" ||
      gamedownload != "" ||
      gamebonus != "",
    downloadurl != "")
  ) {
    try {
      let game = await Course.create({
        gamename: gamename,
        gameversion: gameversion,
        gamedownload: gamedownload,
        gamebonus: gamebonus,
        downloadurl: downloadurl,
        gameimg: `images/${req.file.filename}`,
      });

      if (game) {
        return respHandler.success(res, {
          status: true,
          data: [game],
          msg: "New Game Added Successfully!!",
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
    let games = await Course.findAll();
    return respHandler.success(res, {
      status: true,
      data: [games],
      msg: "All New Game Fetch Successfully!!",
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
  let {
    id,
    gamename,
    gameversion,
    gamedownload,
    gamebonus,
    downloadurl,
    gameimg,
  } = req.body;

  try {
    if (req?.file?.path) {
      let game = await Course.findOne({
        where: {
          id: id,
        },
      });
      removefile(`public/upload/${game?.gameimg.substring(7)}`);
    }

    let gamestatus = await Course.update(
      {
        gamename: gamename,
        gameversion: gameversion,
        gamedownload: gamedownload,
        gamebonus: gamebonus,
        downloadurl: downloadurl,
        gameimg: req.file ? `images/${req.file.filename}` : gameimg,
      },
      {
        where: {
          id: id,
        },
      }
    );

    if (gamestatus) {
      let game = await Course.findOne({
        where: {
          id: id,
        },
      });
      return respHandler.success(res, {
        status: true,
        data: [game],
        msg: "Game Updated Successfully!!",
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
    let game = await Course.findOne({ id: req.body.id });
    if (game) {
      removefile(`public/upload/${game?.gameimg.substring(7)}`);
      await Populargame.destroy({
        where: {
          id: game.id,
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
  Createcourse,
  Getcourses,
  updatecourse,
  Deletecourse,
};
