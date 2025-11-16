import React from "react";
import MainLayout from "../layouts/MainLayout";
import Badge from "../components/Badge";
import { mockReferrals } from "../utils/mockReferrals";

export default function Referral() {
  return (
    <MainLayout>
      <h2 className="text-2xl font-bold text-textPrimary mb-6">Referral System</h2>
      <div className="bg-background border border-borderColor rounded-lg shadow p-8 max-w-lg mx-auto mb-8">
        <div className="mb-4">
          <span className="font-semibold text-textPrimary">Your Referral Code:</span>
          <Badge color="accent" className="ml-2">SHELFIE123</Badge>
        </div>
        <div className="mb-4">
          <span className="font-semibold text-textPrimary">Points Earned via Referrals:</span>
          <Badge color="success" className="ml-2">40</Badge>
        </div>
      </div>
      <div className="bg-background border border-borderColor rounded-lg shadow p-8 max-w-lg mx-auto">
        <h3 className="text-lg font-semibold text-textPrimary mb-2">Referred Users</h3>
        <ul className="text-textSecondary">
          {mockReferrals.map(ref => (
            <li key={ref.id} className="mb-2">
              <span className="font-medium text-textPrimary">{ref.user}</span> — {ref.points} pts
            </li>
          ))}
        </ul>
      </div>
    </MainLayout>
  );
}
