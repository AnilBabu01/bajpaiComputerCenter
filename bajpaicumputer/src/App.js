import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoutes from "./Routes/MainRoutes";
import ScrollToTop from "./helpers/ScrollToTop";
function App() {
  return (
    <>
      <a
        href="https://wa.me/2348100000000"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-whatsapp whatsapp-icon" />
      </a>

      {/* <a
        href="tel:+9971863733"
        class="whatsapp_float1"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i class="fa fa-phone whatsapp-icon1" />
      </a> */}
      <a href="/apply" class="whatsapp_float1">
        Enquiry
      </a>

      <Router>
        <ScrollToTop />
        <MainRoutes />
      </Router>
    </>
  );
}

export default App;
