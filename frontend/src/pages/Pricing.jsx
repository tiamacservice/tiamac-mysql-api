import React, { useEffect } from "react";
import Navbar from "../components/NavbarCust";
import Pricing from "../components/Pricing";
import "../assets/css/contact.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMeCust, LogOut, reset } from "../features/authSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { customer, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(getMeCust());
  }, [dispatch]);

  return (
    <section>
      <div className="div">
        <Navbar />
      </div>
      <div className="div">
        <Pricing />
      </div>
    </section>
  );
};

export default Dashboard;
