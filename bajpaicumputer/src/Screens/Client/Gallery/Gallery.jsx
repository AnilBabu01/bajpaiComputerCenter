import React from "react";
import Imgcard from "./Imgcard";
import "./Gallery.css";
function Gallery() {
  return (
    <>
      <div className="Maincontainer">
        <div className="main_gallery_div">
          <Imgcard />
          <Imgcard />
          <Imgcard />
          <Imgcard />
          <Imgcard />
          <Imgcard />
        </div>
      </div>
    </>
  );
}

export default Gallery;
