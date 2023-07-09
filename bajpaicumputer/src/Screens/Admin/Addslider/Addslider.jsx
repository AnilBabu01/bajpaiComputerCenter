import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CloseIcon from "@mui/icons-material/Close";
import Addform from "./Addform";
import { serverInstance } from "../../../API/ServerInstance";
import Swal from "sweetalert2";
import ImgAdminCard from "./ImgAdminCard";
import "./Addslider.css";
const style2 = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  p: 2,
  boxShadow: 24,
  borderRadius: "5px",
};
export default function Addslider({ setshowadmin }) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = async () => {
    setOpen(true);
  };

  const handleClose = React.useCallback(() => setOpen(false), []);

  const getslider = () => {
    // serverInstance("uploadslider", "get").then((res) => {
    //   if (res?.status) {
    //     setisData(res?.data[0]);
    //   }
    // });
  };

  useEffect(() => {
    setshowadmin(true);
    getslider();
  }, [open]);
  return (
    <>
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
              <div className="add-div-close-div1">
                <h2 style={{ textAlign: "center", marginLeft: "24%" }}>
                  Add a slider image
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
      <div className="main_slider">
        <div className="main_add_btnn_div">
          <h2 style={{ marginLeft: "3rem" }}>All Slider Img</h2>
          <button onClick={() => handleOpen()}>Add</button>
        </div>
        <div className="main_flex_imgadmin_div">
          <ImgAdminCard />
          <ImgAdminCard />
          <ImgAdminCard />
        </div>
      </div>
    </>
  );
}
