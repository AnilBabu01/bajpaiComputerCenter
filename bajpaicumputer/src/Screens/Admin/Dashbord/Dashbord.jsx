import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import LineChart from "./LineChart";
// import Barchart from "./Barchart";
// import PieChart from "./PieChart";
import "./Dashbord.css";
function Dashbord({ setshowadmin }) {
  const navigate = useNavigate();
  useEffect(() => {
    setshowadmin(true);
    let token = localStorage.getItem("tokengame");
    if (!token) {
      navigate("/adminlogin");
    }
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
      <div className="chartmain_div">
        {/* <PieChart />
        <LineChart />

        <LineChart /> */}
      </div>
    </>
  );
}

export default Dashbord;
