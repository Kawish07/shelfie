import React from "react";
import MainLayout from "../layouts/MainLayout";
import { mockNotifications } from "../utils/mockNotifications";
import Badge from "../components/Badge";

export default function Notifications() {
  return (
    <MainLayout>
      <h2 className="text-2xl font-bold text-textPrimary mb-6">Notification Center</h2>
      <div className="max-w-lg mx-auto bg-background border border-borderColor rounded-lg shadow p-8">
        <ul>
          {mockNotifications.map(n => (
            <li key={n.id} className="mb-4 border-b border-borderColor pb-4">
              <Badge color={n.type}>{n.type.charAt(0).toUpperCase() + n.type.slice(1)}</Badge>
              <span className="ml-2 text-textPrimary font-medium">{n.message}</span>
              <div className="text-xs text-textSecondary mt-1">{n.date}</div>
            </li>
          ))}
        </ul>
      </div>
    </MainLayout>
  );
}
