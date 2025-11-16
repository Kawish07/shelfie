import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import Badge from "../components/Badge";
import { mockOrders } from "../utils/mockOrders";

export default function Orders() {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold text-textPrimary mb-6">Your Orders</h2>
      <div className="bg-white border border-borderColor rounded-2xl shadow-card p-6">
        <ul className="space-y-4">
          {mockOrders.map(order => (
            <li key={order.id} className="flex items-center justify-between p-4 bg-background rounded-lg hover:shadow-soft transition-shadow">
              <div>
                <p className="font-semibold text-textPrimary">{order.bookTitle}</p>
                <p className="text-sm text-textSecondary">{order.date}</p>
              </div>
              <Badge color={order.status === "Delivered" ? "success" : order.status === "Shipped" ? "primary" : "accent"}>{order.status}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </DashboardLayout>
  );
}