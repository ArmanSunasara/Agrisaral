// Upload middleware
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({});
const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname);
  if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
    return cb(new Error("Only images allowed"), false);
  }
  cb(null, true);
};

module.exports = multer({ storage, fileFilter });
