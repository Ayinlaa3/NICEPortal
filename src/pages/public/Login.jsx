// src/pages/public/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      // Replace with real backend call
      if (email === "admin@nice.org" && password === "admin123") {
        navigate("/admin");
      } else if (email === "member@nice.org" && password === "member123") {
        navigate("/dashboard");
      } else {
        throw new Error("Invalid email or password.");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg p-8 rounded-xl w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Member Login</h2>

        {error && (
          <p className="text-red-500 text-center text-sm">{error}</p>
        )}

        <div className="space-y-2">
          <label className="block text-sm font-semibold">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-3 rounded-md"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-3 rounded-md"
            required
          />
        </div>

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>

        <div className="text-center text-sm mt-4">
          <a href="/signup" className="text-[var(--primary)] underline">Don’t have an account? Sign up</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
