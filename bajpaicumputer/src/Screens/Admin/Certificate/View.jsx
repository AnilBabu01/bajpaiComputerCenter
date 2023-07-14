import React, { useState, useEffect } from "react";
import { backendApiUrl, backendUrl } from "../../../config/config";
function View({ setOpen, updatedata }) {
  const [fullname, setfullname] = useState("");
  const [rollno, setrollno] = useState("");
  const [previewprofile1, setpreviewprofile1] = useState("");
  useEffect(() => {
    if (updatedata) {
      setfullname(updatedata?.fullname);
      setrollno(updatedata?.rollno);
    }
  }, []);

  return (
    <>
      <div className="cash-donation-div">
        <div className="cash-donation-container-innser">
          <form>
            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Student Name</label>
              <input
                disabled={true}
                style={{ width: "100%", marginTop: "0.2rem" }}
                type="textarea"
                id="dharamshalaname"
                className="forminput_add_user10"
                value={fullname}
              />
            </div>

            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Roll No</label>
              <input
                disabled={true}
                style={{ width: "100%", marginTop: "0.2rem" }}
                type="textarea"
                id="dharamshalaname"
                className="forminput_add_user10"
                value={rollno}
              />
            </div>
            {/* <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
                flexDirection: "column",
              }}
            >
              {previewprofile1 ? (
                <>
                  <div className="main_img_divvvv">
                    <img className="dharamshala_imgggg" src={previewprofile1} />
                  </div>
                </>
              ) : (
                <>
                  <div className="main_img_divvvv">
                    <img
                      style={{ height: "100%", width: "100%" }}
                      src={`${backendUrl}${updatedata?.certificateimg} `}
                    />
                  </div>
                </>
              )}
            </div> */}
          </form>
        </div>
      </div>
    </>
  );
}

export default View;
