import React from "react";
import Button from "./Button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Catalog", href: "/catalog" },
  { name: "Upload", href: "/upload" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Admin", href: "/admin" },
];

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-borderColor shadow-sm sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-emerald-700 rounded-lg flex items-center justify-center shadow-soft">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="text-2xl font-bold text-primary tracking-tight">Shelfie</span>
        </div>
        
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-textPrimary font-medium text-sm tracking-wide relative py-2 transition-colors hover:text-primary after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </a>
          ))}
        </div>
        
        <Button variant="accent" className="px-6 py-2.5 font-semibold">Login</Button>
      </div>
    </nav>
  );
}