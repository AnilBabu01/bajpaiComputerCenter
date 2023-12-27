import React from "react";
import "./ApplyForm.css";
function ApplyForm() {
  return (
    <>
      <div className="Maincontainer">
        <div className="main_apply_div">
          <h2>Enquiry Form</h2>
          <div>
            <div className="multi_input_main">
              <input
                className="multi_input"
                type="text"
                placeholder="First Name"
              />

              <input
                className="multi_input"
                type="text"
                placeholder="Last Name"
              />
            </div>

            <div className="multi_input_main">
              <select className="multi_input">
                <option>Please Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
              
              <input className="multi_input" type="date" />
            </div>
            <input
              className="multi_input_full"
              type="text"
              placeholder="Address"
            />

            <input
              className="multi_input_full"
              type="text"
              placeholder="Streeat Address"
            />
            <div className="multi_input_main">
              <input
                className="multi_input"
                type="text"
                placeholder="Contact No1"
              />

              <input
                className="multi_input"
                type="text"
                placeholder="Contact No2"
              />
            </div>
            <input
              className="multi_input_full"
              type="text"
              placeholder="Course"
            />
            <button className="query_btn">Enquiry</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplyForm;
