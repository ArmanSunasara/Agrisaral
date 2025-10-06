// Weather API utility
const axios = require("axios");

exports.getWeatherData = async (lat, lng) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    console.error("Weather API error:", error.message);
    return null;
  }
};
