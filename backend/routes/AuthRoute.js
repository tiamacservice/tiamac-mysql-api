import express from "express";
import {
  Login,
  logOut,
  Me,
  LoginCustomer,
  MeCustomer,
} from "../controllers/Auth.js";

import {
  webhok
} from "../controllers/Midtrans.js";

const router = express.Router();
//login staff
router.get("/me", Me);
router.post("/login", Login);

router.post("/webhook", webhok);



router.delete("/logout", logOut);
//login customer
router.post("/logincust", LoginCustomer);
router.get("/mecust", MeCustomer);

export default router;
