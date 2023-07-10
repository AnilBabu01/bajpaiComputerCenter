import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { backendApiUrl } from "../../../config/config";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import { serverInstance } from "../../../API/ServerInstance";
const formData = new FormData();

const genders = [
  { id: 1, type: "Female" },
  { id: 2, type: "Mele" },
];
function Addform({ setOpen }) {
  const [branchname, setbranchname] = useState("");
  const [branch, setbranch] = useState("");
  const [courses, setcourses] = useState("");
  const [coursename, setcoursename] = useState("");
  const [name, setname] = useState("");
  const [rollno, setrollno] = useState("");
  const [address, setaddress] = useState("");
  const [fathersname, setfathersname] = useState("");
  const [gender, setgender] = useState("");
  const [phoneno, setphoneno] = useState("");
  const [showloader, setshowloader] = useState(false);
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      ////
      setshowloader(true);

      axios.defaults.headers.post[
        "Authorization"
      ] = `Bearer ${sessionStorage.getItem("tokengame")}`;

      const res = await axios.post(`${backendApiUrl}student`, {
        fullname: name,
        gender: gender,
        address: address,
        phoneno1: phoneno,
        coursename: coursename,
        rollno: rollno,
        branch: branch,
        fathersname: fathersname,
      });

      if (res?.status) {
        setOpen(false);
        setshowloader(false);
        Swal.fire("Great!", res?.data?.msg, "success");
      }

      console.log(res);
      if (res?.status === false) {
        setOpen(false);
        setshowloader(false);
        Swal.fire("Great!", res?.msg, "success");
      }
    } catch (error) {
      setOpen(false);
      setshowloader(false);
      Swal.fire(
        "Error!",
        "With this roll no student allready added!!",
        "error"
      );
    }
  };

  const getbranch = () => {
    try {
      setshowloader(true);
      serverInstance("branch", "get").then((res) => {
        if (res?.status) {
          setshowloader(false);
          setbranchname(res?.data[0]);
        }
      });
    } catch (error) {
      setshowloader(false);
    }
  };

  const getcouses = () => {
    try {
      setshowloader(true);
      serverInstance("course", "get").then((res) => {
        if (res?.status) {
          setshowloader(false);
          setcourses(res?.data[0]);
        }
      });
    } catch (error) {
      setshowloader(false);
    }
  };

  useEffect(() => {
    getbranch();
    getcouses();
  }, []);

  return (
    <>
      <div className="cash-donation-div">
        <div className="cash-donation-container-innser">
          <form onSubmit={handlesubmit}>
            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Student Name</label>
              <input
                type="text"
                id="dharamshalaname"
                placeholder="Enter the Student Name"
                className="forminput_add_user10"
                value={name}
                name="name"
                onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Gender</label>
              <select
                className="forminput_add_user10"
                onChange={(e) => setgender(e.target.value)}
              >
                <option onChange={(e) => setgender(e.target.value)}>
                  Select gender
                </option>
                {genders &&
                  genders?.map((item, index) => {
                    return (
                      <option key={index} value={item?.type}>
                        {item?.type}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Father's Name</label>
              <input
                type="text"
                id="dharamshalaname"
                placeholder="Enter the Father's Name"
                className="forminput_add_user10"
                value={fathersname}
                name="fathersname"
                onChange={(e) => setfathersname(e.target.value)}
              />
            </div>

            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Branch Name</label>
              <select
                className="forminput_add_user10"
                onChange={(e) => setbranch(e.target.value)}
              >
                <option>Select branch</option>
                {branchname &&
                  branchname?.map((item, index) => {
                    return (
                      <option key={index} value={item?.branchname}>
                        {item?.branchname}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Phone No</label>
              <input
                type="text"
                id="dharamshalaname"
                placeholder="Enter the Phone no"
                className="forminput_add_user10"
                value={phoneno}
                name="phoneno"
                onChange={(e) => setphoneno(e.target.value)}
              />
            </div>
            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Address</label>
              <input
                type="text"
                id="dharamshalaname"
                placeholder="Enter the Address"
                className="forminput_add_user10"
                value={address}
                name="address"
                onChange={(e) => setaddress(e.target.value)}
              />
            </div>
            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Course </label>
              <select
                className="forminput_add_user10"
                onChange={(e) => setcoursename(e.target.value)}
              >
                <option onChange={(e) => setcoursename(e.target.value)}>
                  Select course
                </option>
                {courses &&
                  courses?.map((item, index) => {
                    return (
                      <option key={index} value={item?.coursename}>
                        {item?.coursename}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Roll No</label>
              <input
                type="text"
                id="dharamshalaname"
                placeholder="Enter the Roll No"
                className="forminput_add_user10"
                value={rollno}
                name="rollno"
                onChange={(e) => setrollno(e.target.value)}
              />
            </div>

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
                  "Save"
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

export default Addform;
