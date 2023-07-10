import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CloseIcon from "@mui/icons-material/Close";
import { serverInstance } from "../../../../API/ServerInstance";
import Swal from "sweetalert2";
import Delete from "../../../../assets/Delete.png";
import Edit from "../../../../assets/Edit.png";
import ExportExcel from "../../../../assets/ExportExcel.png";
import ExportPdf from "../../../../assets/ExportPdf.png";
import Addform from "./Addform";
import Updatebranch from "./UpdateAddfee";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Button } from "@mui/material";
import "./Addfee.css";
const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  p: 2,
  boxShadow: 24,
  borderRadius: "5px",
};
export default function Addfee({ setshowadmin }) {
  const [isData, setisData] = useState("");
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [updatedata, setupdatedata] = useState("");

  const handleOpen = async () => {
    setOpen(true);
  };

  const handleClose = React.useCallback(() => setOpen(false), []);

  const handleOpen1 = async (data) => {
    setOpen1(true);
    setupdatedata(data);
  };

  const handleClose1 = React.useCallback(() => setOpen1(false), []);

  const handleOpen2 = async (data) => {
    setOpen2(true);
    setupdatedata(data);
  };

  const handleClose2 = React.useCallback(() => setOpen2(false), []);

  const getgame = () => {
    serverInstance("fee", "get").then((res) => {
      if (res?.status) {
        setisData(res?.data[0]);
      }
    });
  };

  const [deleteId, setdeleteId] = useState("");
  const [open3, setOpen3] = React.useState(false);

  const handleClickOpen3 = (id) => {
    setOpen3(true);
    setdeleteId(id);
  };
  const handleClose5 = () => setOpen3(false);
  const handleClose4 = () => {
    setOpen3(false);
    serverInstance("fee", "delete", {
      id: deleteId,
    }).then((res) => {
      if (res?.status) {
        getgame();
        Swal.fire("Great!", res?.msg, "success");
      }
    });
  };

  useEffect(() => {
    getgame();
    // setshowadmin(true);
  }, [open, open1, open2]);

  return (
    <>
      <Dialog
        open={open3}
        onClose={handleClose5}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you want to delete"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            After delete you cannot get again
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose5}>Disagree</Button>
          <Button onClick={handleClose4} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box sx={style2}>
            <div>
              <div className="add-div-close-div10">
                <h2 style={{ textAlign: "center", marginLeft: "24%" }}>
                  Add Fee
                </h2>
                <CloseIcon
                  style={{ marginTop: "2%", marginLeft: "13%" }}
                  onClick={() => handleClose()}
                />
              </div>
              <Addform setOpen={setOpen} />
            </div>
          </Box>
        </Fade>
      </Modal>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open1}
        onClose={handleClose1}
        closeAfterTransition
      >
        <Fade in={open1}>
          <Box sx={style2}>
            <div>
              <div className="add-div-close-div10">
                <h2 style={{ textAlign: "center", marginLeft: "24%" }}>
                  Update Fee
                </h2>
                <CloseIcon
                  style={{ marginTop: "2%", marginLeft: "13%" }}
                  onClick={() => handleClose1()}
                />
              </div>
              <Updatebranch setOpen={setOpen1} updatedata={updatedata} />
            </div>
          </Box>
        </Fade>
      </Modal>

      <div className="main_slider">
        <div className="main_add_btnn_div_enquriy">
          <h2 style={{ marginLeft: "3rem" }}>Certificate Fee</h2>
          <div className="Export_data_div10">
            <button onClick={() => handleOpen()}>Add</button>
            <div className="Export_data_divimg_icon">
              <img className="Export_data_divimg" src={ExportExcel} alt="hdf" />
              <img src={ExportPdf} alt="hdf" />
            </div>
          </div>
        </div>

        <table>
          <tr>
            <th>Certificate Fee</th>
            <th>Action</th>
          </tr>
          {isData &&
            isData.map((item, index) => {
              return (
                <tr>
                  <td>{item?.fee}</td>
                  <td>
                    <img
                      onClick={() => handleOpen1(item)}
                      style={{ width: "25px", marginRight: "1rem" }}
                      src={Edit}
                      alt="aaa"
                    />

                    <img
                      onClick={() => handleClickOpen3(item?.id)}
                      style={{ width: "25px" }}
                      src={Delete}
                      alt="aaa"
                    />
                  </td>
                </tr>
              );
            })}
        </table>
      </div>
    </>
  );
}
