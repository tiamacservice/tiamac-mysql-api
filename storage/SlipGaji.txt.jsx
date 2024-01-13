import React, { useState, useEffect } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useNavigate, useParams } from "react-router-dom";
import "../css/slipgaji.css";

const SlipGaji = () => {
  const [periode, setPeriode] = useState("");
  const [izin, setIzin] = useState("");
  const [alpha, setAlpha] = useState("");
  const [bonus, setBonus] = useState("");
  const [hadir, setHadir] = useState("");
  const [name, setName] = useState("Nama");
  const [email, setEmail] = useState("");
  const [nik, setNik] = useState("NIK");
  const [gender, setGender] = useState("");
  const [jabatan, setJabatan] = useState("Jabatan");
  const [gaji_pokok, setGaji_pokok] = useState("");
  const [gaji_bersih, setgaji_bersih] = useState("");
  const [tunjangan, setTunjangan] = useState("");
  const [potongan, setPotongan] = useState("");
  const [role, setRole] = useState("");
  const [gaji_id, setId] = useState();

  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();
  const [msg, setMsg] = useState("");
  const { id } = useParams();

  const downloadPDF = () => {
    const capture = document.querySelector(".slipgaji");
    setLoader(true);
    html2canvas(capture).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF("p", "mm", "a4");
      const componentWidth = doc.internal.pageSize.getWidth();
      const componentHeight = doc.internal.pageSize.getHeight();
      doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
      setLoader(false);
      doc.save("slipgaji.pdf");
    });
  };

  let a = gaji_id + tunjangan;
  let b = potongan;

  useEffect(() => {
    const getGajiById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/gaji/${id}`);
        setPeriode(response.data.periode);
        setIzin(response.data.izin);
        setAlpha(response.data.alpha);
        setBonus(response.data.bonus);
        setHadir(response.data.hadir);
        setName(response.data.user.name);
        setEmail(response.data.user.email);
        setNik(response.data.user.nik);
        setId(response.data.id);
        setJabatan(response.data.user.jabatan);
        setGaji_pokok(response.data.user.gaji_pokok);
        setTunjangan(response.data.user.tunjangan);
        setPotongan(response.data.potongan);
        setgaji_bersih(response.data.gaji_bersih);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getGajiById();
  }, [id]);

  {
    a = gaji_pokok + tunjangan + bonus;
    b = potongan;
  }

  return (
    <div className="container">
      <div className="slipgaji box  ">
        <h1 className="title mt-4 has-text-centered">
          PT. CITRA POWERINDO SAKTI
        </h1>

        <h2 className="subtitle m-1 has-text-centered">Slip Gaji Karyawan</h2>
        <hr className="border" />
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <th className="is-centered th">Nama</th>
              <th className="is-centered th">:</th>
              <th className="is-centered th">{name}</th>
            </tr>
            <tr>
              <th className="is-centered th">NIK</th>
              <th className="is-centered th">:</th>
              <th className="is-centered th">{nik}</th>
            </tr>
            <tr>
              <th className="is-centered th">Jabatan</th>
              <th className="is-centered th">:</th>
              <th className="is-centered th">{jabatan}</th>
            </tr>
            <tr>
              <th className="is-centered th">Priode</th>
              <th className="is-centered th">:</th>
              <th className="is-centered th">{periode}</th>
            </tr>
          </tbody>
        </table>
        <div className="columns">
          <div className="column is-half pr-6">
            <table className="table is-fullwidth">
              <thead>
                <th className="has-text-weight-bold is-underlined	">
                  PENGHASILAN
                </th>
              </thead>
              <tbody>
                <tr>
                  <th className="is-centered th">Gaji Pokok</th>
                  <th className="is-centered has-text-right	 th">=</th>
                  <th className="is-centered has-text-right	 th">
                    {gaji_pokok}
                  </th>
                </tr>
                <tr>
                  <th className="is-centered th">Tunjangan</th>
                  <th className="is-centered has-text-right	 th">=</th>
                  <th className="is-centered  has-text-right	th">{tunjangan}</th>
                </tr>
                <tr>
                  <th className="is-centered th">Bonus</th>
                  <th className="is-centered has-text-right th">=</th>
                  <th className="is-centered has-text-right th">{bonus}</th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="column pr-5">
            <table className="table is-fullwidth">
              <thead>
                <th className="has-text-weight-bold is-underlined	">POTONGAN</th>
              </thead>
              <tbody>
                <tr>
                  <th className="is-centered th">Alpha ({alpha})</th>
                  <th className="is-centered has-text-right	th">=</th>
                  <th className="is-centered has-text-right	th">{potongan}</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="columns totalab">
          <div className="column is-half has-text-centered has-text-weight-bold	">
            Total (A) Rp.{a}
          </div>
          <div className="column has-text-weight-bold has-text-centered">
            Total (A) Rp.{b}
          </div>
        </div>
        <div className="columns gajibersih">
          <div className="column is-half has-text-centered has-text-weight-bold	">
            PENERIMAAN BERSIH (A-B)
          </div>
          <div className="column has-text-weight-bold">=</div>
          <div className="column has-text-weight-bold has-text-right pr-5">
            Rp{gaji_bersih}
          </div>
        </div>
        <div class="columns mt-5">
          <div class="column"></div>
          <div class="column"></div>
          <div class="column is-one-quarter has-text-right ">
            <div className="div">
              <div className="div mb-6">Diterima Oleh,</div>
              <br />
              <div className="div mt-6 is-underlined">{name}</div>
            </div>
          </div>
        </div>
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
          <div
            className="button is-fullwidth mx-6 is-success"
            onClick={downloadPDF}
            disabled={!(loader === false)}
          >
            {loader ? <span>Downloading</span> : <span>Download</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlipGaji;
