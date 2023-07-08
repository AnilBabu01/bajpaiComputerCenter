import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./Routes/MainRoutes";
import ScrollToTop from "./helpers/ScrollToTop";
function App() {
  const [showadmin, setshowadmin] = useState(false);
  return (
    <>
      {showadmin ? (
        ""
      ) : (
        <>
          <a
            href="https://wa.me/918923361130?text=Hi!%20I%20have%20visited%20your%20institutional%20site!"
            class="whatsapp_float"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa fa-whatsapp whatsapp-icon" />
          </a>

          <a href="/apply" class="whatsapp_float1">
            Enquiry
          </a>
        </>
      )}

      <Router>
        <ScrollToTop />
        <MainRoutes setshowadmin={setshowadmin} showadmin={showadmin} />
      </Router>
    </>
  );
}

export default App;
