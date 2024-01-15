import { Sequelize } from "sequelize";

const db = new Sequelize("tiam_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
