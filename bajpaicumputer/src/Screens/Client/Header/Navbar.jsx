import React, { useState, useEffect } from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../../assets/lo.png";
const Navbar = () => {
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
          <div className={style.logo}>
            <img src={logo} alt=" Logo" />
            <p className={style.logotext}>Bajpai Computer Institution</p>
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
                to="/policy"
                className={({ isActive }) =>
                  isActive ? style.active : style.about
                }
              >
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? style.active : style.about
                }
              >
                Login
              </NavLink>
            </li>
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
