import React, { useEffect, useState } from "react";
import Welcome from "../components/Welcome";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMeCust } from "../features/authSlice";
import Layout from "./LayoutCustomer";
import axios from "axios";
import "../assets/css/dashboard.css";

const ListPesanan = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [OnGoingCount, setOnGoingCount] = useState();
  const [ServisSelesaiCount, setServisSelesaiCount] = useState();
  const [AllServisCount, setAllServisCount] = useState();
  const [MenungguPembayaranCount, setMenungguPembayaranCount] = useState();
  const [onGoingServis, setOnGoingServis] = useState([]);
  const { isError } = useSelector((state) => state.auth);
  const { customer } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMeCust());
    OnGoingServis();
    ServisSelesai();
    AllServis();
    ServisMenungguPembayaran();
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, navigate]);

  const OnGoingServis = async () => {
    const response = await axios.get(
      process.env.REACT_APP_API_KEY + `/ongoingserviscust`
    );
    setOnGoingServis(response.data);
    setOnGoingCount(response.data.length);
  };

  const ServisSelesai = async () => {
    const response = await axios.get(
      process.env.REACT_APP_API_KEY + `/servisselesai`
    );
    setServisSelesaiCount(response.data.length);
  };

  const AllServis = async () => {
    const response = await axios.get(
      process.env.REACT_APP_API_KEY + `/custservis`
    );
    setAllServisCount(response.data.length);
  };

  const ServisMenungguPembayaran = async () => {
    const response = await axios.get(
      process.env.REACT_APP_API_KEY + "/menunggupembayaran"
    );
    setMenungguPembayaranCount(response.data.length);
  };

  return (
    <Layout>
      <div className="dashboard">
        <section class="hero is-info welcome is-small ">
          <div class="hero-body">
            <div class="container">
              <h1 class="title">Hello, {customer && customer.name}</h1>
              <h2 class="subtitle">
                e-mail : {customer && customer.email}, no-telp :{" "}
                {customer && customer.no_telp}
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
                <p class="card-header-title">Events</p>
                <a href="#" class="card-header-icon" aria-label="more options">
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
                        <th>Alamat Perbaikan</th>
                        <th>Tanggal Perbaikan</th>
                        {/* <th>Nama Teknisi</th> */}
                        <th>Total Harga</th>
                        <th>Nama Teknisi</th>
                        <th>Status</th>
                      </tr>
                    </thead>

                    <tbody>
                      {onGoingServis.map((servis, index) => (
                        <tr key={servis.uuid}>
                          <td>{index + 1}</td>
                          <td className="td-alamat">{servis.alamat}</td>
                          <td>
                            {" "}
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
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <footer class="card-footer">
                <a href="/allserviscust" class="card-footer-item">
                  View All
                </a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ListPesanan;
