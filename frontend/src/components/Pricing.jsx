import { React, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";
import logo from "../assets/actiamx.png";
import "./../assets/css/navbar.css";
import { getMeCust } from "../features/authSlice";
import "../assets/css/pricing.css";

export const Pricing = ({ children }) => {
  const dispatch = useDispatch();
  const { customer, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(getMeCust());
  }, [dispatch]);

  if (customer || isSuccess) {
    return (
      <section className="hero is-fullheight">
        <div className="pricing">
          <div className="container has-text-centered">
            <div className="columns is-8 is-variable ">
              <div className="column is-two-thirds has-text-left">
                <div className="box">
                  <p className="title">Price List</p>
                  <p className="subtitle">List biaya servis ac</p>
                  <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                    <thead>
                      <td width="321">
                        <p>
                          <strong>Jasa</strong>
                        </p>
                      </td>
                      <td width="281">
                        <p>
                          <strong>Harga</strong>
                        </p>
                      </td>
                    </thead>

                    <tbody>
                      <tr></tr>
                      <tr></tr>
                      <tr>
                        <td width="321">Cuci AC 0.5 - 1 PK</td>
                        <td width="281">Rp. 50.000</td>
                      </tr>
                      <tr>
                        <td width="321">Cuci AC 1.5 – 2 PK</td>
                        <td width="281">Rp. 60.000</td>
                      </tr>
                      <tr>
                        <td width="321">Isi freon 0.5 – 1 PK</td>
                        <td width="281">Rp. 150.000</td>
                      </tr>
                      <tr>
                        <td width="321">Isi freon 1.5 PK</td>
                        <td width="281">Rp. 200.000</td>
                      </tr>
                      <tr>
                        <td width="321">Isi freon 2 PK</td>
                        <td width="281">Rp. 250.000</td>
                      </tr>
                      <tr>
                        <td width="321">Las + ganti freon 0.5 – 1 PK</td>
                        <td width="281">Rp. 600.000</td>
                      </tr>
                      <tr>
                        <td width="321">Las + ganti freon 1.5 PK</td>
                        <td width="281">Rp. 700.000</td>
                      </tr>
                      <tr>
                        <td width="321">Las + ganti freon 2 PK</td>
                        <td width="281">Rp. 800.000</td>
                      </tr>
                      <tr>
                        <td width="321">Bongkar AC</td>
                        <td width="281">Rp 100.000</td>
                      </tr>
                      <tr>
                        <td width="321">Bongkar & pasang 0.5 - 1 PK</td>
                        <td width="281">Rp. 350.000</td>
                      </tr>
                      <tr>
                        <td width="321">Bongkar & pasang 1.5 PK</td>
                        <td width="281">Rp. 450.000</td>
                      </tr>
                      <tr>
                        <td width="321">Bongkar & pasang 2 PK</td>
                        <td width="281">Rp. 550.000</td>
                      </tr>
                      <tr>
                        <td width="321">Pasang AC 1.5 PK</td>
                        <td width="281">Rp. 450.000</td>
                      </tr>
                      <tr>
                        <td width="321">Pasang AC 2 PK</td>
                        <td width="281">Rp. 550.000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="column is-one-third has-text-left mt-6">
                <NavLink
                  to="/pesananbaru"
                  className="button is-link is-fullwidth has-text-weight-medium is-medium"
                >
                  Order Now
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="hero is-fullheight">
        <div className="pricing">
          <div className="container has-text-centered">
            <div className="columns is-8 is-variable ">
              <div className="column is-two-thirds has-text-left">
                <div className="box">
                  <p className="title">Price List</p>
                  <p className="subtitle">List biaya servis ac</p>
                  <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                    <thead>
                      <td width="321">
                        <p>
                          <strong>Jasa</strong>
                        </p>
                      </td>
                      <td width="281">
                        <p>
                          <strong>Harga</strong>
                        </p>
                      </td>
                    </thead>

                    <tbody>
                      <tr></tr>
                      <tr></tr>
                      <tr>
                        <td width="321">Cuci AC 0.5 - 1 PK</td>
                        <td width="281">Rp. 50.000</td>
                      </tr>
                      <tr>
                        <td width="321">Cuci AC 1.5 – 2 PK</td>
                        <td width="281">Rp. 60.000</td>
                      </tr>
                      <tr>
                        <td width="321">Isi freon 0.5 – 1 PK</td>
                        <td width="281">Rp. 150.000</td>
                      </tr>
                      <tr>
                        <td width="321">Isi freon 1.5 PK</td>
                        <td width="281">Rp. 200.000</td>
                      </tr>
                      <tr>
                        <td width="321">Isi freon 2 PK</td>
                        <td width="281">Rp. 250.000</td>
                      </tr>
                      <tr>
                        <td width="321">Las + ganti freon 0.5 – 1 PK</td>
                        <td width="281">Rp. 600.000</td>
                      </tr>
                      <tr>
                        <td width="321">Las + ganti freon 1.5 PK</td>
                        <td width="281">Rp. 700.000</td>
                      </tr>
                      <tr>
                        <td width="321">Las + ganti freon 2 PK</td>
                        <td width="281">Rp. 800.000</td>
                      </tr>
                      <tr>
                        <td width="321">Bongkar AC</td>
                        <td width="281">Rp 100.000</td>
                      </tr>
                      <tr>
                        <td width="321">Bongkar & pasang 0.5 - 1 PK</td>
                        <td width="281">Rp. 350.000</td>
                      </tr>
                      <tr>
                        <td width="321">Bongkar & pasang 1.5 PK</td>
                        <td width="281">Rp. 450.000</td>
                      </tr>
                      <tr>
                        <td width="321">Bongkar & pasang 2 PK</td>
                        <td width="281">Rp. 550.000</td>
                      </tr>
                      <tr>
                        <td width="321">Pasang AC 1.5 PK</td>
                        <td width="281">Rp. 450.000</td>
                      </tr>
                      <tr>
                        <td width="321">Pasang AC 2 PK</td>
                        <td width="281">Rp. 550.000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="column is-one-third has-text-left mt-6">
                <NavLink
                  to="/logincustomer"
                  className="button is-link is-fullwidth has-text-weight-medium is-medium"
                >
                  Silahkan Login Untuk Order
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
};

export default Pricing;
