// Upload controller
const cloudinary = require("../config/cloudinary");
const Upload = require("../models/Upload");

exports.uploadImage = async (req, res) => {
  const result = await cloudinary.uploader.upload(req.file.path);
  
  const upload = new Upload({
    imageUrl: result.secure_url,
    user: req.user.id,
    diagnosis: "Pending"
  });

  await upload.save();
  res.status(201).json(upload);
};
