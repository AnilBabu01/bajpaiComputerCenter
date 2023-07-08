import React from "react";
import WorkCard from "./WorkCard";
import pro1 from "../../../assets/pro1.jpeg";
import pro2 from "../../../assets/pro2.jpeg";
import pro3 from "../../../assets/pro3.jpeg";
import "./OurWork.css";
function OurWork() {
  return (
    <div className="main_courses_div">
      <h1>OUR WORK</h1>
      <div className="flex_div_courses">
        <WorkCard title={"earningappsolutions"} img={pro1} />
        <WorkCard title={"FiewWin Clone"} img={pro2} />
        <WorkCard title={"mtgrooups"} img={pro3} />
      </div>
    </div>
  );
}

export default OurWork;
