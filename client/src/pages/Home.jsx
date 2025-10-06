import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-green-200 flex flex-col items-center justify-center px-6 animate-fadeIn">
      <h1 className="text-5xl font-extrabold text-green-800 drop-shadow-md mb-4">Welcome to AgriSaral</h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl mb-6">
        Your smart agriculture companion. Diagnose crop diseases, explore farmer stories, and manage farm health—effortlessly.
      </p>
      <img
        src="https://source.unsplash.com/800x400/?agriculture,farm"
        alt="Farming"
        className="rounded-lg shadow-xl w-full max-w-3xl"
      />
    </div>
  );
};

export default Home;
