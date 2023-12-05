import Customer from "../models/CustomerModel.js";

export const getCustomers = async (req, res) => {
  try {
    const response = await Customer.findAll({
      attributes: ["uuid", "name", "email", "provinsi", "no_telp", "alamat"],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getCustomerById = async (req, res) => {
  try {
    const response = await Customer.findOne({
      attributes: [
        "uuid",
        "name",
        "email",
        "role",
        "provinsi",
        "no_telp",
        "alamat",
      ],
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createCustomer = async (req, res) => {
  const { name, email, password, confPassword, no_telp, provinsi, alamat } =
    req.body;
  if (password !== confPassword)
    return res.status(400).json({ msg: "Password dan confirm tidak cocok" });
  try {
    await Customer.create({
      name: name,
      email: email,
      password: password,
      no_telp: no_telp,
      provinsi: provinsi,
      alamat: alamat,
    });
    res.status(201).json({ msg: "Register customer berhasil" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateCustomer = async (req, res) => {};

export const deleteCustomer = async (req, res) => {
  const customer = await Customer.findOne({
    where: {
      uuid: req.params.id,
    },
  });
  if (!customer)
    return res.status(404).json({ msg: "Customer tidak ditemukan" });
  try {
    await Customer.destroy({
      where: {
        id: customer.id,
      },
    });
    res.status(200).json({ msg: "Customer Deleted" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
