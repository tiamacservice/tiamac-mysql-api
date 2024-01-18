import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import logo from "../assets/logo-at.png";

import "../assets/css/invoice.css";

const DetailServis = () => {
  const [alamat, setAlamat] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [no_telp, setNoTelp] = useState("");
  const [name, setName] = useState("");
  const [dateServis, setDateServis] = useState("");
  const [namaKar, setNamaKar] = useState("");
  const [email, setEmail] = useState("");
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
        setEmail(response.data.customer.email);
        setTotalHarga(response.data.totalHarga);
        setNamaKar(response.data.user.name);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getServisById();
  }, [id]);

  return (
    <div className="container">
      <div className="invoice box  ">
        <div class="columns pb-0">
          <div class="column is-one-quarter">
            <img src={logo} width="130" height="28" alt="logo" />
          </div>
          <div class="column">
            <h1 className="head">AC TIAM</h1>

            <h2 className=" subhead">
              LTC GLODOK, Lt. UG Blok B11 No.6 Jl.Hayam Wuruk No.127,
            </h2>
            <h2 className=" subhead">Jakarta Barat - 11180</h2>
            <h2 className=" subhead">
              Telp : +62 812-5653-4837 E-mail : ac.tiam2610@gmail.com
            </h2>
          </div>
        </div>

        <hr className="border" />
        <div>
          <table className="table is-fullwidth">
            <thead></thead>
            <tbody>
              <tr>
                <th className="is-centered th top">Atas Nama</th>
                <th className="is-centered th top">:</th>
                <th className="is-centered th top">{name}</th>
                <th className="is-centered th top">Tanggal Perbaikan</th>
                <th className="is-centered th top">:</th>
                <th className="is-centered th top">{dateServis}</th>
              </tr>
              <tr>
                <th className="is-centered th top">No Telp </th>
                <th className="is-centered th top">:</th>
                <th className="is-centered th top">{no_telp}</th>
                <th className="is-centered th top">Nama Teknisi</th>
                <th className="is-centered th top">:</th>
                <th className="is-centered th top">{namaKar}</th>
              </tr>
              <tr>
                <th className="is-centered th top">Alamat Servis</th>
                <th className="is-centered th top">:</th>
                <th colSpan="3" className="is-centered th top">
                  {alamat}
                </th>
              </tr>
            </tbody>
          </table>
        </div>
        <hr className="border" />
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

              <td className="bot has-text-weight-bold">Rp.{totalHarga}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="columns">
        <div class="column is-half">
          <div
            onClick={() => navigate(-1)}
            className="button is-fullwidth mx-6 is-warning"
          >
            Back
          </div>
        </div>
        <div class="column">
          <div className="button is-fullwidth mx-6 is-success">Download</div>
        </div>
      </div>
    </div>
  );
};

export default DetailServis;
