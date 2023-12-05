import React, { useEffect } from "react";
import Layout from "./LayoutCustomer";
import ProductList from "../components/ProductList";
import ListKonfirmasiCustomerCust from "../components/ListKonfirmasiCustomerCust";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const KonfirmasiCustomerCust = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  //   useEffect(() => {
  //     if (isError) {
  //       navigate("/");
  //     }
  //   }, [isError, navigate]);

  return (
    <Layout>
      <ListKonfirmasiCustomerCust />
    </Layout>
  );
};

export default KonfirmasiCustomerCust;
