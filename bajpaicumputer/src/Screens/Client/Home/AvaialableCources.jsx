import React from "react";
import "./AvaialableCources.css";
import CourceCard from "./CourceCard";
import c1 from "../../../assets/c1.jpeg";
import c2 from "../../../assets/c2.png";
import c3 from "../../../assets/c3.png";
import c4 from "../../../assets/c4.jpeg";
function AvaialableCources() {
  return (
    <>
      <div className="main_courses_div">
        <h1>Available Courses</h1>
        <div className="flex_div_courses">
          <CourceCard img={c1} />
          <CourceCard img={c2} />
          <CourceCard img={c3} />
          <CourceCard img={c4} />
        </div>
      </div>
    </>
  );
}

export default AvaialableCources;
