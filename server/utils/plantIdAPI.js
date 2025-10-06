const axios = require("axios");

exports.identifyPlant = async (imageUrl) => {
  const apiKey = process.env.PLANT_ID_API_KEY;

  const res = await axios.post("https://api.plant.id/v2/identify", {
    images: [imageUrl],
    modifiers: ["crops_fast", "similar_images"],
    plant_language: "en",
    plant_details: ["disease", "description"],
    api_key: apiKey
  });

  // You can return full data, or extract only useful parts
  const suggestion = res.data?.suggestions?.[0];

  return {
    name: suggestion?.plant_name || "Unknown",
    probability: suggestion?.probability || 0,
    disease: suggestion?.plant_details?.disease?.[0]?.name || "Not found",
    description: suggestion?.plant_details?.disease?.[0]?.description || "N/A"
  };
};
