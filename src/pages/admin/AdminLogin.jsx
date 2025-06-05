// src/pages/admin/AdminLogin.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import Button from "@/components/ui/Button";

const AdminLogin = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    // 🔒 Replace with backend API call later
    if (form.email === "admin@nice.org" && form.password === "admin123") {
      login({ email: form.email, role: "admin" });
      navigate("/admin");
    } else {
      setError("Invalid admin credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg p-8 rounded-xl w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Admin Login</h2>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <div className="space-y-2">
          <label className="block text-sm font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-md"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-semibold">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full border p-3 rounded-md"
            required
          />
        </div>

        <Button type="submit" className="w-full">
          Login
        </Button>
      </form>
    </div>
  );
};

export default AdminLogin;
