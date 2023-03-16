const cloudinary = require("../../middlewares/cloudinary");

const postUpload = async (req, res) => {
  try {
    if (req?.file) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "hotel_booking",
      });
      if (result.url) {
        return res.json({ status: 200, url: result.url });
      } else {
        return res.json({ status: 300, message: "không tìm thấy url" });
      }
    }
  } catch (error) {
    return res.json({ status: 500, message: "Lỗi server" });
  }
};

module.exports = postUpload;
