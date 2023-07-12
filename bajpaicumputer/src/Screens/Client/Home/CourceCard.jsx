import React from "react";
import { useNavigate } from "react-router-dom";
import { backendUrl } from "../../../config/config";
import "./CourceCard.css";
function CourceCard({ data }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="card_main">
        <img src={`${backendUrl}${data?.courseimg}`} alt="djd" />
        <div className="course_details">
          <h3>{data?.coursename}</h3>
          <p>{data?.courdescription}</p>

          <a
            href={`${backendUrl}public/upload/${data?.courseimg}`}
            download="Example-PDF-document"
            target="_blank"
            rel="noreferrer"
          >
            link
          </a>
        </div>
      </div>
    </>
  );
}

export default CourceCard;
