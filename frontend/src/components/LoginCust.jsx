import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginCustomer, reset } from "../features/authSlice";
import { NavLink } from "react-router-dom";
import logo from "../assets/logoactiam.png";

const LoginCust = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { customer, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (customer || isSuccess) {
      navigate("/dashboardcust");
    }
    dispatch(reset());
  }, [customer, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginCustomer({ email, password }));
  };

  return (
    <div className="div  logincust is-fullheight">
      <section className="container  ">
        <div className="columns is-multiline ">
          <div className="column is-8 is-offset-2 register py-0">
            <div className="columns">
              <div className="column left" style={{ padding: 72 }}>
                <img src={logo} alt="logotiam" className="pt-5" />
              </div>
              <div
                className="column right has-text-centered"
                style={{ padding: 72 }}
              >
                <h1 className="title is-10">Sign In</h1>
                <p className="description is-size-7 is-italic">
                  masukkan email dan password anda
                </p>
                <form onSubmit={Auth}>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-normal"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <input
                        className="input is-normal"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                      />
                    </div>
                  </div>
                  {isError && (
                    <p className="has-text-centered my-1 has-text-danger">
                      {message}
                    </p>
                  )}
                  <button type="submit" className="button is-info is-fullwidth">
                    {isLoading ? "Loading..." : "Login"}
                  </button>
                  <small>
                    <em>or</em>
                  </small>
                  <NavLink
                    to="/loginstaff"
                    className="button is-block is-danger is-fullwidth is-normal mt-1"
                  >
                    Login Staff
                  </NavLink>
                </form>
              </div>
            </div>
          </div>
          <div className="column is-8 is-offset-2">
            <br />
            <nav className="level">
              <div className="level-left">
                <div className="level-item">
                  <span className="icon">
                    <i className="fab fa-twitter"></i>
                  </span>{" "}
                  &emsp;
                  <span className="icon">
                    <i className="fab fa-facebook"></i>
                  </span>{" "}
                  &emsp;
                  <span className="icon">
                    <i className="fab fa-instagram"></i>
                  </span>{" "}
                  &emsp;
                  <span className="icon">
                    <i className="fab fa-github"></i>
                  </span>{" "}
                  &emsp;
                  <span className="icon">
                    <i className="fas fa-envelope"></i>
                  </span>
                </div>
              </div>
              <div className="level-right">
                <small className="level-item">&copy; Ryan Andreas.</small>
              </div>
            </nav>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginCust;
