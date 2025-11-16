import React from "react";

const userLinks = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Points", href: "/points" },
  { name: "Referrals", href: "/referrals" },
  { name: "Notifications", href: "/notifications" },
];

const adminLinks = [
  { name: "Admin Home", href: "/admin" },
  { name: "Book Reviews", href: "/admin/reviews" },
  { name: "Users", href: "/admin/users" },
  { name: "Points", href: "/admin/points" },
  { name: "Reports", href: "/admin/reports" },
];

export default function Sidebar({ admin = false }) {
  const links = admin ? adminLinks : userLinks;
  return (
    <aside className="bg-primary text-background w-64 min-h-screen p-6 flex flex-col gap-4 shadow-lg">
      <div className="text-2xl font-bold mb-8">{admin ? "Admin" : "User"} Panel</div>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="py-2 px-3 rounded hover:bg-background hover:text-primary transition-colors text-lg font-medium"
        >
          {link.name}
        </a>
      ))}
    </aside>
  );
}
