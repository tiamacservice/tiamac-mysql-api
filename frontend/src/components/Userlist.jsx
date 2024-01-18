import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Userlist = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get(process.env.REACT_APP_API_KEY + `/users`);
    setUsers(response.data);
  };

  const deleteUsers = async (userId) => {
    await axios.delete(process.env.REACT_APP_API_KEY + `/users/${userId}`);
    getUsers();
  };

  return (
    <div>
      <div className="box">
        <h1 className="title">Staff</h1>
        <h2 className="subtitle">List semua staff</h2>

        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.uuid}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <Link
                    to={`/users/edit/${user.uuid}`}
                    className="button is-small is-info"
                  >
                    <i className="bx bxs-edit-alt"></i>
                  </Link>
                  <button
                    onClick={() => deleteUsers(user.uuid)}
                    className="button mx-1 is-small is-danger"
                  >
                    <i className="bx bx-trash"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link to="/users/add" className="button is-primary mb-2">
          <i class="bx bx-plus"></i> Tambah Staff Baru
        </Link>
      </div>
    </div>
  );
};

export default Userlist;
