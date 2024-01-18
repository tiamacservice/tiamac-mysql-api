import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const ListAllServisCust = () => {
  const [servis, setServis] = useState([]);

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    getServis();
  }, []);

  const getServis = async () => {
    const response = await axios.get(
      process.env.REACT_APP_API_KEY + `/ongoingserviscust`
    );
    setServis(response.data);
  };

  const deleteServis = async (ServisId) => {
    await axios.delete(process.env.REACT_APP_API_KEY + `/servis/${ServisId}`);
    getServis();
  };

  return (
    <div className="">
      <div className="box">
        <h1 className="title">Servis Sedang Berjalan </h1>
        <h2 className="subtitle">Ongoing Services</h2>
        <hr />

        <table className="table is-striped is-fullwidth ">
          <thead>
            <tr>
              <th>No</th>
              <th>Alamat Perbaikan</th>
              <th>Tanggal Perbaikan</th>
              {/* <th>Nama Teknisi</th> */}
              <th>Total Harga</th>
              <th>Nama Teknisi</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {servis.map((servis, index) => (
              <tr key={servis.uuid}>
                <td>{index + 1}</td>
                <td className="td-alamat">{servis.alamat}</td>
                <td>
                  {servis.dateServis != null ? (
                    <p> {servis.dateServis} </p>
                  ) : (
                    <i>Menunggu Admin</i>
                  )}
                </td>
                <td>Rp.{servis.totalHarga}</td>
                <td>
                  {servis.user != null ? (
                    <p> {servis.user.name} </p>
                  ) : (
                    <i>Menunggu Admin</i>
                  )}
                </td>

                <td>{servis.status}</td>
                <td>
                  <Link
                    to={`/servis/detail/${servis.uuid}`}
                    className="button is-small is-info"
                  >
                    <i class="bx bx-search-alt-2"></i>
                  </Link>
                  {user && user.role === "admin" && (
                    <button
                      onClick={() => deleteServis(servis.uuid)}
                      className="button is-small is-danger"
                    >
                      <i className="bx bx-trash"></i>
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListAllServisCust;
