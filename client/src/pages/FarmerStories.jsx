import React from "react";

const FarmerStories = () => {
  const stories = [
    {
      name: "Ravi Kumar",
      story:
        "I diagnosed my crops early and saved my entire farm using AgriSaral!",
      img: "https://source.unsplash.com/300x200/?farmer",
    },
    {
      name: "Sunita Devi",
      story:
        "AgriSaral helped me know what was wrong with my plants in minutes.",
      img: "https://source.unsplash.com/301x200/?indian,farming",
    },
    {
      name: "Amit Singh",
      story:
        "With AgriSaral, I could identify blight in my tomatoes and act before it spread. My yield increased by 30% this year!",
      img: "https://source.unsplash.com/302x200/?tomato,farmer",
    },
    {
      name: "Priya Patel",
      story:
        "The disease info and diagnosis tools are so easy to use. I recommend AgriSaral to all my neighbors.",
      img: "https://source.unsplash.com/303x200/?woman,farmer",
    },
    {
      name: "Mohammed Irfan",
      story:
        "I was able to save my wheat crop from rust after using AgriSaral. Thank you for this amazing platform!",
      img: "https://source.unsplash.com/304x200/?wheat,farmer",
    },
    {
      name: "Lakshmi Nair",
      story:
        "AgriSaral gave me confidence to try new crops and manage diseases better. My farm is thriving!",
      img: "https://source.unsplash.com/305x200/?kerala,farmer",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-12 px-6 animate-slideIn">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-10">
        Farmer Success Stories
      </h1>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {stories.map((farmer, index) => (
          <div
            key={index}
            className="bg-green-50 rounded-lg p-6 shadow-md hover:shadow-xl transition-all"
          >
            <img
              src={farmer.img}
              alt={farmer.name}
              className="rounded mb-4 w-full h-48 object-cover"
            />
            <h2 className="text-xl font-bold text-green-700">{farmer.name}</h2>
            <p className="text-gray-700 mt-2">{farmer.story}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmerStories;
