import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
function Receipt() {
  const [isdata, setisData] = useState("");
  const location = useLocation();
  useEffect(() => {
    if (location.state) {
      setisData(location.state?.data);
      console.log("from receipt", location.state?.data);
    }
  }, []);

  return (
    <>
      <div className="Maincontainerreceipt">
        <div>
          <h1>Receipt No</h1>
        </div>
      </div>
    </>
  );
}

export default Receipt;
