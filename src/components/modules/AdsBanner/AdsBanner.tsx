import React from "react";

const AdsBanner = () => {
  return (
    <div className="relative w-full min-h-[150px] rounded-2xl overflow-hidden pointer-events-none">
      <img
        className="absolute w-full h-full object-cover"
        src="/images/ads-banner.jpg"
        alt="Advertisement"
      />
    </div>
  );
};

export default AdsBanner;
