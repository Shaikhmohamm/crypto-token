import React from "react";

const BackGround = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/asnan.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Dark Overlay for Visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

      {/* Content Overlay */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold">Big Bull</h1>
        <p className="mt-4 text-lg md:text-xl">Light the sky, and the market too!</p>
        <button className="mt-8 px-6 py-3 bg-white text-blue-500 rounded-full hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default BackGround;
