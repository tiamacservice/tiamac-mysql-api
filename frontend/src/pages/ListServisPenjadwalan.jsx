import React, { useEffect } from "react";
import Layout from "./Layout";
import ProductList from "../components/ProductList";
import ListServis from "../components/ListServisPenjadwalan";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const ListServisPenjadwalan = () => {
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
      <ListServis />
    </Layout>
  );
};

export default ListServisPenjadwalan;
