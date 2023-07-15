import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CallMadeIcon from "@mui/icons-material/CallMade";
import Alert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Sidebar.css";
function Sidebar() {
  const navigate = useNavigate();
  const [click, setclick] = useState(false);
  const ref = useRef(null);
  const [logout, setlogout] = useState(false);
  const success = "success";
  useEffect(() => {
    // setshowadmin(true);
    // document.addEventListener("click", close);
    // return () => document.addEventListener("click", close);
  }, []);

  // const close = (e) => {
  //   setclick(e && e.target === ref.current);
  // };
  const handclick = () => setclick(!click);

  const logoutt = () => {
    localStorage.removeItem("tokengame");
    navigate("/adminlogin");
    Swal.fire("Great!", "Logout Successfully", "success");
  };
  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">
          <MenuIcon onClick={handclick} ref={ref} />
        </div>

        <div onClick={() => logoutt()} className="profilediv">
          <p>Logout</p>
        </div>
        <div className={click ? "open1 " : "menu-div"}>
          <ul className="nav-menu" onClick={handclick}>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-nav-link" : "nav-link"
                }
                to="/dashboard"
              >
                <DashboardIcon />
                <span className="linkspan"> Dashboard</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-nav-link" : "nav-link"
                }
                to="/admin/Addslider"
              >
                <CallMadeIcon />
                <span className="linkspan">Add Slider</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-nav-link" : "nav-link"
                }
                to="/admin/Addstudent"
              >
                <CallMadeIcon />
                <span className="linkspan">Add Student</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-nav-link" : "nav-link"
                }
                to="/admin/AddCourse"
              >
                <CallMadeIcon />
                <span className="linkspan">Add Courses</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-nav-link" : "nav-link"
                }
                to="/admin/Enquriy"
              >
                <PersonAddIcon />
                <span className="linkspan">Enquiry</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-nav-link" : "nav-link"
                }
                to="/admin/Registration"
              >
                <CallMadeIcon />
                <span className="linkspan">Registrations</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-nav-link" : "nav-link"
                }
                to="/admin/Certificate"
              >
                <CallMadeIcon />
                <span className="linkspan">Certificate</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-nav-link" : "nav-link"
                }
                to="/admin/MasterTap"
              >
                <CallMadeIcon />
                <span className="linkspan">Masters</span>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-nav-link" : "nav-link"
                }
                to="/admin/Addword"
              >
                <CallMadeIcon />
                <span className="linkspan">Add Works</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active-nav-link" : "nav-link"
                }
                to="/admin/Galleryadmin"
              >
                <CallMadeIcon />
                <span className="linkspan">Add Gallery</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      {logout ? (
        <Alert variant="filled" severity={success}>
          you have logout successfully
        </Alert>
      ) : (
        ""
      )}
    </>
  );
}

export default Sidebar;
