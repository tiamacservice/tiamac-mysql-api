import Servis from "../models/ServisModel.js";
import Customer from "../models/CustomerModel.js";
import User from "../models/UserModel.js";
import { Op } from "sequelize";


import midtransClient from "midtrans-client";

// get servis

export const snap = new midtransClient.Snap({
  isProduction: false, // Ganti ke true jika sudah produksi
  serverKey: 'SB-Mid-server-fF93jgqGf3K3tpUumtK1BFFV', // Ganti dengan kunci server Midtrans Anda
});

// get servis
export const getServices = async (req, res) => {
  try {
    let response;
    if (req.role === "admin") {
      response = await Servis.findAll({
        attributes: [
          "uuid",
          "status",
          "alamat",
          "provinsi",
          "dateServis",
          "ser1",
          "ser2",
          "ser3",
          "ser4",
          "hrg1",
          "hrg2",
          "hrg3",
          "hrg4",
          "totalHarga",
        ],
        include: [
          {
            model: Customer,
            attributes: ["name", "email", "no_telp"],
          },
        ],
        include: [
          {
            model: Customer,
            attributes: ["name", "email", "no_telp"],
          },
          {
            model: User,
            attributes: ["name", "email"],
          },
        ],
      });
    }
    if (req.role === "karyawan") {
      response = await Servis.findAll({
        attributes: [
          "uuid",
          "status",
          "alamat",
          "provinsi",
          "dateServis",
          "ser1",
          "ser2",
          "ser3",
          "ser4",
          "hrg1",
          "hrg2",
          "hrg3",
          "hrg4",
          "totalHarga",
        ],
        where: {
          userId: req.userId,
        },
        include: [
          {
            model: Customer,
            attributes: ["name", "email", "no_telp"],
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getTokenPayment = async (req, res) => {
  // console.log(req.params.id);
  const servis = await Servis.findOne({
    where: {
      uuid: req.params.id,
    },
  });
  const orderId = servis.uuid; // Buat orderId unik
  
  // const transactionDetails = {
  //   orderId:servis.uuid,
  //   grossAmount: 200000, // Ganti dengan jumlah pembayaran yang diinginkan
  // };

  let parameter = {
    "transaction_details": {
        "order_id": orderId,
        "gross_amount": servis.totalHarga
    },
    "credit_card":{
        "secure" : true
    },
    "customer_details": {
        "first_name": "budi",
        "last_name": "pratama",
        "email": "budi.pra@example.com",
        "phone": "08111222333"
    }
};

// snap.createTransaction(parameter)
// .then((transaction)=>{
//     // transaction token
//     let transactionToken = transaction.token;
//     console.log('transactionToken:',transactionToken);
// })

  try {
    const tokenResponse = await snap.createTransaction(parameter);
    console.error(tokenResponse);

    res.json({ token: tokenResponse.token });
  } catch (error) {
    console.error('Error creating transaction token:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export const getServisId = async (req, res) => {
  try {
    const servis = await Servis.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!servis) return res.status(404).json({ msg: "Data tidak ditemukan" });
    let response;
    if (req.role === "admin") {
      response = await Servis.findOne({
        attributes: [
          "uuid",
          "status",
          "alamat",
          "provinsi",
          "dateServis",
          "ser1",
          "ser2",
          "ser3",
          "ser4",
          "hrg1",
          "hrg2",
          "hrg3",
          "hrg4",
          "totalHarga",
        ],
        where: {
          id: servis.id,
        },
        include: [
          {
            model: Customer,
            attributes: ["name", "email", "no_telp"],
          },
        ],
      });
    } else {
      response = await Servis.findOne({
        attributes: [
          "uuid",
          "status",
          "alamat",
          "provinsi",
          "dateServis",
          "ser1",
          "ser2",
          "ser3",
          "ser4",
          "hrg1",
          "hrg2",
          "hrg3",
          "hrg4",
          "totalHarga",
        ],
        where: {
          [Op.and]: [{ id: servis.id }, { userId: req.userId }],
        },
        include: [
          {
            model: Customer,
            attributes: ["name", "email", "no_telp"],
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const createServis = async (req, res) => {
  const { totalHarga, dateServis } = req.body;
  try {
    await Servis.create({
      totalHarga: totalHarga,
      dateServis: dateServis,
      status: "Menunggu Admin",
      customerId: req.customerId,
    });
    res.status(201).json({ msg: "Pelayanan Servis Berhasil Dipesan" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const updateServis = async (req, res) => {};

export const deleteServis = async (req, res) => {
  try {
    const servis = await Servis.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!servis) return res.status(404).json({ msg: "Data tidak ditemukan" });
    const { name, price } = req.body;
    if (req.role === "admin") {
      await Servis.destroy({
        where: {
          id: product.id,
        },
      });
    } else {
      if (req.userId !== product.userId)
        return res.status(403).json({ msg: "akses terlanrang" });
      await Product.destroy({
        where: {
          [Op.and]: [{ id: product.id }, { userId: req.userId }],
        },
      });
    }
    res.status(200).json({ msg: "produk berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//Detail Servis

export const allHargaByServisId = async (req, res) => {
  const data = await Servis.findAll({
    include: [PriceService],
  });
  res.status(200).send(data);
};

//Main Route
export const newservis = async (req, res) => {
  const {
    totalHarga,
    ser1,
    ser2,
    ser3,
    ser4,
    hrg1,
    hrg2,
    hrg3,
    hrg4,
    provinsi,
    alamat,
  } = req.body;

  try {
    await Servis.create({
      ser1: ser1,
      ser2: ser2,
      ser3: ser3,
      ser4: ser4,
      hrg1: hrg1,
      hrg2: hrg2,
      hrg3: hrg3,
      hrg4: hrg4,
      totalHarga: parseInt(hrg1)  + parseInt(hrg2) + parseInt(hrg3) + parseInt(hrg4),
      provinsi: provinsi,
      alamat: alamat,

      status: "Menunggu Jadwal",
      customerId: req.customerId,
    });

    res.status(201).json({ msg: "Layanan Servis Berhasil Dipesan" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const PenjadwalanServis = async (req, res) => {
  try {
    const servis = await Servis.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!servis) return res.status(404).json({ msg: "Data tidak ditemukan" });
    const { dateServis, status, userId } = req.body;
    if (req.role === "admin") {
      await Servis.update(
        { dateServis, status, userId },
        {
          where: {
            id: servis.id,
          },
        }
      );
    } else {
      if (req.userId !== servis.userId)
        return res.status(403).json({ msg: "akses terlanrang" });
      await Servis.update(
        { dateServis, status, userId },
        {
          where: {
            [Op.and]: [{ id: servis.id }, { userId: req.userId }],
          },
        }
      );
    }
    res.status(200).json({ msg: "Servis berhasil di update" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const konfirmasiTeknisi = async (req, res) => {
  try {
    const servis = await Servis.findOne({
      where: {
        uuid: req.params.id,
      },
    });
    if (!servis) return res.status(404).json({ msg: "Data tidak ditemukan" });
    const {
      totalHarga,
      ser1,
      ser2,
      ser3,
      ser4,
      hrg1,
      hrg2,
      hrg3,
      hrg4,
      status,
      userId,
    } = req.body;
    if (req.role === "admin") {
      await Servis.update(
        {
          totalHarga,
          ser1,
          ser2,
          ser3,
          ser4,
          hrg1,
          hrg2,
          hrg3,
          hrg4,
          userId,
          status,
        },
        {
          where: {
            id: servis.id,
          },
        }
      );
    } else {
      if (req.userId !== servis.userId)
        return res.status(403).json({ msg: "akses terlanrang" });
      await Servis.update(
        {
          totalHarga,
          ser1,
          ser2,
          ser3,
          ser4,
          hrg1,
          hrg2,
          hrg3,
          hrg4,
          userId,
          status,
        },
        {
          where: {
            [Op.and]: [{ id: servis.id }, { userId: req.userId }],
          },
        }
      );
    }
    res.status(200).json({ msg: "Servis berhasil di update" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//GET SERVIS WITH SPECIFIC STATUS (customer)

export const getAllServisCust = async (req, res) => {
  try {
    let response;
    response = await Servis.findAll({
      attributes: [
        "uuid",
        "status",
        "alamat",
        "provinsi",
        "dateServis",
        "ser1",
        "ser2",
        "ser3",
        "ser4",
        "hrg1",
        "hrg2",
        "hrg3",
        "hrg4",
        "totalHarga",
      ],
      where: {
        customerId: req.customerId,
      },
      include: [
        {
          model: Customer,
          attributes: ["name", "email", "no_telp"],
        },
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getMenungguPembayaranCust = async (req, res) => {
  try {
    let response;
    response = await Servis.findAll({
      attributes: [
        "uuid",
        "status",
        "alamat",
        "provinsi",
        "dateServis",
        "ser1",
        "ser2",
        "ser3",
        "ser4",
        "hrg1",
        "hrg2",
        "hrg3",
        "hrg4",
        "totalHarga",
      ],
      where: {
        customerId: req.customerId,
        status: "Menunggu Pembayaran",
      },
      include: [
        {
          model: Customer,
          attributes: ["name", "email", "no_telp"],
        },
      ],
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getServisSelesaiCust = async (req, res) => {
  try {
    let response;
    response = await Servis.findAll({
      attributes: [
        "uuid",
        "status",
        "alamat",
        "provinsi",
        "dateServis",
        "ser1",
        "ser2",
        "ser3",
        "ser4",
        "hrg1",
        "hrg2",
        "hrg3",
        "hrg4",
        "totalHarga",
      ],
      where: {
        customerId: req.customerId,
        status: "Selesai",
      },
      include: [
        {
          model: Customer,
          attributes: ["name", "email", "no_telp"],
        },
      ],
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getKonfirmasiCustomerCust = async (req, res) => {
  try {
    let response;
    response = await Servis.findAll({
      attributes: [
        "uuid",
        "status",
        "alamat",
        "provinsi",
        "dateServis",
        "ser1",
        "ser2",
        "ser3",
        "ser4",
        "hrg1",
        "hrg2",
        "hrg3",
        "hrg4",
        "totalHarga",
      ],
      where: {
        customerId: req.customerId,
        status: "Konfirmasi Customer",
      },
      include: [
        {
          model: Customer,
          attributes: ["name", "email", "no_telp"],
        },
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

//GET SERVIS WITH SPECIFIC STATUS

export const getMenungguPenjadwalan = async (req, res) => {
  try {
    let response;
    if (req.role === "admin") {
      response = await Servis.findAll({
        attributes: [
          "uuid",
          "status",
          "alamat",
          "provinsi",
          "dateServis",
          "ser1",
          "ser2",
          "ser3",
          "ser4",
          "hrg1",
          "hrg2",
          "hrg3",
          "hrg4",
          "totalHarga",
        ],
        where: {
          status: "Menunggu Jadwal",
        },
        include: [
          {
            model: Customer,
            attributes: ["name", "email", "no_telp"],
          },
        ],
        include: [
          {
            model: Customer,
            attributes: ["name", "email", "no_telp"],
          },
          {
            model: User,
            attributes: ["name", "email"],
          },
        ],
      });
    } else {
      response = await Servis.findAll({
        attributes: [
          "uuid",
          "status",
          "alamat",
          "provinsi",
          "dateServis",
          "ser1",
          "ser2",
          "ser3",
          "ser4",
          "hrg1",
          "hrg2",
          "hrg3",
          "hrg4",
          "totalHarga",
        ],
        where: {
          userId: req.userId,
          status: "Menunggu Jadwal",
        },
        include: [
          {
            model: Customer,
            attributes: ["name", "email", "no_telp"],
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getKonfirmasiTeknisi = async (req, res) => {
  try {
    let response;
    if (req.role === "admin") {
      response = await Servis.findAll({
        attributes: [
          "uuid",
          "status",
          "alamat",
          "provinsi",
          "dateServis",
          "ser1",
          "ser2",
          "ser3",
          "ser4",
          "hrg1",
          "hrg2",
          "hrg3",
          "hrg4",
          "totalHarga",
        ],
        where: {
          status: "Konfirmasi Teknisi",
        },
        include: [
          {
            model: Customer,
            attributes: ["name", "email", "no_telp"],
          },
        ],
        include: [
          {
            model: Customer,
            attributes: ["name", "email", "no_telp"],
          },
          {
            model: User,
            attributes: ["name", "email"],
          },
        ],
      });
    } else {
      response = await Servis.findAll({
        attributes: [
          "uuid",
          "status",
          "alamat",
          "provinsi",
          "dateServis",
          "ser1",
          "ser2",
          "ser3",
          "ser4",
          "hrg1",
          "hrg2",
          "hrg3",
          "hrg4",
          "totalHarga",
        ],
        where: {
          status: "Konfirmasi Teknisi",
          userId: req.userId,
        },
        include: [
          {
            model: Customer,
            attributes: ["name", "email", "no_telp"],
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getMenungguPembayaran = async (req, res) => {
  try {
    let response;
    if (req.role === "admin") {
      response = await Servis.findAll({
        attributes: [
          "uuid",
          "status",
          "alamat",
          "provinsi",
          "dateServis",
          "ser1",
          "ser2",
          "ser3",
          "ser4",
          "hrg1",
          "hrg2",
          "hrg3",
          "hrg4",
          "totalHarga",
        ],
        where: {
          status: "Menunggu Pembayaran",
        },
        include: [
          {
            model: Customer,
            attributes: ["name", "email", "no_telp"],
          },
        ],
        include: [
          {
            model: Customer,
            attributes: ["name", "email", "no_telp"],
          },
          {
            model: User,
            attributes: ["name", "email"],
          },
        ],
      });
    }
    if (req.role === "karyawan") {
      response = await Servis.findAll({
        attributes: [
          "uuid",
          "status",
          "alamat",
          "provinsi",
          "dateServis",
          "ser1",
          "ser2",
          "ser3",
          "ser4",
          "hrg1",
          "hrg2",
          "hrg3",
          "hrg4",
          "totalHarga",
        ],
        where: {
          userId: req.userId,
          status: "Menunggu Pembayaran",
        },
        include: [
          {
            model: Customer,
            attributes: ["name", "email", "no_telp"],
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getProsesServis = async (req, res) => {
  try {
    let response;
    if (req.role === "admin") {
      response = await Servis.findAll({
        attributes: [
          "uuid",
          "status",
          "alamat",
          "provinsi",
          "dateServis",
          "ser1",
          "ser2",
          "ser3",
          "ser4",
          "hrg1",
          "hrg2",
          "hrg3",
          "hrg4",
          "totalHarga",
        ],
        where: {
          status: "Proses Servis",
        },
        include: [
          {
            model: Customer,
            attributes: ["name", "email", "no_telp"],
          },
        ],
        include: [
          {
            model: Customer,
            attributes: ["name", "email", "no_telp"],
          },
          {
            model: User,
            attributes: ["name", "email"],
          },
        ],
      });
    } else {
      response = await Servis.findAll({
        attributes: [
          "uuid",
          "status",
          "alamat",
          "provinsi",
          "dateServis",
          "ser1",
          "ser2",
          "ser3",
          "ser4",
          "hrg1",
          "hrg2",
          "hrg3",
          "hrg4",
          "totalHarga",
        ],
        where: {
          userId: req.userId,
          status: "Proses Servis",
        },
        include: [
          {
            model: Customer,
            attributes: ["name", "email", "no_telp"],
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getKonfirmasiCustomer = async (req, res) => {
  try {
    let response;
    if (req.role === "admin") {
      response = await Servis.findAll({
        attributes: [
          "uuid",
          "status",
          "alamat",
          "provinsi",
          "dateServis",
          "ser1",
          "ser2",
          "ser3",
          "ser4",
          "hrg1",
          "hrg2",
          "hrg3",
          "hrg4",
          "totalHarga",
        ],
        where: {
          status: "Konfirmasi Customer",
        },
        include: [
          {
            model: Customer,
            attributes: ["name", "email", "no_telp"],
          },
        ],
        include: [
          {
            model: Customer,
            attributes: ["name", "email", "no_telp"],
          },
          {
            model: User,
            attributes: ["name", "email"],
          },
        ],
      });
    }
    if (req.role === "karyawan") {
      response = await Servis.findAll({
        attributes: [
          "uuid",
          "status",
          "alamat",
          "provinsi",
          "dateServis",
          "ser1",
          "ser2",
          "ser3",
          "ser4",
          "hrg1",
          "hrg2",
          "hrg3",
          "hrg4",
          "totalHarga",
        ],
        where: {
          userId: req.userId,
          status: "Konfirmasi Customer",
        },
        include: [
          {
            model: Customer,
            attributes: ["name", "email", "no_telp"],
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const getServisSelesai = async (req, res) => {
  try {
    let response;
    if (req.role === "admin") {
      response = await Servis.findAll({
        attributes: [
          "uuid",
          "status",
          "alamat",
          "provinsi",
          "dateServis",
          "ser1",
          "ser2",
          "ser3",
          "ser4",
          "hrg1",
          "hrg2",
          "hrg3",
          "hrg4",
          "totalHarga",
        ],
        where: {
          status: "Selesai",
        },
        include: [
          {
            model: Customer,
            attributes: ["name", "email", "no_telp"],
          },
        ],
        include: [
          {
            model: Customer,
            attributes: ["name", "email", "no_telp"],
          },
          {
            model: User,
            attributes: ["name", "email"],
          },
        ],
      });
    }
    if (req.role === "karyawan") {
      response = await Servis.findAll({
        attributes: [
          "uuid",
          "status",
          "alamat",
          "provinsi",
          "dateServis",
          "ser1",
          "ser2",
          "ser3",
          "ser4",
          "hrg1",
          "hrg2",
          "hrg3",
          "hrg4",
          "totalHarga",
        ],
        where: {
          userId: req.userId,
          status: "Selesai",
        },
        include: [
          {
            model: Customer,
            attributes: ["name", "email", "no_telp"],
          },
        ],
      });
    }
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
