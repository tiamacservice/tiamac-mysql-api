import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ListServisPenjadwalan = () => {
  const [servis, setServis] = useState([]);

  useEffect(() => {
    getServis();
  }, []);

  const getServis = async () => {
    const response = await axios.get(
      process.env.REACT_APP_API_KEY + `/allpenjadwalan`
    );
    setServis(response.data);
  };

  const deleteServis = async (ServisId) => {
    await axios.delete(process.env.REACT_APP_API_KEY + `/servis/${ServisId}`);
    getServis();
  };

  return (
    <div className="box">
      <h1 className="title py-1 pt-3">Konfirmasi Teknisi</h1>
      <h2 className="subtitle mb-6">
        Membuat jadwal perbaikan dan memilih teknisi yang bertugas
      </h2>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Customer</th>
            <th>Alamat</th>
            <th>Total Harga</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {servis.map((servis, index) => (
            <tr key={servis.uuid}>
              <td>{index + 1}</td>
              <td>{servis.customer.name}</td>
              <td>{servis.alamat}</td>
              <td>Rp.{servis.totalHarga}</td>
              <td>{servis.status}</td>
              <td>
                <Link
                  to={`/penjadwalanservis/edit/${servis.uuid}`}
                  className="button is-small is-primary"
                >
                  Membuat Jadwal
                </Link>
                <Link
                  to={`/servis/detail/${servis.uuid}`}
                  className="button mx-1 is-small is-info"
                >
                  <i class="bx bx-search-alt-2"></i>
                </Link>
                <button
                  onClick={() => deleteServis(servis.uuid)}
                  className="button is-small is-danger"
                >
                  <i className="bx bx-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListServisPenjadwalan;
