var mysql = require("mysql");
var connect = mysql.createConnection({
  host: "sql9.freemysqlhosting.net",
  user: "sql9601403",
  password: "8lyetW1BSB",
  database: "sql9601403",
});

connect.connect(function (err) {
  if (err) throw err.stack;
  console.log("ket noi thanh cong");
});

module.exports = connect;
