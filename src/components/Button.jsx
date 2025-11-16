import React from "react";

const VARIANTS = {
  primary: "bg-primary text-background hover:bg-primary/90",
  accent: "bg-accent text-background hover:bg-accent/90",
  ghost: "bg-transparent text-primary border border-borderColor hover:bg-primary/10",
};

export default function Button({ children, variant = "primary", ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded font-semibold transition-colors duration-200 shadow-sm ${VARIANTS[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
}
