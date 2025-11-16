import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { mockTransactions } from "../utils/mockTransactions";

export default function Points() {
  return (
    <DashboardLayout>
      <h2 className="text-2xl font-bold text-textPrimary mb-6">Points Wallet</h2>
      <div className="bg-white border border-borderColor rounded-2xl shadow-card p-6 mb-8">
        <div className="text-4xl font-bold text-success mb-2">120</div>
        <p className="text-sm text-textSecondary">Available Points</p>
      </div>
      <div className="bg-white border border-borderColor rounded-2xl shadow-card p-6">
        <h3 className="text-xl font-bold text-textPrimary mb-4">Transaction History</h3>
        <ul className="space-y-3">
          {mockTransactions.map(tx => (
            <li key={tx.id} className="flex items-center justify-between p-4 bg-background rounded-lg">
              <div>
                <p className="font-semibold text-textPrimary">{tx.description}</p>
                <p className="text-sm text-textSecondary">{tx.date}</p>
              </div>
              <div className={`font-bold ${tx.points > 0 ? "text-success" : "text-error"}`}>
                {tx.points > 0 ? "+" : ""}{tx.points} pts
              </div>
            </li>
          ))}
        </ul>
      </div>
    </DashboardLayout>
  );
}