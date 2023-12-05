import React, { useEffect } from "react";
import FormRegister from "../components/FormRegister";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../features/authSlice";

const AddCustomer = () => {
  return <FormRegister />;
};

export default AddCustomer;
