import React, { useState, useEffect } from "react";

function View({ setOpen, updatedata }) {
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

  useEffect(() => {
    if (updatedata) {
      setbranch(updatedata?.branch);
      setname(updatedata?.fullname);
      setgender(updatedata?.gender);
      setphoneno(updatedata?.phoneno1);
      setcoursename(updatedata?.coursename);
      setrollno(updatedata?.rollno);
      setfathersname(updatedata?.fathersname);
      setaddress(updatedata?.address);
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
                type="text"
                id="dharamshalaname"
                placeholder="Enter the Student Name"
                className="forminput_add_user10"
                value={name}
                disabled={true}
              />
            </div>
            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Gender</label>
              <input
                type="text"
                id="dharamshalaname"
                placeholder="Enter the Student Name"
                className="forminput_add_user10"
                value={gender}
                disabled={true}
              />
            </div>
            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Father's Name</label>
              <input
                type="text"
                id="dharamshalaname"
                placeholder="Enter the Father's Name"
                className="forminput_add_user10"
                value={fathersname}
                disabled={true}
              />
            </div>

            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Branch Name</label>
              <input
                type="text"
                id="dharamshalaname"
                placeholder="Enter the Student Name"
                className="forminput_add_user10"
                value={branch}
                disabled={true}
              />
            </div>
            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Phone No</label>
              <input
                type="text"
                id="dharamshalaname"
                placeholder="Enter the Phone no"
                className="forminput_add_user10"
                value={phoneno}
                disabled={true}
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
                disabled={true}
              />
            </div>
            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Course </label>
              <input
                type="text"
                id="dharamshalaname"
                placeholder="Enter the Address"
                className="forminput_add_user10"
                value={coursename}
                disabled={true}
              />
            </div>
            <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
              <label htmlFor="dharamshalaname">Roll No</label>
              <input
                type="text"
                id="dharamshalaname"
                placeholder="Enter the Roll No"
                className="forminput_add_user10"
                value={rollno}
                disabled={true}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default View;
