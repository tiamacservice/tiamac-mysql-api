import User from "../models/UserModel.js";
import Customer from "../models/CustomerModel.js";

export const Login = async (req, res) => {
  const user = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  if (user.password !== req.body.password)
    return res.status(400).json({ msg: "Wrong Password" });
  req.session.userId = user.uuid;
  const uuid = user.uuid;
  const name = user.name;
  const email = user.email;
  const role = user.role;

  res.status(200).json({ uuid, name, email, role });
};

export const Me = async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ msg: "mohon login ke akun anda" });
  }
  const user = await User.findOne({
    attributes: ["uuid", "name", "email", "role", "id", "role"],
    where: {
      uuid: req.session.userId,
    },
  });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  res.status(200).json(user);
};

export const logOut = (req, res) => {
  req.session.destroy((err) => {
    if (err) return req.status(400).json({ msg: "Tidak dapat logout" });
    res.status(200).json({ msg: "anda telah logout" });
  });
};

//Login Customer

export const LoginCustomer = async (req, res) => {
  const customer = await Customer.findOne({
    where: {
      email: req.body.email,
    },
  });
  if (!customer)
    return res.status(404).json({ msg: "customer tidak ditemukan" });
  if (customer.password !== req.body.password)
    return res.status(400).json({ msg: "Wrong Password" });
  req.session.customerId = customer.uuid;
  const uuid = customer.uuid;
  const customerId = customer.id;
  const name = customer.name;
  const email = customer.email;
  const no_telp = customer.no_telp;
  const provinsi = customer.provinsi;
  const alamat = customer.alamat;
  const role = "customer";

  res
    .status(200)
    .json({ uuid, role, name, email, no_telp, provinsi, alamat, customerId });
};

export const MeCustomer = async (req, res) => {
  if (!req.session.customerId) {
    return res.status(401).json({ msg: "mohon login ke akun anda" });
  }
  const customer = await Customer.findOne({
    attributes: [
      "uuid",
      "id",
      "name",
      "email",
      "provinsi",
      "alamat",
      "no_telp",
    ],
    where: {
      uuid: req.session.customerId,
    },
  });
  if (!customer)
    return res.status(404).json({ msg: "akun customer tidak ditemukan" });
  res.status(200).json(customer);
};

//   export const logOut = (req, res) => {
//     req.session.destroy((err) => {
//       if (err) return req.status(400).json({ msg: "Tidak dapat logout" });
//       res.status(200).json({ msg: "anda telah logout" });
//     });
//   };
