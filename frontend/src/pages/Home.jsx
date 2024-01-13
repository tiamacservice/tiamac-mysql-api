import Navbar from "../components/NavbarCust.jsx";
import { NavLink } from "react-router-dom";
import logo from "../assets/actiamx.png";
import banner from "../assets/banner.png";
import cuciac from "../assets/Cuci-AC.png";
import bongkarac from "../assets/Bongkar-AC.png";
import pasangac from "../assets/Pasang-AC.png";
import isifreon from "../assets/Isi-Freon-AC.png";
import gantifreon from "../assets/ganti-freon-ac.png";
import footerlogo from "../assets/logo-no-background.png";
import "../assets/css/hero.css";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMeCust } from "../features/authSlice";

const Home = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getMeCust());
  }, [dispatch]);

  return (
    <section className="body">
      <div>
        <nav
          className="navbar navguest is-fixed-top has-shadow is-info "
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand ">
            <img className="is-rounded logo" src={logo} />

            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start pl-3">
              <NavLink to="/" className="navbar-item has-text-weight-bold">
                Home
              </NavLink>

              <NavLink
                to="/pricing"
                className="navbar-item has-text-weight-bold"
              >
                Pricing
              </NavLink>

              <NavLink
                to="/cust/contactus"
                className="navbar-item has-text-weight-bold"
              >
                Contact Us
              </NavLink>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="buttons">
                  <NavLink to="/register" className="button is-primary">
                    Register
                  </NavLink>

                  <NavLink to="/logincustomer" className="button is-light">
                    Login
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </nav>
        ;
      </div>
      <section className="hero pt-6 ">
        <img src={banner} alt="" />
      </section>
      <div className="box cta">
        <p className="has-text-centered">
          <span className="tag is-primary">Hello!</span> Silahkan login untuk
          memesan layanan servis!
        </p>
      </div>
      <section className="container home">
        <div className="intro column is-8 is-offset-2">
          <h2 className="title">Layanan Kami</h2>
        </div>
        <div className="columns features">
          <div className="column is-4">
            <div className="card is-shady">
              <div className="card-image has-text-centered">
                <img src={cuciac} width="350" height="28" className="gambar" />
              </div>
              <div className="card-content">
                <div className="content">
                  <h4>Cuci AC </h4>
                  <p>
                    Perawatan berkala yang bertujuan membersihkan dan menjaga
                    kinerja unit AC tetap dalam keadaan prima.
                  </p>
                  <p>
                    <a href="/pricing">Harga-{">"}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card is-shady">
              <div className="card-image has-text-centered">
                <img
                  src={bongkarac}
                  width="350"
                  height="28"
                  className="gambar"
                />
              </div>
              <div className="card-content">
                <div className="content">
                  <h4>Bongkar AC</h4>
                  <p>
                    Layanan untuk melepas unit AC yang dilakukan untuk berbagai
                    keperluan, seperti pemindahan AC ke lokasi baru, perbaikan,
                    atau renovasi
                  </p>
                  <p>
                    <a href="/pricing">Harga-{">"}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card is-shady">
              <div className="card-image has-text-centered">
                <img
                  src={pasangac}
                  width="370"
                  height="28"
                  className="gambar"
                />
              </div>
              <div className="card-content">
                <div className="content">
                  <h4> Pasang AC </h4>
                  <p>
                    Layanan untuk memasang unit AC yang dilakukan untuk berbagai
                    keperluan, seperti pemindahan AC ke lokasi baru, perbaikan,
                    atau renovasi
                  </p>
                  <p>
                    <a href="/pricing">Harga-{">"}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div class="column"></div>
          <div className="column is-4">
            <div className="card is-shady">
              <div className="card-image has-text-centered">
                <img
                  src={isifreon}
                  width="350"
                  height="28"
                  className="gambar"
                />
              </div>
              <div className="card-content">
                <div className="content">
                  <h4>Isi Freon </h4>
                  <p>
                    Freon atau Refrigerant secara sederhana adalah zat kimia
                    yang berfungsi untuk mendinginkan dalam sistem pendingin.
                    Mungkin kita sering mendengar jika unit AC atau Kulkas tidak
                    dingin maka harus isi atau tambah freon.
                  </p>
                  <p>
                    <a href="/pricing">Harga-{">"}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="column is-4">
            <div className="card is-shady">
              <div className="card-image has-text-centered">
                <img
                  src={gantifreon}
                  width="350"
                  height="28"
                  className="gambar"
                />
              </div>
              <div className="card-content">
                <div className="content">
                  <h4>Las&Ganti Freon</h4>
                  <p>
                    Dilakukan saat terjadi kebocoran pada AC sehingga bisa
                    berakibat pada kurang maksimalnya kinerja. Kebocoran umumnya
                    terjadi pada bagian freon.
                  </p>
                  <p>
                    <a href="/pricing">Harga-{">"}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="column"></div>
        </div>
      </section>
      <footer className="footer is-primary">
        <div className="container">
          <div className="columns ">
            <div className="column is-6  ">
              <ul>
                <li>
                  <img
                    src={footerlogo}
                    width="200"
                    height="28"
                    className="gambar mb-3 "
                  />
                </li>
                <li>
                  <p className="">
                    <i className="bx bx-envelope bx-sm mr-2 my-1 "></i>
                    {"  "}
                    ac.tiam2610@gmail.com
                  </p>
                </li>
                <li>
                  <p className="">
                    <i className="bx bxl-whatsapp bx-sm mr-2 my-1"></i>
                    {"  "} +62 812-5653-4837
                  </p>
                </li>
                <li>
                  <p className="">
                    <i className="bx bx-map bx-sm mr-2 my-1"></i>
                    {"  "} LTC GLODOK, Lt. UG Blok B11 No.6 Jl.Hayam Wuruk
                    No.127, Jakarta Barat
                  </p>
                </li>
              </ul>
            </div>

            <div className="column ">
              <h2>
                <strong>Product </strong>
              </h2>
              <ul>
                <li className="mt-2">
                  <a className="" href="/pricing">
                    Pricing
                  </a>
                </li>
                <li className="mt-1">
                  <a href="/cust/contactus">Contact Page</a>
                </li>
              </ul>
            </div>
            <div className="column">
              <h2>
                <strong>Contact Us</strong>
              </h2>
              <ul>
                <li className="mt-2">
                  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ac.tiam2610@gmail.com&su=SUBJECT&body=BODY">
                    <i className="bx bx-envelope bx-sm"></i>Gmail
                  </a>
                </li>
                <li className="mt-1">
                  <a href="https://wa.me/6281256534837">
                    <i className="bx bxl-whatsapp bx-sm"></i>Whatsapp
                  </a>
                </li>
                <li className="mt-1">
                  <a href="https://www.google.com/maps?ll=-6.155646,106.818328&z=16&t=m&hl=en&gl=ID&mapclient=embed&cid=8478086057991919631">
                    <i className="bx bx-map bx-sm"></i>Location
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <script src="../js/bulma.js"></script>
      </footer>
    </section>
  );
};

export default Home;
