import express from "express";
import {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
} from "../controllers/Customers.js";
import {
  verifyUser,
  adminOnly,
  verifyCustomer,
} from "../middleware/AuthUser.js";

const router = express.Router();

router.get("/customers", verifyUser, getCustomers);
router.get("/customers/:id", verifyCustomer, getCustomerById);
router.post("/customers", createCustomer);
router.patch("/customers/:id", verifyCustomer, updateCustomer);
router.delete("/customers/:id", verifyCustomer, deleteCustomer);

export default router;
