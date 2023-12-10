import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
      await axios.post(process.env.REACT_APP_API_KEY+`/customers`, {
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
    <section className="hero is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-4">
              <form onSubmit={saveCustomer}>
                <h1 className="title is-2">Register</h1>
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
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Nomor Telp</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      value={no_telp}
                      onChange={(e) => setNo_telp(e.target.value)}
                      placeholder="Nomor Telp"
                    />
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
                    <input
                      type="text"
                      className="input"
                      value={alamat}
                      onChange={(e) => setAlamat(e.target.value)}
                      placeholder="Alamat"
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
                    />
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
    </section>
  );
};

export default FormRegister;
