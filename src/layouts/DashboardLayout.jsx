import React from "react";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

export default function DashboardLayout({ children, admin = false }) {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar admin={admin} />
        <main className="flex-1 p-8 max-w-6xl mx-auto">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
