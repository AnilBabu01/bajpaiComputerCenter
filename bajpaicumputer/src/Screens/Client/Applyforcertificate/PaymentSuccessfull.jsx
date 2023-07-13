import React, { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import { useNavigate } from "react-router-dom";
import "./PaymentSuccessfull.css";
export default function PaymentStatusPage({ setOpen, data }) {
  const navigate = useNavigate();
  const [showdata, setshowdata] = useState(true);

  console.log("data is res", data);
  return (
    <>
      <div className="payment-status-page">
        <div className="payment-status-container">
          {data[0]?.transactionid ? (
            <CheckCircleIcon className="icon-success icon" />
          ) : (
            <ErrorIcon className="icon-failed icon" />
          )}
          <h2
            className={
              data[0]?.transactionid
                ? "payment-status"
                : "payment-status payment-status-failed"
            }
          >
            {data[0]?.transactionid ? "Payment Success!!" : "Payment Failed"}
          </h2>
          {data[0]?.transactionid && <h3>Paid Amount ₹ {data[0]?.fee}</h3>}
          {data[0]?.transactionid ? (
            <p className="payment-description">
              Your registration completed. Your transaction has been completed
              with &nbsp; {data[0]?.transactionid}
              <br />
            </p>
          ) : (
            <p className="payment-description">
              Your payment is failed.Don't worry if its deducted from you bank
              account then it will refund soon. You can donate again by{" "}
              <span onClick={() => navigate("/donation")}>clicking here</span>
            </p>
          )}

          {data[0]?.transactionid && (
            <>
              <div className="btns-wrapper">
                <button
                  className="btn-donation-status"
                  onClick={() =>
                    navigate("/admin/Receipt", {
                      state: {
                        data: data,
                      },
                    })
                  }
                >
                  Download Receipt
                </button>
                <button
                  className="btn-donation-status"
                  onClick={() => navigate("/")}
                >
                  Cancel
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
