import React from "react";

export default function Input({ label, ...props }) {
  return (
    <div className="flex flex-col gap-1 mb-4">
      {label && <label className="text-textPrimary font-medium mb-1">{label}</label>}
      <input
        className="border border-borderColor rounded px-3 py-2 bg-background text-textPrimary focus:outline-none focus:ring-2 focus:ring-primary"
        {...props}
      />
    </div>
  );
}
