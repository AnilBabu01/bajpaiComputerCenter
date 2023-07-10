import React, { useState, useEffect } from "react";

function View({ setOpen, updatedata }) {
  const [studentname, setstudentname] = useState("");
  const [registrationdate, setregistrationdate] = useState("");
  const [dateofbirth, setdateofbirth] = useState("");
  const [Gender, setGender] = useState("");
  const [phoneno1, setphoneno1] = useState("");
  const [phoneno2, setphoneno2] = useState("");
  const [fee, setfee] = useState("");
  const [paymentstatus, setpaymentstatus] = useState("");
  const [transcationid, settranscationid] = useState("");
  const [course, setcourse] = useState("");
  const [rollno, setrollno] = useState("");

  useEffect(() => {
    if (updatedata) {
      setregistrationdate(updatedata?.date);
      setstudentname(updatedata?.firstname);
      setdateofbirth(updatedata?.dateofbirth);
      setGender(updatedata?.gender);
      setphoneno1(updatedata?.phoneno1);
      setphoneno2(updatedata?.phoneno2);
      setcourse(updatedata?.coursename);
      setpaymentstatus(updatedata?.paymentstatus);
      setrollno(updatedata?.rollno);
      setfee(updatedata?.fee);
      settranscationid(updatedata?.transactionid);
    }
  }, []);

  return (
    <>
      <div className="add_srollerbaar">
        <div className="cash-donation-div">
          <div className="cash-donation-container-innser">
            <form>
              <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
                <label htmlFor="dharamshalaname">Registration Date</label>
                <input
                  disabled={true}
                  style={{ width: "100%", marginTop: "0.2rem" }}
                  type="textarea"
                  id="dharamshalaname"
                  className="forminput_add_user10"
                  value={registrationdate}
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
                <label htmlFor="dharamshalaname">Fee</label>
                <input
                  disabled={true}
                  style={{ width: "100%", marginTop: "0.2rem" }}
                  type="textarea"
                  id="dharamshalaname"
                  className="forminput_add_user10"
                  value={fee}
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
                <label htmlFor="dharamshalaname">Payment Status</label>
                <input
                  disabled={true}
                  style={{ width: "100%", marginTop: "0.2rem" }}
                  type="textarea"
                  id="dharamshalaname"
                  className="forminput_add_user10"
                  value={
                    paymentstatus === 1 ? "Payment Successfull" : "Payment Fail"
                  }
                />
              </div>
              <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
                <label htmlFor="dharamshalaname">Transaction Id</label>
                <input
                  disabled={true}
                  style={{ width: "100%", marginTop: "0.2rem" }}
                  type="textarea"
                  id="dharamshalaname"
                  className="forminput_add_user10"
                  value={transcationid}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default View;
