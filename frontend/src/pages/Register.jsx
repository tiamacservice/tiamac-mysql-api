import React, { useEffect } from "react";
import FormRegister from "../components/FormRegister";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMeCust } from "../features/authSlice";

const AddCustomer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { customer, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    dispatch(getMeCust());
  }, [dispatch]);

  return <FormRegister />;
};

export default AddCustomer;
