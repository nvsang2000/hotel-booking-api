var mysql = require("mysql");
var connect = mysql.createConnection({
  host: "sql9.freemysqlhosting.net",
  user: "sql9599743",
  password: "bD5aUI1yDY",
  database: "sql9599743",
});

connect.connect(function (err) {
  if (err) throw err.stack;
  console.log("ket noi thanh cong");
});

module.exports = connect;
