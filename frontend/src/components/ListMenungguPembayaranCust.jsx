import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ListMenungguPembayaranCust = () => {
  const [servis, setServis] = useState([]);
  const [snap, setSnap] = useState(null);

  useEffect(() => {
    getServis();
    initSnap();
  }, []);

  const getServis = async () => {
    const response = await axios.get(
      process.env.REACT_APP_API_KEY + "/menunggupembayaran"
    );
    setServis(response.data);
  };

  const getServisPaymentToken = async (servis) => {
    const response = await axios.get(
      process.env.REACT_APP_API_KEY + "/gettokenmidtrans/" + servis
    );

    if (response.status == 200) {
      let token = response.data.token;
      handlePay(token);
    }
    console.log(response);
  };

  const initSnap = async () => {
    const { NODE_ENV: ENV } = process.env;

    // create element for script
    const snapScript = document.createElement("script");

    // checking environment mode
    snapScript.src =
      ENV === "production"
        ? "https://app.sandbox.midtrans.com/snap/snap.js"
        : "https://app.sandbox.midtrans.com/snap/snap.js";

    snapScript.type = "text/javascript";
    snapScript.onload = () => {
      if ("snap" in window) {
        const { snap } = window;
        setSnap(snap);
      }
    };
    snapScript.dataset.clientKey = "SB-Mid-client-ezJ53UeHaYDHkJwZ";
    document.head.appendChild(snapScript);
  };

  const deleteServis = async (ServisId) => {
    await axios.delete(process.env.REACT_APP_API_KEY + `/servis/${ServisId}`);
    getServis();
  };

  const handlePay = async (transactionToken) => {
    console.log("asdasdas");
    snap.pay(transactionToken);
  };

  return (
    <div>
      <div className="box mt-5">
        <h1 className="title">Servis Menunggu Pembayaran</h1>
        <h2 className="subtitle">Waiting for payment</h2>
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
                  {/* <Link to={`/dashboard`} className="button is-small is-info">
                  Proses Pembayaran
                </Link> */}
                  <button
                    onClick={() => getServisPaymentToken(servis.uuid)}
                    className="button is-small is-primary"
                  >
                    Proses Pembayaran
                  </button>
                  <Link
                    to={`/servis/detailcust/${servis.uuid}`}
                    className="button is-small mx-1 is-info"
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
    </div>
  );
};

export default ListMenungguPembayaranCust;
