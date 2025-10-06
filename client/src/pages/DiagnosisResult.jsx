import React from 'react';

const DiagnosisResult = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col justify-center items-center animate-zoomIn">
      <h1 className="text-4xl font-bold text-green-800 mb-4">Diagnosis Result</h1>
      <p className="text-gray-700 mb-2">Disease: <strong>Leaf Spot</strong></p>
      <p className="text-gray-700 mb-4">Recommended Action: Use fungicide spray twice a week.</p>
      <img
        src="https://source.unsplash.com/500x300/?disease,leaf"
        alt="Diagnosis"
        className="rounded-lg shadow-lg"
      />
    </div>
  );
};

export default DiagnosisResult;
