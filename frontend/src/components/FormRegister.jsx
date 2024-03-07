import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../assets/css/Login.css";
import { NavLink } from "react-router-dom";
import Navbar from "./NavbarCust";

const FormRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [no_telp, setNo_telp] = useState("");
  const [alamat, setAlamat] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const saveCustomer = async (e) => {
    e.preventDefault();
    try {
      await axios.post(process.env.REACT_APP_API_KEY + `/customers`, {
        name: name,
        email: email,
        no_telp: no_telp,
        alamat: alamat,
        provinsi: provinsi,
        password: password,
        confPassword: confPassword,
      });
      navigate("/");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="div">
      <div className="div">
        <Navbar />
      </div>
      <div className="is-fullheight is-fullwidth pt-3 FormRegis">
        <div className="container p-6">
          <h1
            className="title has-text-centered 
          has-text-info"
          >
            Register
          </h1>
          <h2 className="subtitle has-text-centered">Sign Up Form</h2>
          <form onSubmit={saveCustomer}>
            <div className="field">
              <label className="label">Nama</label>
              <div
                className="control has-icons-left 
            has-icons-right"
              >
                <input
                  className="input is-success"
                  type="text"
                  placeholder="Masukkan nama anda"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Nomor Telp</label>
              <div
                className="control has-icons-left 
            has-icons-right"
              >
                <input
                  className="input is-success"
                  type="telp"
                  placeholder="Masukkan nomor telp anda"
                  value={no_telp}
                  onChange={(e) => setNo_telp(e.target.value)}
                  required
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-phone"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Email</label>
              <div
                className="control has-icons-left 
          has-icons-right"
              >
                <input
                  className="input is-success"
                  type="email"
                  placeholder="Masukkan email anda"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
            </div>

            <div className="field">
              <label className="label">Provinsi</label>
              <div className="control">
                <div className="select is-fullwidth">
                  <select
                    value={provinsi}
                    onChange={(e) => setProvinsi(e.target.value)}
                  >
                    <option>Pilih Provinsi</option>
                    <option value="Jakarta Timur">Jakarta Timur</option>
                    <option value="Jakarta Selatan">Jakarta Selatan</option>
                    <option value="Jakarta Utara">Jakarta Utara</option>
                    <option value="Jakarta Barat">Jakarta Barat</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <label className="label">Alamat</label>
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Alamat lengkap anda"
                  value={alamat}
                  onChange={(e) => setAlamat(e.target.value)}
                ></textarea>
              </div>
            </div>

            <div className="field is-horizontal">
              <div className="field-body">
                <div className="field">
                  <label className="label">Password</label>
                  <div
                    className="control has-icons-left 
          has-icons-right"
                  >
                    <input
                      className="input is-success"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-key"></i>
                    </span>
                  </div>
                </div>
                <div className="field">
                  <label className="label ">Confirm Password</label>
                  <div
                    className="control is-expanded has-icons-left 
          has-icons-right"
                  >
                    <input
                      className="input is-success"
                      type="password"
                      placeholder="Confirm Password"
                      value={confPassword}
                      onChange={(e) => setConfPassword(e.target.value)}
                      required
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-key"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <p className="has-text-centered">{msg}</p>
            <div className="field is-grouped">
              <div className="control">
                <button type="submit" className="button is-success">
                  Submit
                </button>
              </div>
              <div className="control">
                <NavLink to="/" className="button is-link is-light">
                  Cancel
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormRegister;
