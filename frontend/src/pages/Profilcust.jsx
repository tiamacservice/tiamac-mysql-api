import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMeCust, LogOut, reset } from "../features/authSlice";
import Navbar from "../components/NavbarCust";

const Profilcust = () => {
  const { customer } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  useEffect(() => {
    dispatch(getMeCust());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  return (
    <div>
      <Navbar />
      <section className="hero is-fullheight contact">
        <div className="hero-body">
          <div className="box">
            <h1 className="title is-1 has-text-black-bis ">Profile Cust</h1>
            <p className="is-size-4">
              Nama : <strong>{customer && customer.name} </strong>
            </p>
            <p className="is-size-4">
              Email: <strong>{customer && customer.email} </strong>
            </p>
            <p className="is-size-4">
              Nomor Telp : <strong>{customer && customer.no_telp} </strong>
            </p>
            <p className="is-size-4">
              Alamat : <strong>{customer && customer.alamat}</strong> provinsi{" "}
              <strong>{customer && customer.provinsi}</strong>
            </p>
            <button class="button is-link">Edit</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profilcust;
