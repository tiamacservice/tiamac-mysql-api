import React, { useEffect } from "react";
import Layout from "./Layout";
import ProductList from "../components/ProductList";
import ListServisSelesai from "../components/ListServisSelesai";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const ServisSelesai = () => {
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
      <ListServisSelesai />
    </Layout>
  );
};

export default ServisSelesai;
