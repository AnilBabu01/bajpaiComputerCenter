import React, { useState } from "react";
import { serverInstance } from "../../../API/ServerInstance";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useNavigate } from "react-router-dom";
import { backendUrl } from "../../../config/config";
import Swal from "sweetalert2";
import Moment from "moment-js";
import LoadingSpinner1 from "../../../components/LoadingSpinner1";

import "./DownloadCertificate.css";
const style2 = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  p: 2,
  boxShadow: 24,
  borderRadius: "5px",
};
function DownloadCertificate() {
  const navigate = useNavigate();
  const [certificate, setcertificate] = useState();
  const [open, setOpen] = useState(false);
  const [rollno, setrollno] = useState("");
  const [dateofbirth, setdateofbirth] = useState("");
  const [showloader, setshowloader] = useState(false);
  const handleOpen = async () => {
    setOpen(true);
  };
  const DownloadCertificate = (e) => {
    try {
      setshowloader(true);
      e.preventDefault();
      serverInstance("download", "post", {
        rollno: rollno,
        dateofbirth: dateofbirth,
      }).then((res) => {
        if (res?.status) {
          setcertificate(res?.data[0]);
          handleOpen();
          setshowloader(false);
        }

        if (res?.status === false) {
          Swal.fire("Error!", res.msg, "error");
          setshowloader(false);
        }
      });
    } catch (error) {
      Swal.fire("Error!", error?.response?.data?.msg, "error");
      setshowloader(false);
    }
  };

  const handleClose = React.useCallback(() => setOpen(false), []);
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
              <div className="add-div-close-div10">
                <h2
                  style={{
                    textAlign: "center",
                    marginLeft: "24%",
                    fontSize: "17px",
                  }}
                >
                  Download Certificate
                </h2>
                <p></p>
              </div>
              <div className="main_div_don">
                <a
                  className="main_diwnnnnn"
                  href={`${backendUrl}public/upload/${
                    certificate && certificate[0]?.certificateurl
                  }`}
                  download="Example-PDF-document"
                  target="_blank"
                  rel="noreferrer"
                >
                  Download
                </a>
                <button onClick={() => navigate("/")} className="main_diwnnnnn">
                  Close
                </button>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
      <div className="Maincontainer">
        <div className="main_apply_div">
          <h2>Certificate Details</h2>
          <form onSubmit={DownloadCertificate}>
            <div>
              <input
                className="multi_input_full"
                type="text"
                placeholder="Roll No"
                value={rollno}
                name="rollno"
                onChange={(e) => setrollno(e.target.value)}
              />
              <label className="label_pass">Date of Birth</label>
              <input
                required
                className="multi_input_full"
                type="date"
                value={dateofbirth}
                name="dateofbirth"
                onChange={(e) => setdateofbirth(e.target.value)}
              />

              <button className="query_btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
      {showloader && <LoadingSpinner1 />}
    </>
  );
}

export default DownloadCertificate;
