import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Example validation; replace with real API call
    if (email === "john.doe@example.com" && password === "password123") {
      navigate("/dashboard");
    } else {
      setError("Invalid email or password.");
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
            className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            required
          />
        </div>

        <Button type="submit" className="w-full">Login</Button>
      </form>
    </div>
  );
};

export default Login;