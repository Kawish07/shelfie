import React, { useState } from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import Badge from "../components/Badge";
import { mockTransactions } from "../utils/mockTransactions";
import { mockOrders } from "../utils/mockOrders";
import Carousel from "../components/Carousel";
import BookCard from "../components/BookCard";
import useMockBooks from "../hooks/useMockBooks";

export default function Dashboard() {
  const { books } = useMockBooks();
  const [activeTab, setActiveTab] = useState("orders");
  
  return (
    <DashboardLayout>
      {/* Hero Section with Gradient */}
      <div className="relative -mx-6 -mt-6 mb-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-emerald-700 to-teal-800"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0aDR2NGgtNHptMCAxMGg0djRoLTR6bS0xMCAwaDR2NGgtNHptLTEwIDBoNHY0aC00em0yMCAxMGg0djRoLTR6bTEwIDBoNHY0aC00em0tMjAgMGg0djRoLTR6bS0xMCAwaDR2NGgtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="relative px-6 py-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                  <span className="text-white/90 text-sm font-medium">You're all caught up!</span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
                  Welcome Back, Reader! 👋
                </h1>
                <p className="text-white/80 text-lg">
                  Here's what's happening with your books today
                </p>
              </div>
              
              <div className="flex gap-3">
                <a
                  href="/upload"
                  className="px-6 py-3 bg-accent hover:bg-accent/90 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
                >
                  + Upload Book
                </a>
                <a
                  href="/catalog"
                  className="px-6 py-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 transition-all"
                >
                  Browse Books
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Stats Cards with Enhanced Design */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Points Wallet Card */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-emerald-600 rounded-2xl blur opacity-40 group-hover:opacity-60 transition duration-300"></div>
            <div className="relative bg-gradient-to-br from-primary to-emerald-700 text-white rounded-2xl shadow-xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-white/80 text-sm font-semibold uppercase tracking-wide mb-2">Points Wallet</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold">120</span>
                    <span className="text-white/80 text-lg">pts</span>
                  </div>
                </div>
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <span className="text-4xl">💰</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-white/80 text-sm">
                <span className="text-accent">↗</span>
                <span>+25 this week</span>
              </div>
            </div>
          </div>

          {/* Active Orders Card */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-orange-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative bg-white border border-borderColor rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-textSecondary text-sm font-semibold uppercase tracking-wide mb-2">Active Orders</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-textPrimary">{mockOrders.length}</span>
                    <span className="text-textSecondary text-lg">orders</span>
                  </div>
                </div>
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                  <span className="text-4xl">📦</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-accent text-sm font-semibold">
                <span>→</span>
                <span>2 arriving soon</span>
              </div>
            </div>
          </div>

          {/* Books Listed Card */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative bg-white border border-borderColor rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-textSecondary text-sm font-semibold uppercase tracking-wide mb-2">Books Listed</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-textPrimary">8</span>
                    <span className="text-textSecondary text-lg">books</span>
                  </div>
                </div>
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <span className="text-4xl">📚</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-success text-sm font-semibold">
                <span>✓</span>
                <span>All approved</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="bg-white rounded-2xl shadow-xl border border-borderColor mb-10 overflow-hidden">
          {/* Tab Headers */}
          <div className="flex border-b border-borderColor bg-gray-50/50">
            <button
              onClick={() => setActiveTab("orders")}
              className={`flex-1 px-6 py-4 font-semibold transition-all relative ${
                activeTab === "orders"
                  ? "text-primary"
                  : "text-textSecondary hover:text-textPrimary"
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                📦 Recent Orders
              </span>
              {activeTab === "orders" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
              )}
            </button>
            
            <button
              onClick={() => setActiveTab("transactions")}
              className={`flex-1 px-6 py-4 font-semibold transition-all relative ${
                activeTab === "transactions"
                  ? "text-primary"
                  : "text-textSecondary hover:text-textPrimary"
              }`}
            >
              <span className="flex items-center justify-center gap-2">
                💳 Transactions
              </span>
              {activeTab === "transactions" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
              )}
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "orders" && (
              <div className="space-y-3">
                {mockOrders.map((order, index) => (
                  <div 
                    key={order.id} 
                    className="group flex items-center justify-between p-5 bg-background rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all border border-transparent hover:border-primary/20"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center font-bold text-primary">
                        {index + 1}
                      </div>
                      <div>
                        <p className="font-bold text-textPrimary mb-1">{order.bookTitle}</p>
                        <p className="text-sm text-textSecondary flex items-center gap-2">
                          <span>📅</span> {order.date}
                        </p>
                      </div>
                    </div>
                    <Badge color={
                      order.status === "Delivered" ? "success" : 
                      order.status === "Shipped" ? "primary" : "accent"
                    }>
                      {order.status}
                    </Badge>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "transactions" && (
              <div className="space-y-3">
                {mockTransactions.map(tx => (
                  <div 
                    key={tx.id} 
                    className="flex items-center justify-between p-5 bg-background rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center font-bold text-2xl ${
                        tx.points > 0 ? "bg-success/10 text-success" : "bg-error/10 text-error"
                      }`}>
                        {tx.points > 0 ? "+" : "-"}
                      </div>
                      <div>
                        <p className="font-bold text-textPrimary mb-1">{tx.description}</p>
                        <p className="text-sm text-textSecondary flex items-center gap-2">
                          <span>📅</span> {tx.date}
                        </p>
                      </div>
                    </div>
                    <div className={`text-2xl font-bold ${tx.points > 0 ? "text-success" : "text-error"}`}>
                      {tx.points > 0 ? "+" : ""}{tx.points} pts
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Recommendations Section */}
        <div className="relative overflow-hidden rounded-3xl mb-10">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-purple-500/10"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyQzU1MzAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE0aDR2NGgtNHptMCAxMGg0djRoLTR6bS0xMCAwaDR2NGgtNHptLTEwIDBoNHY0aC00em0yMCAxMGg0djRoLTR6bTEwIDBoNHY0aC00em0tMjAgMGg0djRoLTR6bS0xMCAwaDR2NGgtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
          
          <div className="relative p-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-orange-500 rounded-xl flex items-center justify-center">
                  <span className="text-2xl">✨</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-textPrimary">Recommended For You</h3>
                  <p className="text-textSecondary text-sm">Based on your reading preferences</p>
                </div>
              </div>
              
              <a 
                href="/catalog"
                className="px-5 py-2.5 bg-white border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary hover:text-white transition-all"
              >
                View All
              </a>
            </div>
            
            <Carousel items={books.map(book => <BookCard key={book.id} book={book} />)} />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a 
            href="/upload"
            className="group relative overflow-hidden bg-white rounded-2xl shadow-card border border-borderColor p-6 hover:shadow-xl transition-all"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
            <div className="relative">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-3xl">📤</span>
              </div>
              <h4 className="font-bold text-textPrimary mb-2">Upload Books</h4>
              <p className="text-sm text-textSecondary">Share your collection and earn points</p>
            </div>
          </a>

          <a 
            href="/catalog"
            className="group relative overflow-hidden bg-white rounded-2xl shadow-card border border-borderColor p-6 hover:shadow-xl transition-all"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-accent/10 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
            <div className="relative">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <span className="text-3xl">🔍</span>
              </div>
              <h4 className="font-bold text-textPrimary mb-2">Browse Catalog</h4>
              <p className="text-sm text-textSecondary">Discover new books to exchange</p>
            </div>
          </a>

          <a 
            href="/profile"
            className="group relative overflow-hidden bg-white rounded-2xl shadow-card border border-borderColor p-6 hover:shadow-xl transition-all"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform"></div>
            <div className="relative">
              <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <span className="text-3xl">⚙️</span>
              </div>
              <h4 className="font-bold text-textPrimary mb-2">Settings</h4>
              <p className="text-sm text-textSecondary">Manage your account preferences</p>
            </div>
          </a>
        </div>
      </div>
    </DashboardLayout>
  );
}