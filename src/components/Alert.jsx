import React from "react";

const colorMap = {
  success: "bg-success text-background border-success",
  error: "bg-error text-background border-error",
  info: "bg-primary text-background border-primary",
};

export default function Alert({ type = "info", children }) {
  return (
    <div className={`border-l-4 p-4 mb-4 rounded shadow ${colorMap[type]}`}>{children}</div>
  );
}
