import User from "../models/UserModel.js";
import Customer from "../models/CustomerModel.js";

export const verifyUser = async (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ msg: "mohon login ke akun anda (teknisi)" });
  }
  const user = await User.findOne({
    where: {
      uuid: req.session.userId,
    },
  });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  req.userId = user.id;
  req.role = user.role;
  next();
};

export const verifyCustomer = async (req, res, next) => {
  if (!req.session.customerId) {
    return res.status(401).json({ msg: "mohon login ke akun anda (customer)" });
  }
  const customer = await Customer.findOne({
    where: {
      uuid: req.session.customerId,
    },
  });
  if (!customer)
    return res.status(404).json({ msg: "Id Customer tidak ditemukan" });
  req.customerId = customer.id;
  next();
};

export const adminOnly = async (req, res, next) => {
  const user = await User.findOne({
    where: {
      uuid: req.session.userId,
    },
  });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  if (user.role !== "admin")
    return res.status(403).json({ msg: "akses terlarang" });
  next();
};
