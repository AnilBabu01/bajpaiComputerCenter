import React, { useState, useEffect } from "react";
import Imgcard from "./Imgcard";
import { serverInstance } from "../../../API/ServerInstance";
import "./Gallery.css";

function Gallery() {
  const [isdata, setisdata] = useState("");
  const getgallry = () => {
    serverInstance("uploadgallery", "get").then((res) => {
      if (res?.status) {
        setisdata(res?.data[0]);
      }
    });
  };
  useEffect(() => {
    getgallry();
  }, []);

  return (
    <>
      <div className="Maincontainer">
        <div className="main_gallery_div">
          {isdata &&
            isdata?.map((item, index) => {
              return <Imgcard key={index} data={item} />;
            })}
        </div>
      </div>
    </>
  );
}

export default Gallery;
