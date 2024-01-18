import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../features/authSlice";
import { IoPerson, IoPricetag, IoHome, IoLogOut } from "react-icons/io5";

const Sidebarcust = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { customer } = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <aside className="menu pl-2 mt-2 has-shadow">
        <p className="menu-label">General</p>
        <ul className="menu-list">
          <li>
            <NavLink to={"/listpesanan"}>
              <IoHome /> Dashboard
            </NavLink>
          </li>
          {/* <li>
            <NavLink to={"/dashboardcust"}>
              <IoPricetag /> Products
            </NavLink>
          </li> */}
        </ul>
        <div>
          <p className="menu-label">List Servis</p>
          <ul className="menu-list">
            <li>
              <NavLink to={"/allserviscust"}>
                <IoPerson /> Sedang Berjalan
              </NavLink>
            </li>
            <li>
              <NavLink to={"/menunggupembayarancust"}>
                <IoPerson /> Menunggu Pembayaran
              </NavLink>
            </li>
            <li>
              <NavLink to={"/servisselesaicust"}>
                <IoPerson /> Pesanan Selesai
              </NavLink>
            </li>
          </ul>
        </div>

        <p className="menu-label">Settings</p>
        <ul className="menu-list">
          <li>
            <button href="/pricing" className="button is-white">
              <IoLogOut /> <a href="/dashboardcust">Home</a>
            </button>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebarcust;
