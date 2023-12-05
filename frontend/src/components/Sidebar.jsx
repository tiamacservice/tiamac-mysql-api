import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";
import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <aside className="menu pl-2 has-shadow">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/dashboard"}>
              <IoHome /> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={"/products"}>
              <IoPricetag /> Products
            </NavLink>
          </li>
        </ul>
        {user && user.role === "admin" && (
          <div>
            <p className="menu-label">Admin</p>
            <ul className="menu-list">
              <li>
                <NavLink to={"/users"}>
                  <IoPerson /> Users
                </NavLink>
              </li>
              <li>
                <NavLink to={"/customers"}>
                  <IoPerson /> Customer
                </NavLink>
              </li>
            </ul>
            <p className="menu-label">Servis</p>
            <ul className="menu-list">
              <li>
                <NavLink to={"/allservis"}>
                  <IoPerson /> Semua Pesanan
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard"}>
                  <IoPerson /> Dalam Proses
                </NavLink>
              </li>
              <li>
                <NavLink to={"/listservispenjadwalan"}>
                  <IoPerson /> Menunggu Jadwal
                </NavLink>
              </li>
              <li>
                <NavLink to={"/allkonfirmasiteknisi"}>
                  <IoPerson /> Konfirmasi Teknisi
                </NavLink>
              </li>
              <li>
                <NavLink to={"/allmenunggupembayaran"}>
                  <IoPerson /> Menunggu Pembayaran
                </NavLink>
              </li>
              <li>
                <NavLink to={"/allprosesservis"}>
                  <IoPerson /> Proses Servis
                </NavLink>
              </li>
              <li>
                <NavLink to={"/allkonfirmasicustomer"}>
                  <IoPerson /> Konfirmasi Customer
                </NavLink>
              </li>
              <li>
                <NavLink to={"/allservisselesai"}>
                  <IoPerson /> Selesai
                </NavLink>
              </li>
            </ul>
          </div>
        )}

        {user && user.role === "karyawan" && (
          <div>
            <p className="menu-label">Servis</p>
            <ul className="menu-list">
              <li>
                <NavLink to={"/allservis"}>
                  <IoPerson /> Semua Pesanan
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashboard"}>
                  <IoPerson /> Dalam Proses
                </NavLink>
              </li>

              <li>
                <NavLink to={"/allkonfirmasiteknisi"}>
                  <IoPerson /> Konfirmasi Teknisi
                </NavLink>
              </li>
              <li>
                <NavLink to={"/allprosesservis"}>
                  <IoPerson /> Proses Servis
                </NavLink>
              </li>
              <li>
                <NavLink to={"/allservisselesai"}>
                  <IoPerson /> Selesai
                </NavLink>
              </li>
            </ul>
          </div>
        )}

        <p className="menu-label">Settings</p>
        <ul className="menu-list">
          <li>
            <button onClick={logout} className="button is-white">
              <IoLogOut /> Logout
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
