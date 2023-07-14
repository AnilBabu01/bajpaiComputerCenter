import React, { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import Moment from "moment-js";
import logo from "../../../assets/lo.png";
function Receipt() {
  const componentRef = useRef();
  const navigation = useNavigate();
  const [isdata, setisData] = useState("");
  const location = useLocation();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  useEffect(() => {
    if (location.state) {
      setisData(location.state?.data);
      console.log("from receipt", location.state?.data);
    }
  }, []);

  return (
    <>
      <div className="Maincontainerreceipt" ref={componentRef}>
        <div className="receiptcontent">
          <div className="header_receipt">
            <div className="header_receiptfccc">
              <img src={logo} alt=" Logo" />
              <p> BAJPAI INSTITUTIONS (Registration Receipt)</p>
            </div>
          </div>
          <div className="receiptcontentx">
            <div>
              <p>First Name</p>
              <p>Last Name</p>
              <p>gender</p>
              <p>date of birth</p>
              <p>Father's Name</p>
              <p>Course Name</p>
              <p>Roll No</p>
              <p>Address</p>
              <p>Payment Status</p>
              <p>Transaction Id</p>
            </div>

            <div>
              <p>{isdata[0]?.firstname}</p>
              <p>{isdata[0]?.lastname}</p>
              <p>{isdata[0]?.gender}</p>
              <p>{Moment(isdata[0]?.dateofbirth).format("dd-MM-yyyy")}</p>
              <p>{isdata[0]?.fathersname}</p>
              <p>{isdata[0]?.coursename}</p>
              <p>{isdata[0]?.rollno}</p>
              <p>{isdata[0]?.address}</p>
              <p>{isdata[0]?.paymentstatus === true ? "Success" : "Failed"}</p>
              <p>{isdata[0]?.transactionid}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="btn_div_receipt-DIV">
        <div className="btns-wrapper_receipt">
          <button className="btn-donation-status" onClick={() => handlePrint()}>
            Download Receipt
          </button>
          <button
            className="btn-donation-status"
            onClick={() => navigation("/")}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}

export default Receipt;
