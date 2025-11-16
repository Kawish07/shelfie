import React, { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import Input from "../components/Input";
import Button from "../components/Button";
import Alert from "../components/Alert";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setError("");
    // Mock login logic
    alert("Logged in!");
  };

  return (
    <MainLayout>
      <div className="max-w-md mx-auto bg-background border border-borderColor rounded-lg shadow p-8">
        <h2 className="text-2xl font-bold text-textPrimary mb-6">Login to Shelfie</h2>
        {error && <Alert type="error">{error}</Alert>}
        <form onSubmit={handleLogin}>
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" variant="primary" className="w-full mt-4">
            Login
          </Button>
        </form>
        <div className="mt-4 text-textSecondary text-sm text-center">
          <a href="/forgot" className="text-accent hover:underline">Forgot password?</a>
        </div>
      </div>
    </MainLayout>
  );
}
