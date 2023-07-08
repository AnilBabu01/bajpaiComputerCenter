import React from "react";
function WorkCard({ img, title }) {
  return (
    <>
      <div className="card_main1">
        <img src={img} alt="djd" />
        <div className="course_details1">
          <h3>{title}</h3>
          {/* <p>CCC</p> */}
          <button>Live View</button>
        </div>
      </div>
    </>
  );
}

export default WorkCard;
