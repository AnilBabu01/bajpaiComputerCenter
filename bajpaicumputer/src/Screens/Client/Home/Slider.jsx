import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { backendUrl } from "../../../config/config";
import { serverInstance } from "../../../API/ServerInstance";
function Slider() {
  const [isdata, setisdata] = useState("");

  const getslider = () => {
    try {
      serverInstance("uploadslider", "get").then((res) => {
        if (res?.status) {
          setisdata(res?.data[0]);
        }
      });
    } catch (error) {}
  };
  useEffect(() => {
    getslider();
  }, []);
  return (
    <div className="container">
      <div className="home_main">
        <div className="main_slidehgr">
          <Carousel
            infiniteLoop={true}
            autoPlay={true}
            showIndicators={true}
            stopOnHover={true}
            autoFocus={true}
            showStatus={false}
            showThumbs={false}
            showArrows={true}
            dots={true}
          >
            {isdata &&
              isdata?.map((item, index) => {
                return (
                  <div key={index} className="slie_img_div">
                    <img src={`${backendUrl}${item?.imgurl} `} alt="nhbbb" />
                  </div>
                );
              })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Slider;
