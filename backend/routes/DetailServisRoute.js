import express from "express";
import {
  getServices,
  getServisId,
  createServis,
  updateServis,
  deleteServis,
  newservis,
  PenjadwalanServis,
  getMenungguPenjadwalan,
  getKonfirmasiCustomer,
  getMenungguPembayaran,
  getServisSelesai,
  getKonfirmasiTeknisi,
  getProsesServis,
  konfirmasiTeknisi,
  getAllServisCust,
  getMenungguPembayaranCust,
  getKonfirmasiCustomerCust,
  getServisSelesaiCust,
  getTokenPayment,
  onGoingServis,
  onGoingServisCust,
  KonfirmasiSelesai,
} from "../controllers/DetailServis.js";
import {
  verifyUser,
  verifyCustomer,
  adminOnly,
} from "../middleware/AuthUser.js";

const router = express.Router();

// detail servis
router.get("/servis/", verifyUser, getServices);
router.get("/servisbyid/:id", getServisId);
router.get("/servisbyidUser/:id", verifyUser, getServisId);
router.post("/servis", verifyCustomer, createServis);
router.patch("/servis/:id", verifyUser, updateServis);
router.delete("/servis/:id", verifyUser, deleteServis);

//Get servis with spesific status (teknisi/admin)
router.get("/allpenjadwalan/", verifyUser, getMenungguPenjadwalan);
router.get("/allkonfirmasiteknisi/", verifyUser, getKonfirmasiTeknisi);
router.get("/allmenunggupembayaran/", verifyUser, getMenungguPembayaran);
router.get("/allprosesservis/", verifyUser, getProsesServis);
router.get("/allkonfirmasicustomer/", verifyUser, getKonfirmasiCustomer);
router.get("/allservisselesai/", verifyUser, getServisSelesai);
router.get("/ongoingservis", verifyUser, onGoingServis);

//Get servis (customer)

router.get("/custservis/", verifyCustomer, getAllServisCust);
router.get("/menunggupembayaran/", verifyCustomer, getMenungguPembayaranCust);
router.get("/konfirmasicustomer/", verifyCustomer, getKonfirmasiCustomerCust);
router.get("/ongoingserviscust/", verifyCustomer, onGoingServisCust);
router.get("/servisselesai/", verifyCustomer, getServisSelesaiCust);
//main route
router.post("/newservis", verifyCustomer, newservis);
router.patch("/penjadwalanservis/:id", verifyUser, PenjadwalanServis);
router.patch("/formkonfirmasiteknisi/:id", verifyUser, konfirmasiTeknisi);
router.get("/gettokenmidtrans/:id", verifyCustomer, getTokenPayment);
router.patch("/konfirmasiselesai/:id", verifyUser, KonfirmasiSelesai);

export default router;
