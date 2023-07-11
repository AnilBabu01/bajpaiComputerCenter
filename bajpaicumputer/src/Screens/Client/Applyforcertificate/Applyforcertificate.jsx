import React, { useState, useEffect } from "react";
import { serverInstance } from "../../../API/ServerInstance";
import { backendApiUrl } from "../../../config/config";
import CircularProgress from "@mui/material/CircularProgress";
import Swal from "sweetalert2";
import Moment from "moment-js";
import axios from "axios";
import "./Applyforcertificate.css";

const genders = [
  { id: 1, type: "Female" },
  { id: 2, type: "Mele" },
];
function Applyforcertificate() {
  const [showloader, setshowloader] = useState(false);
  const [amount, setamount] = useState("");
  const [firstName, setfirstName] = useState();
  const [lastname, setlastname] = useState("");
  const [rollno, setrollno] = useState("");
  const [gender, setgender] = useState("");
  const [address, setaddress] = useState("");
  const [dateofbirth, setdateofbirth] = useState("");
  const [phoneno1, setphoneno1] = useState("");
  const [phoneno2, setphoneno2] = useState("");
  const [courses, setcourses] = useState("");
  const [coursename, setcoursename] = useState("");
  const [fee, setfee] = useState("");
  const [paymentstatus, setpaymentstatus] = useState("");
  const [transactionid, settransactionid] = useState("");
  const [first, setfirst] = useState("");
  const [fathersname, setfathersname] = useState("");
  const [aadharcard, setaadharcard] = useState("");
  const [previewprofile1, setpreviewprofile1] = useState("");
  const [passport, setpassport] = useState("");
  const [previewprofile2, setpreviewprofile2] = useState("");
  const [branch, setbranch] = useState("");
  const [branchname, setbranchname] = useState("");
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      ////
      setshowloader(true);

      axios.defaults.headers.post[
        "Authorization"
      ] = `Bearer ${sessionStorage.getItem("tokengame")}`;

      const res = await axios.post(`${backendApiUrl}registration`, {
        date: Moment(Date()).format("yyyy-MM-dd"),
        branch: branchname,
        firstname: firstName,
        lastname: lastname,
        gender: gender,
        address: address,
        dateofbirth: Moment(dateofbirth).format("yyyy-MM-dd"),
        phoneno1: phoneno1,
        phoneno2: phoneno2,
        coursename: coursename,
        fee: amount,
        paymentstatus: paymentstatus,
        rollno: rollno,
        passportsizephoto: passport,
        aadharcard: aadharcard,
      });

      if (res?.status) {
        setshowloader(false);
        Swal.fire("Great!", res?.data?.msg, "success");
      }

      console.log(res);
      if (res?.status === false) {
        setshowloader(false);
        Swal.fire("Great!", res?.msg, "success");
      }
    } catch (error) {
      setshowloader(false);
      Swal.fire("Error!", "Something Went wrong!!", "error");
    }
  };
  const getbranch = () => {
    try {
      serverInstance("branch", "get").then((res) => {
        if (res?.status) {
          setbranch(res?.data[0]);
        }
      });
    } catch (error) {}
  };

  const getcouses = () => {
    try {
      serverInstance("course", "get").then((res) => {
        if (res?.status) {
          setcourses(res?.data[0]);
        }
      });
    } catch (error) {}
  };
  useEffect(() => {
    getbranch();
    getcouses();
  }, []);

  return (
    <>
      <div className="Maincontainer">
        <div className="main_apply_div">
          <h2>Certificate Form</h2>
          <form onSubmit={handlesubmit}>
            <div className="multi_input_main">
              <input
                className="multi_input"
                type="text"
                placeholder="First Name"
                value={firstName}
                name="firstName"
                onChange={(e) => setfirstName(e.target.value)}
              />

              <input
                className="multi_input"
                type="text"
                placeholder="Last Name"
                value={address}
                name="address"
                onChange={(e) => setaddress(e.target.value)}
              />
            </div>

            <select
              className="multi_input_full"
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

            <label className="label_pass">Date of Birth</label>
            <input
              className="multi_input_full"
              type="date"
              value={dateofbirth}
              name="dateofbirth"
              onChange={(e) => setdateofbirth(e.target.value)}
            />
            <input
              className="multi_input_full"
              type="text"
              placeholder="Address"
              value={address}
              name="address"
              onChange={(e) => setaddress(e.target.value)}
            />

            <div className="multi_input_main">
              <input
                className="multi_input"
                type="text"
                placeholder="Contact No1"
                value={phoneno1}
                name="phoneno1"
                onChange={(e) => setphoneno1(e.target.value)}
              />

              <input
                className="multi_input"
                type="text"
                placeholder="Contact No2"
                value={phoneno2}
                name="phoneno2"
                onChange={(e) => setphoneno2(e.target.value)}
              />
            </div>
            <select
              className="multi_input_full"
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
            <input
              className="multi_input_full"
              type="text"
              placeholder="Roll No"
              value={rollno}
              name="rollno"
              onChange={(e) => setrollno(e.target.value)}
            />
            <select
              className="multi_input_full"
              onChange={(e) => setbranchname(e.target.value)}
            >
              <option value={""}>Select Branch</option>
              {branch &&
                branch?.map((item, index) => {
                  return (
                    <option key={index} value={item?.branchname}>
                      {item?.branchname}
                    </option>
                  );
                })}
            </select>
            <input
              className="multi_input_full"
              type="text"
              placeholder="Amount"
              value={amount}
              name="amount"
              onChange={(e) => setamount(e.target.value)}
            />
            <label className="label_pass">Passport Size Photo</label>
            <input
              className="multi_input_full"
              type="file"
              onChange={(e) => {
                setpassport(e.target.files[0]);
                setpreviewprofile1(URL.createObjectURL(e.target.files[0]));
              }}
            />
            <div className="multi_input_main">
              {previewprofile1 && (
                <img className="previewsize" src={previewprofile1} alt="cd" />
              )}
            </div>

            <label className="label_pass">Aadharcard</label>
            <input
              className="multi_input_full"
              type="file"
              onChange={(e) => {
                setaadharcard(e.target.files[0]);
                setpreviewprofile2(URL.createObjectURL(e.target.files[0]));
              }}
            />

            <div className="multi_input_main">
              {previewprofile2 && (
                <img className="previewsize1" src={previewprofile2} alt="cd" />
              )}
            </div>
            <button className="query_btn">
              {showloader ? (
                <CircularProgress
                  style={{
                    width: "21px",
                    height: "21px",
                    color: "white",
                  }}
                />
              ) : (
                "Pay"
              )}{" "}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Applyforcertificate;
