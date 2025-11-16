import React from "react";

export default function Breadcrumbs({ items }) {
  return (
    <nav className="flex items-center gap-2 text-sm text-textSecondary mb-4">
      {items.map((item, idx) => (
        <span key={item.label} className="flex items-center">
          <a href={item.href} className="hover:text-accent font-medium">
            {item.label}
          </a>
          {idx < items.length - 1 && <span className="mx-2">/</span>}
        </span>
      ))}
    </nav>
  );
}
