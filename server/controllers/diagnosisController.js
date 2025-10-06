const Upload = require("../models/Upload");
const { identifyPlant } = require("../utils/plantIdAPI");
const CropDisease = require("../models/CropDisease");

exports.diagnoseImage = async (req, res) => {
  const upload = await Upload.findById(req.params.uploadId);
  if (!upload) return res.status(404).json({ msg: "Upload not found" });

  const result = await identifyPlant(upload.imageUrl);

  // Optional: Save to DB
  upload.diagnosis = result.disease || result.name;
  await upload.save();

  // Also fetch local advice if available
  const diseaseInfo = await CropDisease.findOne({ disease: result.disease });

  res.json({
    ...result,
    advice: diseaseInfo?.solution || "No advice found",
    prevention: diseaseInfo?.prevention || "No data"
  });
};

