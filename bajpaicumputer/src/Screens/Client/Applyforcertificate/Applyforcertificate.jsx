import React, { useState, useEffect } from "react";
import { serverInstance } from "../../../API/ServerInstance";
import { backendApiUrl } from "../../../config/config";
import CircularProgress from "@mui/material/CircularProgress";
import Swal from "sweetalert2";
import Moment from "moment-js";
import axios from "axios";
import { displayRazorpay } from "../../../RazorPay/RazorPay";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import CloseIcon from "@mui/icons-material/Close";
import PaymentSuccessfull from "./PaymentSuccessfull";
import "./Applyforcertificate.css";
const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  p: 0,
  boxShadow: 24,
  borderRadius: "5px",
};
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
  const [fathersname, setfathersname] = useState("");
  const [aadharcard, setaadharcard] = useState("");
  const [previewprofile1, setpreviewprofile1] = useState("");
  const [passport, setpassport] = useState("");
  const [previewprofile2, setpreviewprofile2] = useState("");
  const [branch, setbranch] = useState("");
  const [branchname, setbranchname] = useState("");
  const formData = new FormData();
  const [showadmin, setshowadmin] = useState(false);
  const [open, setOpen] = useState(false);
  const [resDetails, setresDetails] = useState("");
  const handleOpen = async (data) => {
    setresDetails(data);
    setOpen(true);
  };

  const handleClose = React.useCallback(() => setOpen(false), []);
  const handlesubmit = async (e) => {
    e.preventDefault();

    if (
      firstName &&
      lastname &&
      branchname &&
      gender &&
      address &&
      coursename &&
      amount &&
      rollno &&
      passport &&
      aadharcard &&
      fathersname
    ) {
      try {
        serverInstance("checkrollno", "POST", {
          rollno: rollno,
        }).then((res) => {
          if (res.status) {
            displayRazorpay(
              {
                ammount: amount,
                userid: 1,
              },
              (data) => {
                setshowloader(true);
                savedatainDb(data.razorpay_order_id);
              }
            );
          }
          if (res.status === false) {
            Swal.fire("Error!", res.msg, "error");
          }
        });
      } catch (error) {
        setshowloader(false);
        Swal.fire("Error!", error?.response?.data?.msg, "error");
        console.log(error);
      }
    } else {
      Swal.fire("Error!", "Please Fill All Details", "error");
    }
  };

  const savedatainDb = async (transactionid) => {
    formData.set("date", Moment(Date()).format("yyyy-MM-dd"));
    formData.set("branch", branchname);
    formData.set("firstname", firstName);
    formData.set("lastname", lastname);
    formData.set("gender", gender);
    formData.set("address", address);
    formData.set("dateofbirth", Moment(dateofbirth).format("yyyy-MM-dd"));
    formData.set("phoneno1", phoneno1);
    formData.set("phoneno2", phoneno2);
    formData.set("coursename", coursename);
    formData.set("phoneno2", phoneno2);
    formData.set("fee", amount);
    formData.set("paymentstatus", true);
    formData.set("transactionid", transactionid);
    formData.set("rollno", rollno);
    formData.set("aadharcard", aadharcard);
    formData.set("fathersname", fathersname);
    formData.set("passportsizephoto", passport);

    axios.defaults.headers.post[
      "Authorization"
    ] = `Bearer ${sessionStorage.getItem("tokengame")}`;

    const res = await axios.post(`${backendApiUrl}registration`, formData);

    if (res?.status) {
      setshowloader(false);
      handleOpen(res?.data?.data);

      console.log(res?.data?.data);
      // Swal.fire("Great!", res?.data?.msg, "success");
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

  const getfee = () => {
    try {
      serverInstance("fee", "get").then((res) => {
        if (res?.status) {
          setamount(res?.data[0]?.[0]?.fee);

          console.log(res?.data[0]);
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
    getfee();
  }, []);

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <Box sx={style2}>
            <div>
              <PaymentSuccessfull data={resDetails} setOpen={setOpen} />
            </div>
          </Box>
        </Fade>
      </Modal>
      <div className="Maincontainer">
        <div className="main_apply_div">
          <h2>Registration</h2>
          <form onSubmit={handlesubmit}>
            <div className="multi_input_main">
              <input
                required
                className="multi_input"
                type="text"
                placeholder="First Name"
                value={firstName}
                name="firstName"
                onChange={(e) => setfirstName(e.target.value)}
              />

              <input
                required
                className="multi_input"
                type="text"
                placeholder="Last Name"
                value={lastname}
                name="lastname"
                onChange={(e) => setlastname(e.target.value)}
              />
            </div>
            <input
              required
              className="multi_input_full"
              type="text"
              placeholder="Father's Name"
              value={fathersname}
              name="fathersname"
              onChange={(e) => setfathersname(e.target.value)}
            />
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
              required
              className="multi_input_full"
              type="date"
              value={dateofbirth}
              name="dateofbirth"
              onChange={(e) => setdateofbirth(e.target.value)}
            />
            <input
              required
              className="multi_input_full"
              type="text"
              placeholder="Address"
              value={address}
              name="address"
              onChange={(e) => setaddress(e.target.value)}
            />

            <div className="multi_input_main">
              <input
                required
                className="multi_input"
                type="text"
                placeholder="Contact No1"
                value={phoneno1}
                name="phoneno1"
                onChange={(e) => setphoneno1(e.target.value)}
              />

              <input
                required
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
              required
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
              required
              disabled={true}
              className="multi_input_full"
              type="text"
              placeholder="Amount"
              value={amount}
              name="amount"
              onChange={(e) => setamount(e.target.value)}
            />
            <label className="label_pass">Passport Size Photo (120KB)</label>
            <input
              className="multi_input_full"
              type="file"
              onChange={(e) => {
                const file = e.target.files[0];
                const maxFileSize = 1 * 1024 * 1024; // 5 MB in bytes

                if (file && file.size > maxFileSize) {
                  alert("File size exceeds the limit of 5 MB.");
                  e.target.value = ""; // Clear the file input
                  setpassport(e.target.files[0]);
                  setpreviewprofile1(URL.createObjectURL(e.target.files[0]));
                  return;
                } else {
                  setpassport(file);
                  setpreviewprofile1(URL.createObjectURL(file));
                }
              }}
            />
            <div className="multi_input_main">
              {previewprofile1 && (
                <img className="previewsize" src={previewprofile1} alt="cd" />
              )}
            </div>

            <label className="label_pass">Aadharcard (1 MB)</label>
            <input
              required
              className="multi_input_full"
              type="file"
              onChange={(e) => {
                const file = e.target.files[0];
                const maxFileSize = 1 * 1024 * 1024; // 5 MB in bytes

                if (file && file.size > maxFileSize) {
                  alert("File size exceeds the limit of 5 MB.");
                  e.target.value = ""; // Clear the file input
                  setaadharcard(null);
                  setpreviewprofile2(URL.createObjectURL(null));
                  return;
                } else {
                  setaadharcard(file);
                  setpreviewprofile2(URL.createObjectURL(file));
                }
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
