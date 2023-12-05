import React, { useEffect } from "react";
import Layout from "./Layout";
import ProductList from "../components/ProductList";
import ListOnProsesServis from "../components/ListOnProsesServis";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const OnProsesServis = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  return (
    <Layout>
      <ListOnProsesServis />
    </Layout>
  );
};

export default OnProsesServis;
