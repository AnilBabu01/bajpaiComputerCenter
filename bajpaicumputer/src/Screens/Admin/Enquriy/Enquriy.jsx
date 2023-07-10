import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CloseIcon from "@mui/icons-material/Close";
import View from "./View";
import { serverInstance } from "../../../API/ServerInstance";
import Swal from "sweetalert2";
import Delete from "../../../assets/Delete.png";
import eye from "../../../assets/eye.png";
import ExportExcel from "../../../assets/ExportExcel.png";
import ExportPdf from "../../../assets/ExportPdf.png";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import LoadingSpinner1 from "../../../components/LoadingSpinner1";
import { Button } from "@mui/material";
import "./Enquriy.css";
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
export default function Enquriy({ setshowadmin }) {
  const [showloader, setshowloader] = useState(false);
  const [isData, setisData] = useState("");
  const [date, setdate] = useState("");
  const [open2, setOpen2] = useState(false);
  const [updatedata, setupdatedata] = useState("");

  const handleOpen2 = async (data) => {
    setOpen2(true);
    setupdatedata(data);
  };

  const handleClose2 = React.useCallback(() => setOpen2(false), []);

  const getgame = () => {
    try {
      setshowloader(true);
      serverInstance("enquriy", "get").then((res) => {
        if (res?.status) {
          setshowloader(false);
          setisData(res?.data[0]);
        }
      });
    } catch (error) {
      setshowloader(false);
    }
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
    serverInstance("enquriy", "delete", {
      id: deleteId,
    }).then((res) => {
      if (res?.status) {
        getgame();
        Swal.fire("Great!", res?.msg, "success");
      }
    });
  };

  const filter = () => {
    try {
      setshowloader(true);
      serverInstance("search", "post", {
        date: date,
      }).then((res) => {
        if (res?.status) {
          setshowloader(false);
          setisData(res?.data[0]);
        }
        if (res?.status === false) {
          setshowloader(false);
        }
      });
    } catch (error) {
      setshowadmin(false);
    }
  };

  useEffect(() => {
    getgame();
    setshowadmin(true);
  }, [open2]);

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
        open={open2}
        onClose={handleClose2}
        closeAfterTransition
      >
        <Fade in={open2}>
          <Box sx={style2}>
            <div>
              <div className="add-div-close-div10">
                <h2 style={{ textAlign: "center", marginLeft: "24%" }}>
                  Enquriy Details
                </h2>
                <CloseIcon
                  style={{ marginTop: "2%", marginLeft: "13%" }}
                  onClick={() => handleClose2()}
                />
              </div>
              <View setOpen={setOpen2} updatedata={updatedata} />
            </div>
          </Box>
        </Fade>
      </Modal>

      <div className="main_slider">
        <div className="main_add_btnn_div_enquriy">
          <h2 style={{ marginLeft: "3rem" }}>Received Enquiry</h2>
          <div className="Export_data_div">
            <input
              type="date"
              value={date}
              name="date"
              onChange={(e) => setdate(e.target.value)}
            />
            <button onClick={() => filter()}>Search</button>
            <button onClick={() => getgame()}>Reset</button>
            <img className="Export_data_divimg" src={ExportExcel} alt="hdf" />
            <img src={ExportPdf} alt="hdf" />
          </div>
        </div>

        <table>
          <tr>
            <th>Name</th>
            <th>Phone No</th>
            <th>Action</th>
          </tr>
          {isData &&
            isData.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item?.firstname}</td>
                  <td>{item?.phoneno1}</td>
                  <td>
                    <img
                      onClick={() => handleOpen2(item)}
                      style={{ width: "25px", marginRight: "1rem" }}
                      src={eye}
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
      {showloader && <LoadingSpinner1 />}
    </>
  );
}
