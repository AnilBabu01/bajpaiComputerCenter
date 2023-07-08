import React from "react";
import Slider from "./Slider";
import AvaialableCources from "./AvaialableCources";
import Services from "../Services/Services";
import OurWork from "../OurWork/OurWork";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="Maincontainer">
        <div>
          <Slider />
          <AvaialableCources />
          <Services />
          <OurWork />
        </div>
      </div>
    </>
  );
}

export default Home;
