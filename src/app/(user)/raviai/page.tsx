"use client";
import React from "react";

const page = () => {
  return (
      <div className="mb-10 p-6 border rounded-lg shadow-sm">
        <div className="relative h-[500px] sm:h-[400px] md:h-[500px] lg:h-[600px]"> {/* Reduced width and increased height */}
          <iframe
            src="https://adityabot.ccbp.tech/"
            width="100%"  // 100% width to fit the container (now 1/3 of the parent)
            height="100%"  // 100% height of the div container
            className="rounded-lg shadow-md"
            style={{ border: "none" }}
          />
        </div>
      </div>
  );
};

export default page;
