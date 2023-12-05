import { Sequelize } from "sequelize";

const db = new Sequelize("sql12667716", "sql12667716", "hbN6ISswME", {
  host: "sql12.freesqldatabase.com",
  dialect: "mysql",
});

// const db = new Sequelize('tiam_db', 'root','',{
//     host:"localhost",
//     dialect:"mysql"
// });

export default db;
