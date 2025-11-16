import React from "react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-borderColor py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 text-center text-textSecondary">
        <span className="font-semibold text-primary">Shelfie</span> &copy; {new Date().getFullYear()} — Pakistan Book Exchange Platform
      </div>
    </footer>
  );
}
