import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/member/Dashboard";
import PaymentPortal from "./pages/PaymentPortal";
import Login from "./pages/public/Login";
import Signup from "./pages/public/Signup";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/payments" element={<PaymentPortal />} />
      <Route path="/signup" element={<Signup />} />
      {/* Add more routes as needed */}
    </Routes>
  );
};

export default App;


