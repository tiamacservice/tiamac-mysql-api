import React, { useEffect } from "react";
import Layout from "./LayoutCustomer";
import Welcome from "../components/Welcome";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getMeCust, LogOut, reset } from "../features/authSlice";
import Navbar from "../components/NavbarCust";
import FormPesanan from "../components/NewPesanan";

const NewPesanan = () => {
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
      <Navbar></Navbar>
      <FormPesanan></FormPesanan>
    </div>
  );
};

export default NewPesanan;
