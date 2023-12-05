import React from "react";
import Navbar from "../components/NavbarCust";
import Sidebar from "../components/Sidebarcust";

const LayoutCustomer = ({ children }) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="columns " style={{ minHeight: "100vh" }}>
        <div className="column is-2">
          <Sidebar />
        </div>
        <div className="column has-background-light">
          <main>{children}</main>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LayoutCustomer;
