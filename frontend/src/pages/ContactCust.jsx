import React, { useEffect } from "react";
import Layout from "./LayoutCustomer";
import ProductList from "../components/ProductList";
import NavbarCust from "../components/NavbarCust";
import ContactPage from "../components/ContactPage";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMeCust } from "../features/authSlice";

const ContactCust = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMeCust());
  }, [dispatch]);

  return (
    <div className="div">
      <div className="div">
        <NavbarCust />
        <div className="div">
          <ContactPage />
        </div>
      </div>
    </div>
  );
};

export default ContactCust;
