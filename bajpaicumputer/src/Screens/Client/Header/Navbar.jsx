import React, { useState, useEffect } from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../../assets/lo.png";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const [isMobile, setisMobile] = useState(false);

  useEffect(() => {}, [isMobile]);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <nav className={style.navbar}>
          <div onClick={() => navigate("/")} className={style.logo}>
            <img src={logo} alt=" Logo" />
            <p className={style.logotext}>Bajpai Computer Institutions</p>
          </div>

          <ul
            className={isMobile ? style.mobilelinks : style.navlinks}
            onClick={() => setisMobile(false)}
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? style.active : style.about
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? style.active : style.about
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? style.active : style.about
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/apply/certificate"
                className={({ isActive }) =>
                  isActive ? style.active : style.about
                }
              >
                Apply for Certificate/Diploma
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/download/certificate"
                className={({ isActive }) =>
                  isActive ? style.active : style.about
                }
              >
                Download Certificate/Diploma
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/gallery"
                className={({ isActive }) =>
                  isActive ? style.active : style.about
                }
              >
                Gallery
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? style.active : style.about
                }
              >
                Login
              </NavLink>
            </li> */}
          </ul>
          <i
            style={{ marginRight: "20px" }}
            onClick={() => setisMobile(!isMobile)}
            className={style.mobileMenuIcon}
          >
            {isMobile ? (
              <>
                <CloseIcon
                  style={{ height: "40px" }}
                  className={style.burger}
                />
              </>
            ) : (
              <>
                <MenuIcon style={{ height: "40px" }} className={style.burger} />
              </>
            )}
          </i>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
