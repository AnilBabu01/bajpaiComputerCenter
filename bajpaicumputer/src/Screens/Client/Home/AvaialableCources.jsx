import React, { useEffect, useState } from "react";
import "./AvaialableCources.css";
import CourceCard from "./CourceCard";
import { serverInstance } from "../../../API/ServerInstance";
function AvaialableCources() {
  const [isdata, setisdata] = useState("");
  const getcourses = () => {
    serverInstance("course", "get").then((res) => {
      if (res?.status) {
        setisdata(res?.data[0]);
      }
    });
  };
  useEffect(() => {
    getcourses();
  }, []);
  return (
    <>
      <div className="main_courses_div">
        <h1>Courses We Provide</h1>
        <div className="flex_div_courses">
          {isdata &&
            isdata?.map((item, index) => {
              return <CourceCard data={item} key={index} />;
            })}
        </div>
      </div>
    </>
  );
}

export default AvaialableCources;
