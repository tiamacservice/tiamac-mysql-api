import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../assets/css/konfirmasi.css";

const FormEditProduct = () => {
  const [alamat, setAlamat] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [no_telp, setNoTelp] = useState("");
  const [namaKar, setNamaKaryawan] = useState("");
  const [name, setName] = useState("");
  const [dateServis, setDateServis] = useState("");
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
  const { id } = useParams();

  useEffect(() => {
    const getServisById = async () => {
      try {
        const response = await axios.get(
          process.env.REACT_APP_API_KEY + `/servisbyid/${id}`
        );
        setSer1(response.data.ser1);
        setSer2(response.data.ser2);
        setSer3(response.data.ser3);
        setSer4(response.data.ser4);
        setHrg1(response.data.hrg1);
        setHrg2(response.data.hrg2);
        setHrg3(response.data.hrg3);
        setHrg4(response.data.hrg4);
        setAlamat(response.data.alamat);
        setNoTelp(response.data.customer.no_telp);
        setProvinsi(response.data.provinsi);
        setName(response.data.customer.name);
        setDateServis(response.data.dateServis);
        setTotalHarga(response.data.totalHarga);
        setNamaKaryawan(response.data.user.name);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getServisById();
  }, [id]);

  const konfirmasiTeknisi = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        process.env.REACT_APP_API_KEY + `/formkonfirmasiteknisi/${id}`,
        {
          ser1: ser1,
          ser2: ser2,
          ser3: ser3,
          ser4: ser4,
          hrg1: hrg1,
          hrg2: hrg2,
          hrg3: hrg3,
          hrg4: hrg4,
          status: "Menunggu Pembayaran",
          totalHarga: hrg1 + hrg2 + hrg3 + hrg4,
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
    <div className="">
      <h1 className="title">Konfirmasi Servis</h1>
      <h2 className="subtitle">
        Menyesuaikan layanan yang dipesan dengan keadaan kerusakan AC customer
      </h2>

      <div className="card is-shadowless konfirmasi">
        <div className="card-content">
          <hr className="border" />
          <div className="columns">
            <div className="column is-half pr-6">
              <table className="table ">
                <tbody>
                  <tr>
                    <th className="is-centered th">Nama Customer</th>
                    <th className="is-centered	 th">:</th>
                    <th className="is-centered	 th">{name}</th>
                  </tr>
                  <tr>
                    <th className="is-centered th">No Telp Customer</th>
                    <th className="is-centered	 th">:</th>
                    <th className="is-centered 	th">{no_telp}</th>
                  </tr>
                  <tr>
                    <th className="is-centered th">Tanggal Perbaikan</th>
                    <th className="is-centered th">:</th>
                    <th className="is-centered th">{dateServis}</th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="column pr-5">
              <table className="table">
                <tbody>
                  <tr>
                    <th className="is-centered th">Alamat Servis</th>
                    <th className="is-centered	th">:</th>
                    <th className="is-centered	th">{alamat}</th>
                  </tr>
                  <tr>
                    <th className="is-centered th">Provinsi</th>
                    <th className="is-centered	th">:</th>
                    <th className="is-centered	th">{provinsi}</th>
                  </tr>
                  <tr>
                    <th className="is-centered th">Nama Teknisi</th>
                    <th className="is-centered	th">:</th>
                    <th className="is-centered	th">{namaKar}</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <hr className="border" />
          <div className="content">
            <form onSubmit={konfirmasiTeknisi}>
              <p className="has-text-center">{msg}</p>

              <div className="field">
                <label className="label">Cuci AC</label>
                <div className="control">
                  <div className="select is-fullwidth">
                    <select
                      value={hrg1}
                      onChange={(e) => setHrg1(e.target.value, 10)}
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
                      onChange={(e) => setHrg2(e.target.value, 10)}
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
                <label className="label"></label>
                <div className="control">
                  Ganti Kapasitor
                  <div className="select is-fullwidth">
                    <select
                      value={hrg3}
                      onChange={(e) => setHrg3(e.target.value, 10)}
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

export default FormEditProduct;
