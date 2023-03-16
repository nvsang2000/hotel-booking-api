const connect = require("../db/connectDB");
const Conn = require("../db/Conn")
class Category {
  findAll = () => {
    return new Promise((resolve, reject) => {
      connect.query("SELECT * FROM category", function (err, data) {
        if (err) {
          reject(new Error(err));
        } else {
          resolve(data);
        }
      });
    });
  };
  Create = (category) => {
    const sql = "INSERT INTO category (banner, tilte) VALUE (?,?)";
    const value = [category.banner, category.tilte]
    return Conn.Excute(sql, value);
  }
  GetCategoryById = (id) => {
    const sql = "SELECT * FROM category WHERE id = ?";
    return Conn.GetOne(sql, [id])
  }
  Update = (id, category) => {
    const sql = "UPDATE category SET? WHERE id = ?";
    return Conn.Excute(sql,[category, id])
  }
  Delete = (id) => {
    const sql = "DELETE FROM category WHERE id = ?"
    return Conn.Excute(sql,[id])
  }
}

module.exports = new Category()
