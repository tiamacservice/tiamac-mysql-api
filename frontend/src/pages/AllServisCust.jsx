import React, { useEffect } from "react";
import Layout from "./LayoutCustomer";
import ListAllServisCust from "../components/ListAllServisCust";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const AllServisCust = () => {
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
      <ListAllServisCust />
    </Layout>
  );
};

export default AllServisCust;
