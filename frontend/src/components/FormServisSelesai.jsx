import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../assets/css/konfirmasi.css";

const FormKonfirmasiSelesai = () => {
  const [alamat, setAlamat] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [no_telp, setNoTelp] = useState("");
  const [namaTek, setNamaTeknisi] = useState("");
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
        setNamaTeknisi(response.data.user.name);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getServisById();
  }, [id]);

  const KonfirmasiSelesai = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(
        process.env.REACT_APP_API_KEY + `/konfirmasiselesai/${id}`,
        {
          status: "Selesai",
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
    <div className="box">
      <div className="card is-shadowless konfirmasi">
        <div className="card-content">
          <h1 className="title">Konfirmasi Servis Selesai</h1>
          <h2 className="subtitle">
            Teknisi mengkonfirmasi jika proses servis sudah selesai
          </h2>
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
                    <th className="is-centered	th">{namaTek}</th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <hr className="border" />
          <div className="content">
            <form onSubmit={KonfirmasiSelesai}>
              <p className="has-text-center">{msg}</p>

              <table className="table is-bordered is-fullwidth">
                <thead>
                  <tr>
                    <th className="">No</th>
                    <th className="">Nama Layanan</th>
                    <th className="">Biaya</th>
                  </tr>
                </thead>

                <tbody>
                  {ser1 !== "Tidak" && (
                    <tr>
                      <td className="bot">1</td>
                      <td className="bot">{ser1}</td>
                      <td className="bot">Rp.{hrg1}</td>
                    </tr>
                  )}
                  {ser2 !== "Tidak" && (
                    <tr>
                      <td className="bot">2</td>
                      <td className="bot">{ser2}</td>
                      <td className="bot">Rp.{hrg2}</td>
                    </tr>
                  )}
                  {ser3 !== "Tidak" && (
                    <tr>
                      <td className="bot">3</td>
                      <td className="bot">{ser3}</td>
                      <td className="bot">Rp.{hrg3}</td>
                    </tr>
                  )}

                  {ser4 !== "Tidak" && (
                    <tr>
                      <td className="bot">4</td>
                      <td className="bot">{ser4}</td>
                      <td className="bot">Rp.{hrg4}</td>
                    </tr>
                  )}

                  <tr>
                    <td colSpan="2" className="bot  has-text-weight-bold">
                      Total Harga
                    </td>

                    <td className="bot has-text-weight-bold">
                      Rp.{totalHarga}
                    </td>
                  </tr>
                </tbody>
              </table>
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

export default FormKonfirmasiSelesai;
