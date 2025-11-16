import React from "react";

export default function Badge({ children, color = "primary" }) {
  const colorMap = {
    primary: "bg-primary text-background",
    accent: "bg-accent text-background",
    success: "bg-success text-background",
    error: "bg-error text-background",
    ghost: "bg-background text-primary border border-borderColor",
  };
  return (
    <span className={`px-2 py-1 rounded text-xs font-semibold ${colorMap[color]}`}>{children}</span>
  );
}
