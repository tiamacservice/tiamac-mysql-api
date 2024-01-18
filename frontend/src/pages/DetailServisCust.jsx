import React, { useEffect } from "react";
import Layout from "./LayoutCustomer";
import DetailServ from "../components/DetailServis";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMeCust } from "../features/authSlice";

const DetailServis = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMeCust());
  }, [dispatch]);

  //   useEffect(() => {
  //     if (isError) {
  //       navigate("/");
  //     }
  //   }, [isError, navigate]);

  return <DetailServ />;
};

export default DetailServis;
