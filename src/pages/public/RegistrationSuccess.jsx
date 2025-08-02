// src/pages/public/RegistrationSuccess.jsx

import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";

const RegistrationSuccess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-green-50">
      <div className="w-full max-w-md p-8 text-center bg-white rounded-lg shadow-xl">
        <h1 className="mb-4 text-3xl font-bold text-green-700">Registration Successful!</h1>
        <p className="mb-6 text-gray-700">
          Thank you for registering with the Nigerian Institution of Civil Engineers. <br />
          Your login details have been sent to your email.
        </p>

        <Link to="/">
          <Button className="w-full">Back to Login</Button>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default RegistrationSuccess;
