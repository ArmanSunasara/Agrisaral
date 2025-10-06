import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8 animate-fadeInUp">
      <h1 className="text-4xl font-bold text-center text-green-800 mb-6">Contact Us</h1>
      <form className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full mb-4 p-3 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full mb-4 p-3 border border-gray-300 rounded"
        />
        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-full mb-6 p-3 border border-gray-300 rounded"
        ></textarea>
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded w-full">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
