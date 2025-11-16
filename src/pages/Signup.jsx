import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Input from "../components/Input";
import Button from "../components/Button";
import Alert from "../components/Alert";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    if (!email || !phone) {
      setError("Please enter both email and phone number.");
      return;
    }
    setError("");
    // Mock signup logic
    alert("Signup successful! Proceed to OTP verification.");
  };

  return (
    <MainLayout>
      <div className="max-w-md mx-auto bg-background border border-borderColor rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-textPrimary mb-6">Sign Up for Shelfie</h2>
        {error && <Alert type="error">{error}</Alert>}
        <form onSubmit={handleSignup}>
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            label="Phone Number"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <Button type="submit" variant="primary" className="w-full mt-4">
            Sign Up
          </Button>
        </form>
      </div>
    </MainLayout>
  );
}
