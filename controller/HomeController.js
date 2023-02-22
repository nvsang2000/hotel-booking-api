const connect = require("../db/connectDB");
const Category = require("../model/category");
const Product = require("../model/product");

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
    const product = {
      ...productDetail?.[0],
      slideBanner: JSON.parse(productDetail?.[0]?.slideBanner),
    }; 

    console.log("productDetail", product);
    if (productDetail.length > 0) {
      return res.render("products/productDetail", {
        title: "Products",
        product: product,
      });
    }
  }
}

module.exports = new HomeController()