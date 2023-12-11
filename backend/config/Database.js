import { Sequelize } from "sequelize";

const db = new Sequelize("tiamacse_tiamdb", "tiamacse_admin", "I#Gdcq)*9HOo", {
  host: "tiamacservice.my.id",
  dialect: "mysql",
});

// const db = new Sequelize('tiam_db', 'root','',{
//     host:"localhost",
//     dialect:"mysql"
// });

export default db;
