import React from "react";
import { useSelector } from "react-redux";

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <h1 className="title">Dashboard</h1>
      <h2 className="subtitle">
        Welcome Back... <strong>{customer && customer.name} </strong>
      </h2>
      <h2 className="subtitle">
        No: Telp: <strong>{customer && customer.no_telp} </strong>
      </h2>
      <h2 className="subtitle">
        Email: <strong>{customer && customer.email} </strong>
      </h2>
    </div>
  );
};

export default Welcome;


        