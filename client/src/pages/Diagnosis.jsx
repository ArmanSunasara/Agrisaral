import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

const Diagnosis = () => {
  const { uploadId } = useParams();
  const [diagnosis, setDiagnosis] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDiagnosis = async () => {
      if (!uploadId) return;
      setLoading(true);
      setError("");
      try {
        const token = localStorage.getItem("token");
        const res = await api.get(`/diagnose/${uploadId}`, {
          headers: token ? { Authorization: token } : {},
        });
        setDiagnosis(res.data);
      } catch (err) {
        setError(err.response?.data?.msg || "Failed to fetch diagnosis");
      } finally {
        setLoading(false);
      }
    };
    fetchDiagnosis();
  }, [uploadId]);

  useEffect(() => {
    // Fetch previous uploads for the user
    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await api.get("/upload/history", {
          headers: token ? { Authorization: token } : {},
        });
        setHistory(res.data);
      } catch {
        // ignore
      }
    };
    fetchHistory();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 flex flex-col items-center p-6">
      <div className="bg-white rounded-2xl shadow-xl p-10 max-w-2xl w-full mb-8">
        <h1 className="text-3xl font-bold text-green-700 mb-6 text-center">
          Diagnosis Result
        </h1>
        {loading && <div>Loading...</div>}
        {error && <div className="text-red-600 mb-4">{error}</div>}
        {diagnosis && (
          <div className="text-gray-700 space-y-4">
            <p>
              <strong>Disease:</strong> {diagnosis.disease || diagnosis.name}
            </p>
            <p>
              <strong>Confidence:</strong>{" "}
              {diagnosis.probability
                ? `${(diagnosis.probability * 100).toFixed(1)}%`
                : "-"}
            </p>
            <p>
              <strong>Recommendation:</strong>{" "}
              {diagnosis.advice || diagnosis.description || "No advice found"}
            </p>
            <p>
              <strong>Prevention:</strong> {diagnosis.prevention || "-"}
            </p>
          </div>
        )}
        <div className="mt-6 text-center">
          <button
            className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
            onClick={() => navigate("/upload")}
          >
            Back to Upload
          </button>
        </div>
      </div>
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          Previous Diagnoses
        </h2>
        {history.length === 0 ? (
          <div>No previous diagnoses found.</div>
        ) : (
          <ul className="divide-y divide-gray-200">
            {history.map((item) => (
              <li
                key={item._id}
                className="py-3 flex flex-col md:flex-row md:items-center md:justify-between"
              >
                <span>
                  <span className="font-semibold">{item.diagnosis}</span> &nbsp;
                  <span className="text-gray-500 text-sm">
                    {new Date(item.createdAt).toLocaleString()}
                  </span>
                </span>
                <button
                  className="text-green-700 underline mt-2 md:mt-0"
                  onClick={() => navigate(`/diagnosis/${item._id}`)}
                >
                  View
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Diagnosis;
