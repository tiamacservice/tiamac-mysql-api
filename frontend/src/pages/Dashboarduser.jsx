import React, { useEffect } from "react";
import Layout from "./LayoutCustomer";
import Welcome from "../components/Welcome";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getMeCust, LogOut, reset } from "../features/authSlice";
import Navbar from "../components/NavbarCust";

const Dashboard = () => {
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
        Role <strong>{customer && customer.role} </strong>
      </h2>
      <h2 className="subtitle">
        Alamat <strong>{customer && customer.alamat} </strong>
      </h2>
      <NavLink to={"/pesananbaru"}>
        <button>Pesanan Baru</button>
      </NavLink>
    </div>
  );
};

export default Dashboard;
