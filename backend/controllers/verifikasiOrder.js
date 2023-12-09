import Customer from "../models/ServisModel.js";


export const verfikasiCustomer = async (req, res) => {
    const customer = await Customer.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!customer)
      return res.status(404).json({ msg: "customer tidak ditemukan" });

  
    res
      .status(200)
      .json({ success:'Berhasil' });
  };