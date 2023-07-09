import React from "react";
import slider1 from "../../../assets/slider1.jpg";
import Delete from "../../../assets/Delete.png";
import { backendUrl } from "../../../config/config";
import { serverInstance } from "../../../API/ServerInstance";
import Swal from "sweetalert2";
import "./ImgAdminCard.css";
function ImgAdminCard({ data }) {
  const deletesliderimg = (id) => {
    serverInstance("uploadslider", "delete", {
      id: id,
    }).then((res) => {
      if (res?.status) {
        // getslider();
        Swal.fire("Great!", res?.msg, "success");
      }
    });
  };
  return (
    <>
      <div className="main_admin_img">
        <img className="main_admin_img_img" src={slider1} alt="bv" />
        {/* <img src={`${backendUrl}${data?.imgurl} `} alt="dd" /> */}
        <img className="main_admin_img_img10" src={Delete} alt="delete" />
      </div>
    </>
  );
}

export default ImgAdminCard;
