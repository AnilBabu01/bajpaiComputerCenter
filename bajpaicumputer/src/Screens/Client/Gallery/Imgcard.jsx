import React from "react";
import { backendUrl } from "../../../config/config";

function Imgcard({ data }) {
  return (
    <>
      <div className="card_main_img">
        <img src={`${backendUrl}${data?.imgurl} `} alt="djd" />
      </div>
    </>
  );
}

export default Imgcard;
