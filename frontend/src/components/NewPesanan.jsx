import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewPesanan = () => {
  const [alamat, setAlamat] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [ser1, setSer1] = useState("");
  const [ser2, setSer2] = useState("");
  const [ser3, setSer3] = useState("");
  const [ser4, setSer4] = useState("");
  const [hrg1, setHrg1] = useState(0);
  const [hrg2, setHrg2] = useState(0);
  const [hrg3, setHrg3] = useState(0);
  const [hrg4, setHrg4] = useState(0);
  const [totalHarga, setTotalHarga] = useState(0);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const newservis = async (e) => {
    e.preventDefault();

    try {
      await axios.post(process.env.REACT_APP_API_KEY + `/newservis`, {
        ser1: ser1,
        ser2: ser2,
        ser3: ser3,
        ser4: ser4,
        hrg1: hrg1,
        hrg2: hrg2,
        hrg3: hrg3,
        hrg4: hrg4,
        provinsi: provinsi,
        alamat: alamat,
      });
      navigate("/listpesanan");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div class="box mt-5 mx-5">
      <div className="card is-shadowless">
        <div className="card-content">
          <h1 className="title">Pemesanan Layanan Servis AC</h1>
          <h2 className="subtitle">Booking New AC Service</h2>
          <div className="content">
            <form onSubmit={newservis}>
              <p calssName="has-text-center">{msg}</p>
              <div className="field">
                <label className="label">Alamat</label>
                <div className="control">
                  <input
                    type="textarea"
                    className="input"
                    value={alamat}
                    onChange={(e) => setAlamat(e.target.value)}
                    placeholder="Hanya untuk sekitar daerah jakarta"
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
                <label className="label">Cuci AC</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={hrg1}
                      onChange={(e) => {
                        setHrg1(e.target.value, 10);
                        setSer1(e.target.options[e.target.selectedIndex].text);
                        console.log(e.target);
                      }}
                    >
                      <option value={0}>Tidak</option>
                      <option value={50000}>Cuci AC 0.5 - 1 PK Rp50.000</option>
                      <option value={60000}>Cuci AC 1.5 - 2 PK Rp60.000</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">Bongkar/Pasang</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={hrg2}
                      onChange={(e) => {
                        setHrg2(e.target.value, 10);
                        setSer2(e.target.options[e.target.selectedIndex].text);
                      }}
                    >
                      <option value={0}>Tidak</option>
                      <option value={100000}>Bongkar AC Rp100.000</option>
                      <option value={350000}>
                        Pasang AC 0.5 - 1 PK Rp350.000
                      </option>
                      <option value={450000}>Pasang AC 1.5 PK Rp450.000</option>
                      <option value={550000}>Pasang AC 2 PK Rp550.000</option>
                      <option value={450000}>
                        Bongkar&Pasang AC 0.5 - 1 PK Rp450.000
                      </option>
                      <option value={550000}>
                        Bongkar&Pasang AC 1.5 PK Rp550.000
                      </option>
                      <option value={650000}>
                        Bongkar&Pasang AC 2 PK Rp650.000
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">Ganti Kapasitor</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={hrg3}
                      onChange={(e) => {
                        setHrg3(e.target.value, 10);
                        setSer3(e.target.options[e.target.selectedIndex].text);
                      }}
                    >
                      <option value={0}>Tidak</option>
                      <option value={250000}>
                        Ganti Kapasitor 0.5 - 1 PK Rp250.000
                      </option>
                      <option value={300000}>
                        Ganti Kapasitor 1.5 - 2 PK Rp300.000
                      </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label">Las & Isi Freon</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={hrg4}
                      onChange={(e) => setHrg4(e.target.value, 10)}
                    >
                      <option value={0}>Tidak</option>
                      <option value={150000}>
                        Isi Freon 0.5 - 1 PK Rp150.000
                      </option>
                      <option value={200000}>Isi Freon 1.5 PK Rp200.000</option>
                      <option value={250000}>Isi Freon 2 PK Rp250.000</option>
                      <option value={600000}>
                        Las & Ganti Freon 0.5 - 1 PK Rp600.000
                      </option>
                      <option value={700000}>
                        Las & Ganti Freon 1.5 PK Rp700.000
                      </option>
                      <option value={800000}>
                        Las & Ganti Freon 2 PK Rp800.000
                      </option>
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

export default NewPesanan;
