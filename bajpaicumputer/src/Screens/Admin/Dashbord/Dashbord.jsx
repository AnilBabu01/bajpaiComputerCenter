import React, { useEffect } from "react";
import "./Dashbord.css";
function Dashbord({ setshowadmin }) {
  useEffect(() => {
    setshowadmin(true);
  }, []);

  return (
    <>
      <div className="main_Dashborad_info">
        <div className="main_info_card1">
          <p>Total Enqury</p>
          <p>0</p>
        </div>
        <div className="main_info_card2">
          <p>Total Registration</p>
          <p>0</p>
        </div>
        <div className="main_info_card3">
          <p>Total Certificate</p>
          <p>0</p>
        </div>
      </div>
    </>
  );
}

export default Dashbord;
