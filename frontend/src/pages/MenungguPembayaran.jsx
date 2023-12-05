import React, { useEffect } from "react";
import Layout from "./Layout";
import ProductList from "../components/ProductList";
import ListMenungguPembayaran from "../components/ListMenungguPembayaran";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const MenungguPembayaran = () => {
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
      <ListMenungguPembayaran />
    </Layout>
  );
};

export default MenungguPembayaran;
