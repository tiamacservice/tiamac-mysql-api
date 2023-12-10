import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormPenjadwalan = () => {
  const [dateServis, setdateServis] = useState("");
  const [userId, setUserId] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getServisById = async () => {
      try {
        const response = await axios.get(
          process.env.REACT_APP_API_KEY+`/servisbyid/${id}`
        );
        setdateServis(response.data.dateServis);
        setUserId(response.data.userId);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getServisById();
  }, [id]);

  const PenjadwalanServis = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(process.env.REACT_APP_API_KEY+`/penjadwalanservis/${id}`, {
        status: "Konfirmasi Teknisi",
        dateServis: dateServis,
        userId: userId,
      });
      navigate("/listpesanan");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Products</h1>
      <h2 className="subtitle">Edit Products</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={PenjadwalanServis}>
              <p className="has-text-center">{msg}</p>
              <div className="field">
                <label className="label">Tanggal Servis</label>
                <div className="control">
                  <input
                    type="date"
                    className="input"
                    value={dateServis}
                    onChange={(e) => setdateServis(e.target.value)}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Teknisi</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="UserId"
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-success ">
                    Konfirmasi
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

export default FormPenjadwalan;
