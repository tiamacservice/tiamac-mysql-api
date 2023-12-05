import React, { useEffect } from "react";
import Welcome from "../components/Welcome";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMeCust } from "../features/authSlice";
import Layout from "./LayoutCustomer";

const ListPesanan = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);
  const { customer } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMeCust());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  return (
    <Layout>
      <div>
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
    </Layout>
  );
};

export default ListPesanan;
