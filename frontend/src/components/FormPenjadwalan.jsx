import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormPenjadwalan = () => {
  const [dateServis, setdateServis] = useState("");
  const [userId, setUserId] = useState("");
  const [listKaryawan, setListKaryawan] = useState([]);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getAllKaryawan();
    const getServisById = async () => {
      try {
        const response = await axios.get(
          process.env.REACT_APP_API_KEY + `/servisbyid/${id}`
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

  const getAllKaryawan = async () => {
    const response = await axios.get(
      process.env.REACT_APP_API_KEY + "/allkaryawan"
    );
    setListKaryawan(response.data);
  };

  const PenjadwalanServis = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        process.env.REACT_APP_API_KEY + `/penjadwalanservis/${id}`,
        {
          status: "Konfirmasi Teknisi",
          dateServis: dateServis,
          userId: userId,
        }
      );
      navigate("/dashboard");
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
                <div className="field">
                  <label className="label">Pilih Teknisi</label>
                  <div className="p"></div>
                  <div className="control">
                    <div className="select is-fullwidth">
                      <select
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                      >
                        <option value="">Pilih Karyawan</option>
                        {listKaryawan.map((karya) => (
                          <option value={karya.id}>
                            {karya.name} - {karya.email} - id:{karya.id}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
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
