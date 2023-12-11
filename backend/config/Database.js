import { Sequelize } from "sequelize";

const db = new Sequelize(
  "tiamdb_rememberto",
  "tiamdb_rememberto",
  "24f82d6234a6ec74d787b7d0c0c35ca57ed6bd18",
  {
    host: "v10.h.filess.io",
    dialect: "mysql",
    port: 3307,
  }
);

// const db = new Sequelize('tiam_db', 'root','',{
//     host:"localhost",
//     dialect:"mysql"
// });

export default db;
