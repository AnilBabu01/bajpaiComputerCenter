import React from "react";
function DownloadCertificate() {
  return (
    <>
      <div className="Maincontainer">
        <div className="main_apply_div">
          <h2>Details</h2>
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
            <input
              className="multi_input_full"
              type="text"
              placeholder="Name"
            />

            <button className="query_btn">Enquiry</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DownloadCertificate;
