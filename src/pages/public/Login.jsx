// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "@/lib/auth"; // make sure the path is correct
import Button from "@/components/ui/Button";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    membership_id: "",
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
      const member = await login(formData);

      // Save user in localStorage or Context (your choice)
      localStorage.setItem("user", JSON.stringify(member));

      // Redirect based on role
      if (member.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/member/dashboard");
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
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Membership ID</label>
          <input
            type="text"
            name="membership_id"
            required
            value={formData.membership_id}
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
