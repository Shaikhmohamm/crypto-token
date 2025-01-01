import React from "react";

const BackGround = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Element */}
      <video
        className="absolute top-0 left-0 w-full h-full object-fill"
        src="/bgvid.mp4" 
        autoPlay
        loop
        muted
      ></video>
    </div>
  );
};

export default BackGround;
