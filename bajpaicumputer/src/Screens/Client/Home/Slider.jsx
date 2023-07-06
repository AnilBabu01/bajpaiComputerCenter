import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slider1 from "../../../assets/slider1.jpg";
import slider2 from "../../../assets/slider2.jpg";
import slider3 from "../../../assets/slider3.jpg";
import slider4 from "../../../assets/slider4.jpg";
function Slider() {
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
            <div className="slie_img_div">
              <img src={slider1} alt="nhbbb" />
            </div>
            <div className="slie_img_div">
              <img src={slider2} alt="nhbbb" />
            </div>
            <div className="slie_img_div">
              <img src={slider3} alt="nhbbb" />
            </div>
            <div className="slie_img_div">
              <img src={slider4} alt="nhbbb" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Slider;
