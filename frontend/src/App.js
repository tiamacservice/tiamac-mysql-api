import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import LoginCust from "./components/LoginCust";
import Users from "./pages/Users";
import Customers from "./pages/Customer";
import Products from "./pages/Products";
import AddUser from "./pages/AddUser";
import EditUser from "./pages/EditUser";
import AddProducts from "./pages/AddProduct";
import EditProducts from "./pages/EditProduct";
import Register from "./pages/Register";
import DashboardCustomer from "./pages/Dashboarduser";
import Home from "./pages/Home";
import ListPesanan from "./pages/ListPesanan";
import Profil from "./pages/Profilcust";
import NewPesanan from "./pages/NewPesanan";
import ListServisPenjadwalan from "./pages/ListServisPenjadwalan";
import PenjadwalanServis from "./pages/PenjadwalanServis";
import AllServis from "./pages/AllServis";
import KonfirmasiTeknisi from "./pages/KonfirmasiTeknisi";
import MenungguPembayaran from "./pages/MenungguPembayaran";
import OnProsesServis from "./pages/OnProsesServis";
import KonfirmasiCustomer from "./pages/KonfirmasiCustomer";
import ServisSelesai from "./pages/ServisSelesai";
import FormKonfirmasiTeknisi from "./pages/FormKonfirmasiTeknisi";
import DetailServis from "./pages/DetailServis";
import ListKonfirmasiCustomerCust from "./pages/KonfirmasiCustomerCust";
import AllServisCust from "./pages/AllServisCust";
import ServisSelesaiCust from "./pages/ServisSelesaiCust";
import MenungguPembayaranCust from "./pages/MenungguPembayaranCust";
import DetailServisCust from "./pages/DetailServisCust";
import ContactCust from "./pages/ContactCust";
import Pricing from "./pages/Pricing";

// CSS

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"
></link>;

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Guest */}
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />

          {/* //Customer */}
          <Route path="/pesananbaru" element={<NewPesanan />} />
          <Route path="/servis/detailcust/:id" element={<DetailServisCust />} />
          <Route path="/dashboardcust" element={<DashboardCustomer />} />
          <Route path="/profilcust" element={<Profil />} />
          <Route path="/logincustomer" element={<LoginCust />} />
          <Route path="/allserviscust" element={<AllServisCust />} />

          <Route path="/cust/contactus" element={<ContactCust />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route
            path="/menunggupembayarancust"
            element={<MenungguPembayaranCust />}
          />
          <Route
            path="/konfirmasicustomercust"
            element={<ListKonfirmasiCustomerCust />}
          />
          <Route path="/servisselesaicust" element={<ServisSelesaiCust />} />

          {/* //karyawan/admin */}

          <Route path="/loginstaff" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/users/add" element={<AddUser />} />
          <Route path="/users/edit/:id" element={<EditUser />} />
          <Route path="/products" element={<Products />} />
          <Route path="/listpesanan" element={<ListPesanan />} />
          <Route path="/listpesanan" element={<ListPesanan />} />
          <Route path="/products/add" element={<AddProducts />} />
          <Route path="/servis/detail/:id" element={<DetailServis />} />
          <Route path="/products/edit/:id" element={<EditProducts />} />
          <Route
            path="/konfirmasiteknisi/edit/:id"
            element={<FormKonfirmasiTeknisi />}
          />
          <Route path="/allservis" element={<AllServis />} />
          <Route path="/allkonfirmasiteknisi" element={<KonfirmasiTeknisi />} />
          <Route
            path="/allmenunggupembayaran"
            element={<MenungguPembayaran />}
          />
          <Route path="/allprosesservis" element={<OnProsesServis />} />
          <Route
            path="/allkonfirmasicustomer"
            element={<KonfirmasiCustomer />}
          />
          <Route path="/allservisselesai" element={<ServisSelesai />} />
          <Route
            path="/penjadwalanservis/edit/:id"
            element={<PenjadwalanServis />}
          />
          <Route
            path="/listservispenjadwalan"
            element={<ListServisPenjadwalan />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
