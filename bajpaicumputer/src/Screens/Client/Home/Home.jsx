import React from "react";
import Slider from "./Slider";
import AvaialableCources from "./AvaialableCources";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="Maincontainer">
        <div>
          <Slider />
          <AvaialableCources />
        </div>
      </div>
    </>
  );
}

export default Home;
