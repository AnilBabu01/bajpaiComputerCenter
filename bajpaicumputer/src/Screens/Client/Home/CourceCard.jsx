import React from "react";
import { useNavigate } from "react-router-dom";
import "./CourceCard.css";
function CourceCard({ img, course, des }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="card_main">
        <img src={img} alt="djd" />
        <div className="course_details">
          <h3>{course}</h3>
          <p>{des}</p>
          <button onClick={() => navigate("/apply")}>Now Enquiry</button>
        </div>
      </div>
    </>
  );
}

export default CourceCard;
