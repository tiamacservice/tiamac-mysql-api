import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Customerlist = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers();
  }, []);

  const getCustomers = async () => {
    const response = await axios.get(
      process.env.REACT_APP_API_KEY + "/customers"
    );
    setCustomers(response.data);
  };

  const deleteUsers = async (customerId) => {
    await axios.delete(
      process.env.REACT_APP_API_KEY + `/customers/${customerId}`
    );
    getCustomers();
  };

  return (
    <div>
      <div className="box">
        <h1 className="title">Customer</h1>
        <h2 className="subtitle">List semua customer</h2>

        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Provinsi</th>
              <th>Alamat</th>
              <th>No Telp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer, index) => (
              <tr key={customer.uuid}>
                <td>{index + 1}</td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.provinsi}</td>
                <td className="td-alamat">{customer.alamat}</td>
                <td>{customer.no_telp}</td>
                <td>
                  <Link
                    to={`/users/edit/${customers.uuid}`}
                    className="button is-small is-info"
                  >
                    <i className="bx bxs-edit-alt"></i>
                  </Link>
                  <button
                    onClick={() => deleteUsers(customers.uuid)}
                    className="button is-small mx-1 is-danger"
                  >
                    <i className="bx bx-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customerlist;
