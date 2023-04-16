const Category = require("../model/category");
const {SystemError,ResponseSuccess} = require("../constant/response");
const ResError = require("../constant");

class CategoryController {
  postCategory = async (req, res) => {
    const category = req.body;
    try {
      await Category.Create(category);
      ResponseSuccess(res);
    } catch (error) {
      return SystemError(res, ResError.SYS_ERROR);
    }
  };
  getDetailCategory = async (req, res) => {
    const id = Number(req.params.id);
    try {
      let listDetail = await Category.GetCategoryById(id);
      ResponseSuccess(res, listDetail);
    } catch (error) {
      return SystemError(res, ResError.SYS_ERROR);
    }
  };
  getAllCategory = async (req, res) => {
    try {
      const listAll = await Category.findAll();
      ResponseSuccess(res, listAll);
    } catch (error) {
      return SystemError(res, ResError.SYS_ERROR);
    }
  };
  putCategory = async (req, res) => {
    const id = Number(req.params.id);
    const category = req.body;
    try {
      await Category.Update(id, category);
      ResponseSuccess(res);
    } catch (error) {
      return SystemError(res, ResError.SYS_ERROR);
    }
  };
  deleteCategory = async (req, res) => {
    const id = Number(req.params.id);
    try {
      await Category.Delete(id);
      ResponseSuccess(res);
    } catch (error) {
      return SystemError(res, ResError.SYS_ERROR);
    }
  };
}

module.exports = new CategoryController();
