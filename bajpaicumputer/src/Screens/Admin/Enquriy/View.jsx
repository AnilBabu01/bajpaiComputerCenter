import React, { useState, useEffect } from "react";

function View({ setOpen, updatedata }) {
  const [enquriydate, setenquriydate] = useState("");
  const [studentname, setstudentname] = useState("");
  const [course, setcourse] = useState("");
  const [phoneno1, setphoneno1] = useState("");
  const [dateofbirth, setdateofbirth] = useState("");
  const [phoneno2, setphoneno2] = useState("");
  const [Gender, setGender] = useState("");

  useEffect(() => {
    if (updatedata) {
      setenquriydate(updatedata?.date);
      setdateofbirth(updatedata?.dateofbirth);
      setstudentname(updatedata?.firstname);
      setphoneno1(updatedata?.phoneno1);
      setphoneno2(updatedata?.phoneno2);
      setcourse(updatedata?.coursename);
      setGender(updatedata?.gender);
    }
  }, []);

  return (
    <>
      <div className="cash-donation-div">
        <div className="cash-donation-container-innser">
          <form>
            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Enquriy Date</label>
              <input
                disabled={true}
                style={{ width: "100%", marginTop: "0.2rem" }}
                type="textarea"
                id="dharamshalaname"
                className="forminput_add_user10"
                value={enquriydate}
              />
            </div>
            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Student Name</label>
              <input
                disabled={true}
                style={{ width: "100%", marginTop: "0.2rem" }}
                type="textarea"
                id="dharamshalaname"
                className="forminput_add_user10"
                value={studentname}
              />
            </div>
            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Date of birth</label>
              <input
                disabled={true}
                style={{ width: "100%", marginTop: "0.2rem" }}
                type="textarea"
                id="dharamshalaname"
                className="forminput_add_user10"
                value={dateofbirth}
              />
            </div>
            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Gender</label>
              <input
                disabled={true}
                style={{ width: "100%", marginTop: "0.2rem" }}
                type="textarea"
                id="dharamshalaname"
                className="forminput_add_user10"
                value={Gender}
              />
            </div>

            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Phone No 1</label>
              <input
                disabled={true}
                style={{ width: "100%", marginTop: "0.2rem" }}
                type="textarea"
                id="dharamshalaname"
                className="forminput_add_user10"
                value={phoneno1}
              />
            </div>

            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Phone No 2</label>
              <input
                disabled={true}
                style={{ width: "100%", marginTop: "0.2rem" }}
                type="textarea"
                id="dharamshalaname"
                className="forminput_add_user10"
                value={phoneno2}
              />
            </div>

            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Course</label>
              <input
                disabled={true}
                style={{ width: "100%", marginTop: "0.2rem" }}
                type="textarea"
                id="dharamshalaname"
                className="forminput_add_user10"
                value={course}
              />
            </div>
            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Branch Name</label>
              <input
                disabled={true}
                style={{ width: "100%", marginTop: "0.2rem" }}
                type="textarea"
                id="dharamshalaname"
                className="forminput_add_user10"
                value={updatedata?.branch}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default View;
