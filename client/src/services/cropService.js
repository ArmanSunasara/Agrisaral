import api from "./api";

export const uploadCropImage = async (file, token) => {
  const formData = new FormData();
  formData.append("image", file);
  const headers = token ? { Authorization: token } : {};
  const res = await api.post("/upload", formData, { headers });
  return res.data;
};
