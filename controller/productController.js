const product = require("../model/products");
const {
  SystemError,
  ResponseSuccess,
  ResponseFailed,
} = require("../constant/response");
const ResError = require("../constant");
class ProductController {
  postProduct = async (req, res) => {
    const basic_info = req.body;
    try {
      await product.Create(basic_info);
      ResponseSuccess(res);
    } catch (error) {
      SystemError(res, ResError.SYS_ERROR);
    }
  };

  getProducts = async (req, res) => {
    try {
      const list = await product.findAll();
      ResponseSuccess(res, list.reverse());
    } catch (error) {
      SystemError(res, ResError.SYS_ERROR);
    }
  };

  getProduct = async (req, res) => {
    const id = Number(req.params.id);
    try {
      const checkId = await product.findById(id);
      if (!checkId) return ResponseFailed(res, ResError.NOT_FOUND_DATA);
      const list = await product.findById(id);
      ResponseSuccess(res, list);
    } catch (error) {
      SystemError(res, ResError.SYS_ERROR);
    }
  };

  putProduct = async (req, res) => {
    const id = Number(req.params.id);
    const basic_info = req.body;
    try {
      await product.Update(basic_info, id);
      ResponseSuccess(res);
    } catch (error) {
      SystemError(res, ResError.SYS_ERROR);
    }
  };
  deleteProduct = async (req, res) => {
    const id = Number(req.params.id);
    try {
      const checkId = await product.findById(id);
      if (!checkId) return ResponseFailed(res, ResError.NOT_FOUND_DATA);
      await product.Delete(id);
      ResponseSuccess(res);
    } catch (error) {
      SystemError(res, ResError.SYS_ERROR);
    }
  };
}

module.exports = new ProductController();
