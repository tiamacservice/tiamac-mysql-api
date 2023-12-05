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
} from "../controllers/DetailServis.js";
import {
  verifyUser,
  verifyCustomer,
  adminOnly,
} from "../middleware/AuthUser.js";

const router = express.Router();

// detail servis
router.get("/servis/", verifyUser, getServices);
router.get("/servisbyid/:id", verifyUser, getServisId);
router.post("/servis", verifyCustomer, createServis);
router.patch("/servis/:id", verifyUser, updateServis);
router.delete("/servis/:id", verifyUser, deleteServis);

//Get servis with spesific status (karyawan/admin)
router.get("/allpenjadwalan/", verifyUser, getMenungguPenjadwalan);
router.get("/allkonfirmasiteknisi/", verifyUser, getKonfirmasiTeknisi);
router.get("/allmenunggupembayaran/", verifyUser, getMenungguPembayaran);
router.get("/allprosesservis/", verifyUser, getProsesServis);
router.get("/allkonfirmasicustomer/", verifyUser, getKonfirmasiCustomer);
router.get("/allservisselesai/", verifyUser, getServisSelesai);

//Get servis (customer)

router.get("/custservis/", verifyCustomer, getAllServisCust);
router.get("/menunggupembayaran/", verifyCustomer, getMenungguPembayaranCust);
router.get("/konfirmasicustomer/", verifyCustomer, getKonfirmasiCustomerCust);
router.get("/servisselesai/", verifyCustomer, getServisSelesaiCust);
//main route
router.post("/newservis", verifyCustomer, newservis);
router.patch("/penjadwalanservis/:id", verifyUser, PenjadwalanServis);
router.patch("/formkonfirmasiteknisi/:id", verifyUser, konfirmasiTeknisi);

export default router;
