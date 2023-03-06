const mysql = require("mysql");
const connect = mysql.createConnection({
  host: "db4free.net",
  user: "adminbooking123",
  password: "adminbooking123",
  database: "hotelbooking12",
});

connect.connect(function (err) {
  if (err) throw err.stack;
  console.log("ket noi thanh cong");
});

module.exports = connect;
