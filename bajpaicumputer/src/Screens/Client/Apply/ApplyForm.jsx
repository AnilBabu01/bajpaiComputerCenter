import React from "react";
import "./ApplyForm.css";
function ApplyForm() {
  return (
    <>
      <div className="Maincontainer">
        <div className="main_apply_div">
          <h2>Registeration Form</h2>
          <div>
            <label>Name</label>
            <div className="multi_input_main">
              <input
                className="multi_input"
                type="text"
                placeholder="Fist Name"
              />

              <input
                className="multi_input"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div>
              <div>
                <p>Gender</p>
                <select className="multi_input">
                  <option>Please Select</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <p>Date Of Birth</p>
                <input
                  className="multi_input"
                  type="date"
                  placeholder="Middle Name"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ApplyForm;
