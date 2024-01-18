import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { getMe } from "../features/authSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Welcome = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [OnGoingCount, setOnGoingCount] = useState();
  const [CustomerCount, setCustomerCount] = useState();
  const [DalamProsesServisCount, setDalamProsesServisCount] = useState();
  const [MenungguKonfirmasiCount, setMenungguKonfirmasiCount] = useState();
  const [KaryawanCount, setKaryawanCount] = useState();
  const [ServisSelesaiCount, setServisSelesaiCount] = useState();
  const [AllServisCount, setAllServisCount] = useState();
  const [MenungguPembayaranCount, setMenungguPembayaranCount] = useState();
  const [onGoingServis, setOnGoingServis] = useState([]);

  useEffect(() => {
    dispatch(getMe());
    OnGoingServis();
    ServisSelesai();
    AllServis();
    AllKaryawan();
    AllCustomer();
    DalamProsesServis();
    ServisMenungguKonfirmasi();
    ServisMenungguPembayaran();
  }, [dispatch]);

  const OnGoingServis = async () => {
    const response = await axios.get(
      process.env.REACT_APP_API_KEY + `/ongoingservis`
    );
    setOnGoingServis(response.data);
    setOnGoingCount(response.data.length);
  };

  const AllKaryawan = async () => {
    const response = await axios.get(process.env.REACT_APP_API_KEY + `/users`);
    setKaryawanCount(response.data.length);
  };

  const AllCustomer = async () => {
    const response = await axios.get(
      process.env.REACT_APP_API_KEY + `/customers`
    );
    setCustomerCount(response.data.length);
  };

  const ServisSelesai = async () => {
    const response = await axios.get(
      process.env.REACT_APP_API_KEY + `/allservisselesai`
    );
    setServisSelesaiCount(response.data.length);
  };

  const AllServis = async () => {
    const response = await axios.get(process.env.REACT_APP_API_KEY + `/servis`);
    setAllServisCount(response.data.length);
  };

  const ServisMenungguPembayaran = async () => {
    const response = await axios.get(
      process.env.REACT_APP_API_KEY + "/allmenunggupembayaran"
    );
    setMenungguPembayaranCount(response.data.length);
  };

  const ServisMenungguKonfirmasi = async () => {
    const response = await axios.get(
      process.env.REACT_APP_API_KEY + "/allkonfirmasiteknisi"
    );
    setMenungguKonfirmasiCount(response.data.length);
  };

  const DalamProsesServis = async () => {
    const response = await axios.get(
      process.env.REACT_APP_API_KEY + "/allprosesservis"
    );
    setDalamProsesServisCount(response.data.length);
  };

  return (
    <div>
      {/* dashboard admin */}

      {user && user.role === "admin" && (
        <div className="dashboard">
          <section class="hero is-info welcome is-small">
            <div class="hero-body">
              <div class="container">
                <h1 class="title">Hello, {user && user.name}</h1>
                <h2 class="subtitle">
                  e-mail : {user && user.email} , role : {user && user.role}
                </h2>
              </div>
            </div>
          </section>
          <section class="info-tiles">
            <div class="tile is-ancestor has-text-centered">
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">{KaryawanCount}</p>
                  <p class="subtitle">Jumlah Staff</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">{CustomerCount}</p>
                  <p class="subtitle">Jumlah Customer</p>
                </article>
              </div>
            </div>
          </section>
          <section class="info-tiles">
            <div class="tile is-ancestor has-text-centered">
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">{OnGoingCount}</p>
                  <p class="subtitle">Servis Sedang Berjalan</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">{MenungguPembayaranCount}</p>
                  <p class="subtitle">Menunggu Pembayaran</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">{ServisSelesaiCount}</p>
                  <p class="subtitle">Servis Selesai</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">{AllServisCount}</p>
                  <p class="subtitle">Semua Servis</p>
                </article>
              </div>
            </div>
          </section>

          <div class="columns">
            <div class="column is-12">
              <div class="card events-card">
                <header class="card-header">
                  <p class="card-header-title">SERVIS SEDANG BERJALAN</p>
                  <a
                    href="#"
                    class="card-header-icon"
                    aria-label="more options"
                  >
                    <span class="icon">
                      <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </a>
                </header>
                <div class="card-table">
                  <div class="content">
                    <table class="table is-fullwidth is-striped">
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Nama Customer</th>
                          <th>Email Customer</th>

                          <th>Alamat Perbaikan</th>
                          <th>Total Harga</th>
                          <th>Status</th>
                        </tr>
                      </thead>

                      <tbody>
                        {onGoingServis.map((servis, index) => (
                          <tr key={servis.uuid}>
                            <td>{index + 1}</td>
                            <td>{servis.customer.name}</td>
                            <td>{servis.customer.email}</td>
                            <td className="td-alamat">{servis.alamat}</td>
                            <td>Rp.{servis.totalHarga}</td>
                            <td>{servis.status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <footer class="card-footer">
                  <a href="/allservis" class="card-footer-item">
                    View All
                  </a>
                </footer>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* dashboardkaryawan */}

      {user && user.role === "karyawan" && (
        <div className="dashboard">
          <section class="hero is-info welcome is-small">
            <div class="hero-body">
              <div class="container">
                <h1 class="title">Hello, {user && user.name}</h1>
                <h2 class="subtitle">
                  e-mail : {user && user.email} , role : {user && user.role}
                </h2>
              </div>
            </div>
          </section>
          <section class="info-tiles">
            <div class="tile is-ancestor has-text-centered">
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">{OnGoingCount}</p>
                  <p class="subtitle">Servis Sedang Berjalan</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">{DalamProsesServisCount}</p>
                  <p class="subtitle">Dalam Proses Servis</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">{MenungguKonfirmasiCount}</p>
                  <p class="subtitle">Menunggu Konfirmasi</p>
                </article>
              </div>
            </div>
          </section>
          <section class="info-tiles">
            <div class="tile is-ancestor has-text-centered">
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">{ServisSelesaiCount}</p>
                  <p class="subtitle">Servis Selesai</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child box">
                  <p class="title">{AllServisCount}</p>
                  <p class="subtitle">Semua Servis</p>
                </article>
              </div>
            </div>
          </section>

          <div class="columns">
            <div class="column is-12">
              <div class="card events-card">
                <header class="card-header">
                  <p class="card-header-title">SERVIS SEDANG BERJALAN</p>
                  <a
                    href="#"
                    class="card-header-icon"
                    aria-label="more options"
                  >
                    <span class="icon">
                      <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </a>
                </header>
                <div class="card-table">
                  <div class="content">
                    <table class="table is-fullwidth is-striped">
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Nama Customer</th>
                          <th>Email Customer</th>

                          <th>Alamat Perbaikan</th>
                          <th>Total Harga</th>
                          <th>Status</th>
                        </tr>
                      </thead>

                      <tbody>
                        {onGoingServis.map((servis, index) => (
                          <tr key={servis.uuid}>
                            <td>{index + 1}</td>
                            <td>{servis.customer.name}</td>
                            <td>{servis.customer.email}</td>
                            <td className="td-alamat">{servis.alamat}</td>
                            <td>Rp.{servis.totalHarga}</td>
                            <td>{servis.status}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <footer class="card-footer">
                  <a href="/allservis" class="card-footer-item">
                    View All
                  </a>
                </footer>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Welcome;
