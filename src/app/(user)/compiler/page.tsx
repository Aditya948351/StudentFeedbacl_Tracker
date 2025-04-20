"use client";
import React from "react";

const page = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      {/* WebView Box */}
      <div className="mb-10 p-6 border rounded-lg shadow-sm">
        <div className="relative w-full h-[600px] sm:h-[500px] md:h-[600px] lg:h-[800px]"> {/* Responsive height */}
          <iframe
            src="https://apis-qgxq.onrender.com/"
            width="100%"  // 100% width to fit the container
            height="100%"  // 100% height of the div container
            className="rounded-lg shadow-md"
            style={{ border: "none" }}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
