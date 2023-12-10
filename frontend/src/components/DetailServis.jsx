import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const DetailServis = () => {
  const [alamat, setAlamat] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [no_telp, setNoTelp] = useState("");
  const [name, setName] = useState("");
  const [dateServis, setDateServis] = useState("");
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
          process.env.REACT_APP_API_KEY+`/servisbyid/${id}`
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
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getServisById();
  }, [id]);

  return (
    <div>
      <h1 className="title">Detail Servis</h1>

      <div className="card is-shadowless">
        <div className="card-content">
          <div class="columns">
            <div class="column is-half">
              <p>Nama Customer : {name}</p>
              <p>No Telp/WA Customer : {no_telp}</p>
              <p>Email Cust : {email}</p>
            </div>
            <div class="column">
              <p>Tanggal Perbaikan : {dateServis}</p>
              <p>Provinsi : {provinsi}</p>
              <p>Alamat Servis : {alamat}</p>
            </div>
          </div>

          <table className="table is-bordered is-fullwidth">
            <thead>
              <tr>
                <th>No</th>
                <th>Nama Layanan</th>
                <th>Biaya</th>
              </tr>
            </thead>

            <tbody>
              {ser1 !== "Tidak" && (
                <tr>
                  <td>1</td>
                  <td>{ser1}</td>
                  <td>{hrg1}</td>
                </tr>
              )}
              {ser2 !== "Tidak" && (
                <tr>
                  <td>2</td>
                  <td>{ser2}</td>
                  <td>{hrg2}</td>
                </tr>
              )}
              {ser3 !== "Tidak" && (
                <tr>
                  <td>3</td>
                  <td>{ser3}</td>
                  <td>{hrg3}</td>
                </tr>
              )}

              {ser4 !== "Tidak" && (
                <tr>
                  <td>4</td>
                  <td>{ser4}</td>
                  <td>{hrg4}</td>
                </tr>
              )}

              <tr>
                <td></td>
                <td>Total Harga</td>
                <td>{totalHarga}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DetailServis;
