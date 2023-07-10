import React, { useState, useEffect } from "react";
import { backendApiUrl, backendUrl } from "../../../config/config";
function View({ setOpen, updatedata }) {
  const [projectname, setprojectname] = useState("");
  const [prodesciption, setprodesciption] = useState("");
  const [prourl, setprourl] = useState("");
  const [previewprofile1, setpreviewprofile1] = useState("");
  const [img1, setimg1] = useState("");
  useEffect(() => {
    if (updatedata) {
      setprojectname(updatedata?.projectname);
      setprodesciption(updatedata?.projectscription);
      setprourl(updatedata?.projecturl);
    }
  }, []);

  return (
    <>
      <div className="cash-donation-div">
        <div className="cash-donation-container-innser">
          <form>
            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Project Name</label>
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
                value={projectname}
              />
            </div>
            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Project Description</label>
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
                value={prodesciption}
                onChange={(e) => setprodesciption(e.target.value)}
              />
            </div>

            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Project Url</label>
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
                value={prourl}
              />
            </div>

            <div
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
                      src={`${backendUrl}${updatedata?.projectimg} `}
                    />
                  </div>
                </>
              )}

              <div className="formdivvv_imf">
                <input
                  type="file"
                  disabled={true}
                  onChange={(e) => {
                    setimg1(e.target.files[0]);

                    setpreviewprofile1(URL.createObjectURL(e.target.files[0]));
                  }}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default View;
