import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { backendApiUrl, backendUrl } from "../../../config/config";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
const formData = new FormData();

function UpdateCertificate({ setOpen, updatedata }) {
  const [fullname, setfullname] = useState("");
  const [rollno, setrollno] = useState("");
  const [img1, setimg1] = useState("");
  const [previewprofile1, setpreviewprofile1] = useState("");
  const [showloader, setshowloader] = useState(false);
  const [dateofbirth, setdateofbirth] = useState("");
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      setshowloader(true);
      formData.set("id", updatedata?.id);
      formData.set("fullname", fullname);
      formData.set("rollno", rollno);
      formData.set("cerimg", img1 ? img1 : updatedata?.certificateimg);
      formData.set("dateofbirth", dateofbirth);
      axios.defaults.headers.post[
        "Authorization"
      ] = `Bearer ${sessionStorage.getItem("tokengame")}`;

      const res = await axios.put(`${backendApiUrl}certificate`, formData);

      if (res?.data?.status) {
        setOpen(false);
        setshowloader(false);
        Swal.fire("Great!", res?.data?.msg, "success");
      }
    } catch (error) {
      Swal.fire("Error!", error, "error");
    }
  };

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
          <form onSubmit={handlesubmit}>
            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Full Name</label>
              <input
                style={{
                  width: "100%",
                  marginTop: "0.5rem",
                  marginBottom: "0.5rem",
                }}
                type="textarea"
                id="dharamshalaname"
                // placeholder="enter the game name"
                className="forminput_add_user10"
                value={fullname}
                name="fullname"
                onChange={(e) => setfullname(e.target.value)}
              />
            </div>
            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Roll NO</label>
              <input
                style={{
                  width: "100%",
                  marginTop: "0.5rem",
                  marginBottom: "0.5rem",
                }}
                type="textarea"
                id="dharamshalaname"
                // placeholder="enter the game name"
                className="forminput_add_user10"
                value={rollno}
                name="rollno"
                onChange={(e) => setrollno(e.target.value)}
              />
            </div>
            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Date Of Birth</label>
              <input
                style={{
                  width: "100%",
                  marginTop: "0.5rem",
                  marginBottom: "0.5rem",
                }}
                type="date"
                id="dharamshalaname"
                className="forminput_add_user10"
                value={dateofbirth}
                name="dateofbirth"
                onChange={(e) => {
                  setdateofbirth(e.target.value);

                  console.log(e.target.value);
                }}
              />
            </div>
            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Change Certificate</label>
              <input
                style={{
                  width: "100%",
                  marginTop: "0.5rem",
                  marginBottom: "0.5rem",
                }}
                className="forminput_add_user10"
                type="file"
                onChange={(e) => {
                  setimg1(e.target.files[0]);

                  setpreviewprofile1(URL.createObjectURL(e.target.files[0]));
                }}
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

              <div className="formdivvv_imf">
                <input
                  type="file"
                  onChange={(e) => {
                    setimg1(e.target.files[0]);

                    setpreviewprofile1(URL.createObjectURL(e.target.files[0]));
                  }}
                />
              </div>
            </div> */}

            <div className="save-div-btn">
              <button className="save-div-btn-btn">
                {showloader ? (
                  <CircularProgress
                    style={{
                      width: "21px",
                      height: "21px",
                      color: "white",
                    }}
                  />
                ) : (
                  "Update"
                )}
              </button>
              <button
                onClick={() => setOpen(false)}
                className="save-div-btn-btn-cancel"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default UpdateCertificate;
