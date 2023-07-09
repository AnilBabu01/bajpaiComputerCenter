import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ComputerIcon from "@mui/icons-material/Computer";
import "./MasterTap.css";

const MasterTap = ({ setshowadmin }) => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  useEffect(() => {
    setshowadmin(true);
  }, []);

  return (
    <>
      <div className="mobilewidth , dashboarmain">
        <div className="container1">
          <div className="bloc-tabs1">
            <button
              className={toggleState === 1 ? "tabs2 " : "tabs1"}
              onClick={() => toggleTab(1)}
            >
              <ComputerIcon style={{ marginRight: "4%", width: "20px" }} />
              Certificate Fee
            </button>
            <button
              className={toggleState === 2 ? "tabs2 " : "tabs1"}
              onClick={() => toggleTab(2)}
            >
              <ComputerIcon style={{ marginRight: "4%", width: "20px" }} />
              Branch
            </button>
          </div>

          <div className="content-tabs">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <h1>dfxxdn</h1>
            </div>

            <div
              className={
                toggleState === 2 ? "content  active-content" : "content"
              }
            >
              <h1>dfdn</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MasterTap;
