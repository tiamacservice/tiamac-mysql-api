import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";
import Customers from "./CustomerModel.js";

const { DataTypes } = Sequelize;

const Servis = db.define(
  "servis",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    status: {
      type: DataTypes.STRING,
    },
    alamat: {
      type: DataTypes.STRING,
    },
    provinsi: {
      type: DataTypes.STRING,
    },
    dateServis: {
      type: DataTypes.DATEONLY,
    },

    customerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    userId: {
      type: DataTypes.INTEGER,
    },
    ser1: {
      type: DataTypes.STRING,
    },
    ser2: {
      type: DataTypes.STRING,
    },
    ser3: {
      type: DataTypes.STRING,
    },
    ser4: {
      type: DataTypes.STRING,
    },
    hrg1: {
      type: DataTypes.INTEGER,
    },
    hrg2: {
      type: DataTypes.INTEGER,
    },
    hrg3: {
      type: DataTypes.INTEGER,
    },
    hrg4: {
      type: DataTypes.INTEGER,
    },
    totalHarga: {
      type: DataTypes.BIGINT,
    },
  },
  {
    freezeTableName: true,
  }
);

Users.hasMany(Servis);
Servis.belongsTo(Users, { foreignKey: "userId" });

Customers.hasMany(Servis);
Servis.belongsTo(Customers, { foreignKey: "customerId" });

export default Servis;
