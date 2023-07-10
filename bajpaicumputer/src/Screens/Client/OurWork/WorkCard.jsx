import React from "react";
import { backendUrl } from "../../../config/config";
function WorkCard({ data }) {
  return (
    <>
      <div className="card_main1">
        <img src={`${backendUrl}${data?.projectimg} `} alt="djd" />
        <div className="course_details1">
          <h3>{data?.projectname}</h3>
          <p>{data?.projectscription}</p>
          <a href={data?.projecturl} target="blank">
            Live View
          </a>
        </div>
      </div>
    </>
  );
}

export default WorkCard;
