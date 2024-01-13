import { React, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";
import logo from "../assets/actiamx.png";
import "./../assets/css/navbar.css";
import { getMeCust } from "../features/authSlice";

export const NavbarCust = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { customer, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  const refreshPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    dispatch(getMeCust());
  }, [dispatch]);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  if (customer || isSuccess) {
    return (
      <div>
        <nav
          className="navbar navcust is-fixed-top has-shadow is-info "
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand ">
            <img className="is-rounded logo" src={logo} />

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
            <div className="navbar-start pl-3">
              <NavLink
                to={"/dashboardcust"}
                className="navbar-item has-text-weight-bold"
              >
                Home
              </NavLink>

              <NavLink
                to="/pricing"
                className="navbar-item has-text-weight-bold"
              >
                Pricing
              </NavLink>

              <NavLink
                to="/cust/contactus"
                className="navbar-item has-text-weight-bold"
              >
                Contact Us
              </NavLink>
            </div>

            <div className="navbar-end ">
              <div className="navbar-item has-dropdown is-hoverable">
                <div
                  className="navbar-link is-arrowless"
                  style={{ color: "black" }}
                >
                  Selamat Datang, {customer && customer.name}
                  <i className="ml-2 bx bx-chevron-down"></i>
                </div>

                <div className="navbar-dropdown ">
                  <NavLink to={"/listpesanan"} className="navbar-item">
                    Pesanan
                  </NavLink>
                  <NavLink to={"/profilcust"} className="navbar-item">
                    Profile
                  </NavLink>
                  <hr className="navbar-divider" />
                  <NavLink onClick={logout} to="/" className="navbar-item">
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
  } else {
    return (
      <div>
        <nav
          className="navbar navguest is-fixed-top has-shadow is-info "
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand ">
            <img className="is-rounded logo" src={logo} />

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
            <div className="navbar-start pl-3">
              <NavLink to="/" className="navbar-item has-text-weight-bold">
                Home
              </NavLink>

              <NavLink
                to="/pricing"
                className="navbar-item has-text-weight-bold"
              >
                Pricing
              </NavLink>

              <NavLink
                to="/cust/contactus"
                className="navbar-item has-text-weight-bold"
              >
                Contact Us
              </NavLink>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <NavLink to="/register" className="button is-primary">
                    Register
                  </NavLink>

                  <NavLink to="/logincustomer" className="button is-light">
                    Login
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </nav>
        ;
      </div>
    );
  }
};

export default NavbarCust;
