import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CallMadeIcon from "@mui/icons-material/CallMade";
import Alert from "@mui/material/Alert";
import "./Sidebar.css";
function Sidebar() {
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

  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">
          <MenuIcon onClick={handclick} ref={ref} />
        </div>

        <div className="profilediv">
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
                <spna className="linkspan"> Dashboard</spna>
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
                <spna className="linkspan">Add Slider</spna>
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
                <spna className="linkspan">Add Courses</spna>
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
                <spna className="linkspan">Enquiry</spna>
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
                <spna className="linkspan">Registrations</spna>
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
                <spna className="linkspan">Certificate</spna>
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
                <spna className="linkspan">Masters</spna>
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
                <spna className="linkspan">Add Works</spna>
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
                <spna className="linkspan">Add Gallery</spna>
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
