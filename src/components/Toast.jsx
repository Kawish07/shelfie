import React, { useEffect } from "react";

export default function Toast({ message, type = "accent", onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const colorMap = {
    accent: "bg-accent text-background",
    primary: "bg-primary text-background",
    success: "bg-success text-background",
    error: "bg-error text-background",
  };

  return (
    <div className={`fixed top-6 right-6 px-4 py-2 rounded shadow-lg z-50 ${colorMap[type]}`}>
      {message}
    </div>
  );
}
