import React, { useState, useEffect } from "react";
import WorkCard from "./WorkCard";

import { serverInstance } from "../../../API/ServerInstance";
import "./OurWork.css";
function OurWork() {
  const [isdata, setisdata] = useState("");
  const getworks = () => {
    serverInstance("work", "get").then((res) => {
      if (res?.status) {
        setisdata(res?.data[0]);
      }
    });
  };
  useEffect(() => {
    getworks();
  }, []);
  return (
    <div className="main_courses_div">
      <h1>OUR WORK</h1>
      <div className="flex_div_courses">
        {isdata &&
          isdata?.map((item, index) => {
            return <WorkCard key={index} data={item} />;
          })}
      </div>
    </div>
  );
}

export default OurWork;
