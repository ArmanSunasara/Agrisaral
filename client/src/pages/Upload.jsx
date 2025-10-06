import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadCropImage } from "../services/cropService";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleUpload = async () => {
    setError("");
    if (!file) {
      setError("Please select an image file.");
      return;
    }
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await uploadCropImage(file, token);
      // Redirect to diagnosis page with uploadId
      navigate(`/diagnosis/${res._id}`);
    } catch (err) {
      setError(err.response?.data?.msg || "Upload failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-12 animate-slideIn">
      <h2 className="text-3xl font-semibold text-green-700 mb-4">
        Upload Crop Image
      </h2>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4 border border-gray-300 p-2 rounded"
      />
      {file && <p className="text-gray-600">Selected: {file.name}</p>}
      {error && <div className="text-red-600 mb-2">{error}</div>}
      <button
        className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow-md transition-all duration-300"
        onClick={handleUpload}
        disabled={loading}
      >
        {loading ? "Uploading..." : "Diagnose"}
      </button>
    </div>
  );
};

export default Upload;
