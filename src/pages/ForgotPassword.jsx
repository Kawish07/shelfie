import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Input from "../components/Input";
import Button from "../components/Button";
import Alert from "../components/Alert";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleForgot = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email.");
      return;
    }
    setError("");
    setSuccess("Password reset link sent to your email.");
  };

  return (
    <MainLayout>
      <div className="max-w-md mx-auto bg-background border border-borderColor rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-textPrimary mb-6">Forgot Password</h2>
        {error && <Alert type="error">{error}</Alert>}
        {success && <Alert type="success">{success}</Alert>}
        <form onSubmit={handleForgot}>
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Button type="submit" variant="primary" className="w-full mt-4">
            Send Reset Link
          </Button>
        </form>
      </div>
    </MainLayout>
  );
}
