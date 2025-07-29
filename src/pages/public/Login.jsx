// src/pages/public/Login.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login as loginAPI } from "@/lib/auth";
import { useAuth } from "@/hooks/useAuth";
import Button from "@/components/ui/Button";

const Login = () => {
  const navigate = useNavigate();
  const { login: setAuthUser } = useAuth();

  const [formData, setFormData] = useState({
    emailOrID: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const isEmail = formData.emailOrID.includes("@");

      const payload = isEmail
        ? { email: formData.emailOrID, password: formData.password }
        : { membership_id: formData.emailOrID, password: formData.password };

      const member = await loginAPI(payload);
      setAuthUser(member);

      if (member.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      console.error(err);
      setError("Invalid login credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 shadow-md rounded-xl w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-[var(--primary)]">
          Member Login
        </h2>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <div>
          <label className="block text-sm font-medium">
            Email or Membership ID
          </label>
          <input
            type="text"
            name="emailOrID"
            required
            value={formData.emailOrID}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>

        <div className="text-right text-sm">
          <Link
            to="/forgot-password"
            className="text-[var(--primary)] hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        <Button className="w-full" type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </div>
  );
};

export default Login;






// // src/pages/public/Login.jsx
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Button from "@/components/ui/Button";
// import { useAuth } from "@/hooks/useAuth";

// const Login = () => {
//   const navigate = useNavigate();
//   const { login } = useAuth();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setLoading(true);

//     try {
//       let role;
//       if (email === "admin@nice.org" && password === "admin123") {
//         role = "admin";
//       } else if (email === "member@nice.org" && password === "member123") {
//         role = "member";
//       } else {
//         throw new Error("Invalid email or password.");
//       }

//       login({ email, role });
//       navigate(role === "admin" ? "/admin" : "/dashboard");
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white shadow-lg p-8 rounded-xl w-full max-w-md space-y-6"
//       >
//         <h2 className="text-2xl font-bold text-center">Member Login</h2>

//         {error && (
//           <p className="text-red-500 text-center text-sm">{error}</p>
//         )}

//         <div className="space-y-2">
//           <label className="block text-sm font-semibold">Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full border p-3 rounded-md"
//             required
//           />
//         </div>

//         <div className="space-y-2">
//           <label className="block text-sm font-semibold">Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full border p-3 rounded-md"
//             required
//           />
//         </div>

//         <Button type="submit" className="w-full" disabled={loading}>
//           {loading ? "Logging in..." : "Login"}
//         </Button>

//         <div className="text-center text-sm mt-4">
//           <a href="/signup" className="text-[var(--primary)] underline">
//             Don’t have an account? Sign up
//           </a>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;
