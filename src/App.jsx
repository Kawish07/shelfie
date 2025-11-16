
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import EmailOTP from "./pages/EmailOTP";
import SMSOTP from "./pages/SMSOTP";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Catalog from "./pages/Catalog";
import BookDetail from "./pages/BookDetail";
import BookUpload from "./pages/BookUpload";
import ExchangeFlow from "./pages/ExchangeFlow";
import Reviews from "./pages/Reviews";
import Referral from "./pages/Referral";
import Notifications from "./pages/Notifications";
import AdminDashboard from "./pages/AdminDashboard";
import Orders from "./pages/Orders";
import Points from "./pages/Points";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Catalog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/email-otp" element={<EmailOTP />} />
        <Route path="/sms-otp" element={<SMSOTP />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/points" element={<Points />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/upload" element={<BookUpload />} />
        <Route path="/exchange" element={<ExchangeFlow />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/referrals" element={<Referral />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}
