const Category = require("../../model/category");
const Product = require("../../model/products");

class HomeController {
  getHome = async (req, res) => {
    const category = await Category.findAll();
    const products = await Product.findAll();
    return res.render("home/home", {
      title: "Home",
      category: category,
      products: products,
    });
  };
  getProduct = async (req, res) => {
    const productId = req.params.id
    const productDetail = await Product.findById(productId);
    if (Object.keys(productDetail).length > 0) {
      return res.render("products/productDetail", {
        title: "Products",
        product: productDetail,
      });
    }
    return res.redirect('/')
  }
}

module.exports = new HomeController()