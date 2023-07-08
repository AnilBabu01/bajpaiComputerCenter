import React from "react";
import "./Login.css";
function Login() {
  return (
    <>
      <div className="Maincontainer">
        <div className="main_apply_div">
          <h2>Login Here</h2>
          <div>
            <input
              className="multi_input_full"
              type="text"
              placeholder="Registration Number"
            />

            <input
              className="multi_input_full"
              type="text"
              placeholder="Password"
            />

            <button className="query_btn">Login</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
