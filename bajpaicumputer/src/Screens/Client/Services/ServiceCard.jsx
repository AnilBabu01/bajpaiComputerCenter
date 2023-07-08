import React from "react";

function ServiceCard({ title, img }) {
  return (
    <>
      <div className="main_card_service">
        <div className="innear_service_card">
          <img src={img} />
          <p>{title}</p>
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
