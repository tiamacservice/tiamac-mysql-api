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
      <h1 className="title">Dashboard</h1>
      <h2 className="subtitle">
        Welcome Back... <strong>{customer && customer.name} </strong>
      </h2>
      <h2 className="subtitle">
        No: Telp: <strong>{customer && customer.no_telp} </strong>
      </h2>
      <h2 className="subtitle">
        Email: <strong>{customer && customer.email} </strong>
      </h2>
    </div>
  );
};

export default Profilcust;
