import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FormAddAbsensi = () => {
  const [periode, setPeriode] = useState("");
  const [izin, setIzin] = useState("");
  const [alpha, setAlpha] = useState("");
  const [bonus, setBonus] = useState("");
  const [hadir, setHadir] = useState("");
  const [msg, setMsg] = useState("");
  const [idKaryawan, setKaryawan] = useState("");
  const [listKaryawan, setListKaryawan] = useState([]);

  const [selected_name, setName] = useState("Nama");
  const [selected_email, setEmail] = useState("");
  const [selected_nik, setNik] = useState("NIK");
  const [selected_gender, setGender] = useState("");
  const [selected_jabatan, setJabatan] = useState("Jabatan");
  const [selected_gaji_pokok, setGaji_pokok] = useState("");
  const [selected_tunjangan, setTunjangan] = useState("");
  const [selected_role, setRole] = useState("");
  const [selected_id, setId] = useState(10);

  const navigate = useNavigate();

  useEffect(() => {
    getAllKaryawan();
  }, []);

  const getAllKaryawan = async () => {
    const response = await axios.get("http://localhost:5000/allKaryawan");
    setListKaryawan(response.data);
  };

  const getKaryawanById = async (id) => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setName(response.data.name);
    setId(response.data.id);
    setKaryawan(response.data.id);
    setEmail(response.data.email);
    setRole(response.data.role);
    setNik(response.data.nik);
    setGender(response.data.gender);
    setJabatan(response.data.jabatan);
    setGaji_pokok(response.data.gaji_pokok);
    setTunjangan(response.data.tunjangan);
  };
  let a =
    parseInt(selected_gaji_pokok) +
    parseInt(selected_tunjangan) +
    parseInt(bonus);
  let potongan = alpha * 100000;
  let b = potongan;
  let gaji_bersih = parseInt(a) - parseInt(b);

  const saveAbsensi = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/gaji", {
        userId: selected_id,
        periode: periode,
        izin: izin,
        alpha: alpha,
        hadir: hadir,
        bonus: bonus,
        potongan: potongan,
        gaji_bersih: gaji_bersih,
      });
      navigate("/absensi");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div>
      <h1 className="title">Absensi</h1>
      <h2 className="subtitle">Add New Absensi</h2>
      <div className="card is-shadowless">
        <div className="card-content">
          <div className="content">
            <form onSubmit={saveAbsensi}>
              <p className="has-text-center">{msg}</p>
              <div className="field">
                <label className="label">Pilih Karyawan</label>{" "}
                <div className="p"></div>
                <div className="control">
                  <div className="select">
                    <select
                      value={idKaryawan}
                      onChange={(e) => getKaryawanById(e.target.value)}
                    >
                      <option value="">
                        {selected_name} - {selected_nik} - {selected_jabatan}
                      </option>
                      {listKaryawan.map((karya) => (
                        <option value={karya.uuid}>
                          {karya.name}-{karya.jabatan}-{karya.nik}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="field">
                <label className="label">Periode</label>
                <div className="control">
                  <input
                    type="month"
                    className="input"
                    value={periode}
                    onChange={(e) => setPeriode(e.target.value)}
                    placeholder="Tahun"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Bonus</label>
                <div className="control">
                  <input
                    type="text"
                    className="input"
                    value={bonus}
                    onChange={(e) => setBonus(e.target.value)}
                    placeholder="Bonus"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Hadir(Hari)</label>
                <div className="control">
                  <input
                    type="number"
                    className="input"
                    value={hadir}
                    onChange={(e) => setHadir(e.target.value)}
                    placeholder="Hadir"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Izin(Hari)</label>
                <div className="control">
                  <input
                    type="number"
                    className="input"
                    value={izin}
                    onChange={(e) => setIzin(e.target.value)}
                    placeholder="Izin"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label">Alpha(Hari)</label>
                <div className="control">
                  <input
                    type="number"
                    className="input"
                    value={alpha}
                    onChange={(e) => setAlpha(e.target.value)}
                    placeholder="Alpha"
                    required
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
  );
};

export default FormAddAbsensi;
