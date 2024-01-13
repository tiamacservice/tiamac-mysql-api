import { Sequelize } from "sequelize";

const db = new Sequelize("tiamacse_tiamdb", "tiamacse_admin", "I#Gdcq)*9HOo", {
  host: "tiamacservice.my.id",
  dialect: "mysql",
});

export default db;
