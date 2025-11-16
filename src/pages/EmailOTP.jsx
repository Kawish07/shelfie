import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Input from "../components/Input";
import Button from "../components/Button";
import Alert from "../components/Alert";

export default function EmailOTP() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");

  const handleVerify = (e) => {
    e.preventDefault();
    if (otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP.");
      return;
    }
    setError("");
    // Mock OTP verification
    alert("Email verified!");
  };

  return (
    <MainLayout>
      <div className="max-w-md mx-auto bg-background border border-borderColor rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-textPrimary mb-6">Email OTP Verification</h2>
        {error && <Alert type="error">{error}</Alert>}
        <form onSubmit={handleVerify}>
          <Input
            label="Enter OTP"
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength={6}
            required
          />
          <Button type="submit" variant="primary" className="w-full mt-4">
            Verify
          </Button>
        </form>
      </div>
    </MainLayout>
  );
}
