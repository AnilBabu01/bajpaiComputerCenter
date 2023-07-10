import React from "react";
import Delete from "../../../assets/Delete.png";
import { backendUrl } from "../../../config/config";
import { serverInstance } from "../../../API/ServerInstance";
import Swal from "sweetalert2";
function ImgAdminCard({ data, getslider }) {
  const deletesliderimg = () => {
    serverInstance("uploadgallery", "delete", {
      id: data?.id,
    }).then((res) => {
      if (res?.status) {
        getslider();
        Swal.fire("Great!", res?.msg, "success");
      }
    });
  };
  return (
    <>
      <div className="main_admin_img">
        <img
          className="main_admin_img_img"
          src={`${backendUrl}${data?.imgurl} `}
          alt="dd"
        />
        <img
          onClick={() => deletesliderimg()}
          className="main_admin_img_img10"
          src={Delete}
          alt="delete"
        />
      </div>
    </>
  );
}

export default ImgAdminCard;
