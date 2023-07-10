import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./Routes/MainRoutes";
import ScrollToTop from "./helpers/ScrollToTop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CloseIcon from "@mui/icons-material/Close";
import Addform from "./Screens/Client/AddEnquriy/Addform";
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
function App() {
  const [showadmin, setshowadmin] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = async () => {
    setOpen(true);
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
                <h2 style={{ textAlign: "center", marginLeft: "24%" }}>
                  Welcome
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
      {showadmin ? (
        ""
      ) : (
        <>
          <a
            href="https://wa.me/918923361130?text=Hi!%20I%20have%20visited%20your%20institutional%20site!"
            class="whatsapp_float"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-whatsapp whatsapp-icon" />
          </a>

          <button onClick={() => handleOpen()} class="whatsapp_float1">
            Enquiry
          </button>
        </>
      )}

      <Router>
        <ScrollToTop />
        <MainRoutes setshowadmin={setshowadmin} showadmin={showadmin} />
      </Router>
    </>
  );
}

export default App;
