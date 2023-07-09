import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { backendUrl } from "../../../config/config";

function View({ setOpen, updatedata }) {
  const [course, setcourse] = useState();
  const [coursedesciption, setcoursedesciption] = useState("");
  const [previewprofile1, setpreviewprofile1] = useState("");

  useEffect(() => {
    if (updatedata) {
      setcourse(updatedata?.coursename);
      setcoursedesciption(updatedata?.courdescription);
    }
  }, []);

  return (
    <>
      <div className="cash-donation-div">
        <div className="cash-donation-container-innser">
          <form>
            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Course Name</label>
              <input
                disabled={true}
                style={{ width: "100%", marginTop: "0.2rem" }}
                type="textarea"
                id="dharamshalaname"
                className="forminput_add_user10"
                value={course}
                // name="gamename"
                // onChange={(e) => setgamename(e.target.value)}
              />
            </div>

            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Course Description</label>
              <input
                disabled={true}
                style={{ width: "100%", marginTop: "0.2rem" }}
                type="textarea"
                id="dharamshalaname"
                className="forminput_add_user10"
                value={coursedesciption}
                // name="gameversion"
                // onChange={(e) => setgameversion(e.target.value)}
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
                      src={`${backendUrl}${updatedata?.courseimg} `}
                    />
                  </div>
                </>
              )}

              <div className="formdivvv_imf">
                <input
                  type="file"
                  disabled={true}
                  // onChange={(e) => {
                  //   setimg1(e.target.files[0]);
                  //   setpreviewprofile1(URL.createObjectURL(e.target.files[0]));
                  // }}
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
