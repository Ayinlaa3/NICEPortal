// src/pages/public/ForgotPassword.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@/components/ui/Button";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      // Replace this with a real API call
      console.log("Sending reset link to:", email);

      // Simulate success
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 shadow-md rounded-xl w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-center text-[var(--primary)]">
          Forgot Password
        </h2>

        {submitted ? (
          <p className="text-green-600 text-center">
            If the email is valid, a reset link has been sent.
          </p>
        ) : (
          <>
            {error && <p className="text-red-600 text-sm">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">
                  Registered Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full mt-1 p-2 border rounded-md"
                />
              </div>

              <Button type="submit" className="w-full">
                Send Reset Link
              </Button>
            </form>
          </>
        )}

        <div className="text-sm text-center">
          <Link to="/" className="text-[var(--primary)] hover:underline">
            Back to login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
