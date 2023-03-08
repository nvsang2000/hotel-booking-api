const mysql = require("mysql");
const connect = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

connect.connect(function (err) {
  if (err) throw err.stack;
  console.log("ket noi thanh cong");
});

module.exports = connect;
