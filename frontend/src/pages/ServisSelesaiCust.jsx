import React, { useEffect } from "react";
import Layout from "./LayoutCustomer";
import ListServisSelesaiCust from "../components/ListServisSelesaiCust";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const ServisSelesaiCust = () => {
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
      <ListServisSelesaiCust />
    </Layout>
  );
};

export default ServisSelesaiCust;
