import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { mockUsers } from "../utils/mockUsers";
import { mockReviews } from "../utils/mockReviews";
import Button from "../components/Button";
import Badge from "../components/Badge";

export default function AdminDashboard() {
  return (
    <DashboardLayout admin>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-textPrimary mb-2">Admin Dashboard</h2>
        <p className="text-textSecondary">Manage books, users, and platform activity</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white border border-borderColor rounded-2xl shadow-card p-6">
          <div className="text-sm font-semibold text-textSecondary mb-2">Total Users</div>
          <div className="text-3xl font-bold text-textPrimary">{mockUsers.length}</div>
        </div>
        
        <div className="bg-white border border-borderColor rounded-2xl shadow-card p-6">
          <div className="text-sm font-semibold text-textSecondary mb-2">Pending Reviews</div>
          <div className="text-3xl font-bold text-accent">{mockReviews.length}</div>
        </div>
        
        <div className="bg-white border border-borderColor rounded-2xl shadow-card p-6">
          <div className="text-sm font-semibold text-textSecondary mb-2">Total Books</div>
          <div className="text-3xl font-bold text-textPrimary">247</div>
        </div>
        
        <div className="bg-white border border-borderColor rounded-2xl shadow-card p-6">
          <div className="text-sm font-semibold text-textSecondary mb-2">Active Exchanges</div>
          <div className="text-3xl font-bold text-success">18</div>
        </div>
      </div>

      {/* Pending Book Reviews */}
      <div className="bg-white border border-borderColor rounded-2xl shadow-card p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-textPrimary">Pending Book Reviews</h3>
          <Badge color="accent">{mockReviews.length} Pending</Badge>
        </div>
        <div className="space-y-4">
          {mockReviews.map(review => (
            <div key={review.id} className="flex items-start justify-between p-4 bg-background rounded-lg border border-borderColor hover:shadow-soft transition-shadow">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-semibold text-textPrimary">{review.bookTitle || "Book Title"}</span>
                  <Badge color="primary">New Upload</Badge>
                </div>
                <p className="text-sm text-textSecondary mb-2">{review.comment}</p>
                <p className="text-xs text-textSecondary">Submitted by User #{review.userId}</p>
              </div>
              <div className="flex gap-2 ml-4">
                <Button variant="success" className="px-4 py-2">
                  ✓ Approve
                </Button>
                <Button variant="error" className="px-4 py-2">
                  ✗ Reject
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* User Management */}
        <div className="bg-white border border-borderColor rounded-2xl shadow-card p-6">
          <h3 className="text-xl font-bold text-textPrimary mb-6">User Management</h3>
          <div className="space-y-3">
            {mockUsers.map(user => (
              <div key={user.id} className="flex items-center justify-between p-4 bg-background rounded-lg">
                <div>
                  <p className="font-semibold text-textPrimary">{user.name}</p>
                  <p className="text-sm text-textSecondary">{user.email}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge color="success">{user.points} pts</Badge>
                  <button className="text-textSecondary hover:text-primary transition-colors">
                    <span className="text-xl">⚙️</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Points Management */}
        <div className="bg-white border border-borderColor rounded-2xl shadow-card p-6">
          <h3 className="text-xl font-bold text-textPrimary mb-6">Points Management</h3>
          <div className="space-y-3">
            {mockUsers.map(user => (
              <div key={user.id} className="flex items-center justify-between p-4 bg-background rounded-lg">
                <div>
                  <p className="font-semibold text-textPrimary">{user.name}</p>
                  <p className="text-sm text-textSecondary">{user.points} points</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="success" className="px-3 py-1.5 text-sm">
                    + Add
                  </Button>
                  <Button variant="error" className="px-3 py-1.5 text-sm">
                    - Deduct
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Reports & Analytics */}
      <div className="bg-white border border-borderColor rounded-2xl shadow-card p-6">
        <h3 className="text-xl font-bold text-textPrimary mb-6">Platform Analytics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="text-center p-4 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl">
            <div className="text-2xl font-bold text-primary mb-1">1,234</div>
            <div className="text-sm text-textSecondary">Total Transactions</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-success/5 to-success/10 rounded-xl">
            <div className="text-2xl font-bold text-success mb-1">89%</div>
            <div className="text-sm text-textSecondary">User Satisfaction</div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-accent/5 to-accent/10 rounded-xl">
            <div className="text-2xl font-bold text-accent mb-1">4.8★</div>
            <div className="text-sm text-textSecondary">Average Rating</div>
          </div>
        </div>
        <div className="h-64 flex items-center justify-center bg-background rounded-xl border-2 border-dashed border-borderColor">
          <div className="text-center text-textSecondary">
            <span className="text-4xl mb-2 block">📊</span>
            <p>Analytics Charts Coming Soon</p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}