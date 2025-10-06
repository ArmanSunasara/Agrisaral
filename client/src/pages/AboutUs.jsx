import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex flex-col justify-center items-center animate-fadeIn">
      <h1 className="text-4xl font-bold text-green-800 mb-6">About AgriSaral</h1>
      <p className="text-gray-700 max-w-3xl text-center text-lg leading-7">
        AgriSaral is an AI-powered agriculture assistant built to help farmers identify crop diseases, find treatments, and access farming success stories. We are on a mission to simplify agriculture through technology.
      </p>
    </div>
  );
};

export default AboutUs;
