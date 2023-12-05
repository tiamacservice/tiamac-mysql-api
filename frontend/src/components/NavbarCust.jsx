import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logoac.png";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";

export const NavbarCust = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { customer } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <nav
        className="navbar is-info"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a class="navbar-item">
            <img src={logo} width="112" height="28"></img>
          </a>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start mt-2">
            <NavLink to={"/dashboardcust"}>
              <a className="navbar-item">Home</a>
            </NavLink>

            <NavLink to={"/profilcust"}>
              <a className="navbar-item">Profil</a>
            </NavLink>

            <NavLink to={"/listpesanan"}>
              <a className="navbar-item">Pesanan</a>
            </NavLink>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <NavLink onClick={logout} to="/" className="button is-danger">
                  Logout
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
      ;
    </div>
  );
};

export default NavbarCust;
