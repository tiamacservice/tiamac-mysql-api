import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role, setRole] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post(process.env.REACT_APP_API_KEY + `/users`, {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        role: role,
      });
      navigate("/users");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="box">
      <div className="card is-shadowless">
        <div className="card-content">
          <h1 className="title">Staff</h1>
          <h2 className="subtitle">Add New Staff</h2>
          <div className="content">
            <form onSubmit={saveUser}>
              <p className="has-text-centered">{msg}</p>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Email</label>
                <div className="control">
                  <input
                    type="email"
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="*******"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Confirm Password</label>
                <div className="control">
                  <input
                    type="password"
                    className="input"
                    value={confPassword}
                    onChange={(e) => setConfPassword(e.target.value)}
                    placeholder="*******"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Role</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option>Pilih Role</option>
                      <option value="admin">Admin</option>
                      <option value="teknisi">Teknisi</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success ">
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormAddUser;
