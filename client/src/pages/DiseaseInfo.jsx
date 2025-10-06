import React from "react";

const DiseaseInfo = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-12 animate-fadeInUp">
      <h1 className="text-4xl font-bold text-green-800 text-center mb-10">
        Crop Disease Info
      </h1>
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 bg-green-50 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-green-700">Leaf Spot</h2>
          <p className="text-gray-700 mt-2">
            Common in rice and wheat. Appears as small dark spots on leaves.
            Controlled using fungicides and early diagnosis.
          </p>
        </div>
        <div className="mb-6 bg-green-50 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-green-700">Blight</h2>
          <p className="text-gray-700 mt-2">
            Sudden yellowing and death of leaves. Needs copper-based fungicide
            and crop rotation.
          </p>
        </div>
        <div className="mb-6 bg-green-50 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-green-700">
            Powdery Mildew
          </h2>
          <p className="text-gray-700 mt-2">
            White powdery spots on leaves and stems. Common in cucurbits and
            grapes. Treat with sulfur-based fungicides and improve air
            circulation.
          </p>
        </div>
        <div className="mb-6 bg-green-50 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-green-700">Rust</h2>
          <p className="text-gray-700 mt-2">
            Orange or brown pustules on the underside of leaves. Affects wheat,
            beans, and other crops. Use resistant varieties and fungicides.
          </p>
        </div>
        <div className="mb-6 bg-green-50 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold text-green-700">Wilt</h2>
          <p className="text-gray-700 mt-2">
            Sudden wilting and yellowing of plants. Caused by soil-borne fungi
            or bacteria. Practice crop rotation and use disease-free seeds.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiseaseInfo;
