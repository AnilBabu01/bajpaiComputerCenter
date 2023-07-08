import React from "react";
import { useNavigate } from "react-router-dom";
import "./CourceCard.css";
function CourceCard({ img }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="card_main">
        <img src={img} alt="djd" />
        <div className="course_details">
          <h3>CCC</h3>
          <p>CCC</p>
          <button onClick={() => navigate("/apply")}>Now Enquiry</button>
        </div>
      </div>
    </>
  );
}

export default CourceCard;
