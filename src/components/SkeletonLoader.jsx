import React from "react";

export default function SkeletonLoader({ className = "h-6 w-full" }) {
  return (
    <div className={`animate-pulse bg-borderColor rounded ${className}`}></div>
  );
}
